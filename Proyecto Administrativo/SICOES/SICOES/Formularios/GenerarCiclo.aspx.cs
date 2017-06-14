using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SICOES.Services;
using SICOES.BO;
using SICOES.DAO;
namespace SICOES.Formularios
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        PeriodosDAO consul = new PeriodosDAO();
        CicloBO Datos = new CicloBO();
        CTRCiclo ctr = new CTRCiclo();
        PeriodosAB datosperiodo = new PeriodosAB();
        CtrPeriodos ctrperidos = new CtrPeriodos();
        protected void Page_Load(object sender, EventArgs e)
        {
            ConsultarDatos();
            GridView1.Visible = false;
            btnActualizar.Visible = false;
            btneliminar.Visible = false;
            ventanaperido.Visible = false;
        }

        protected void btnAgregar_Click(object sender, EventArgs e)
        {
            EnviarDatos();
            if (ctr.AltaAlumno(Datos) == 1)
            {
                LimpiarDatos();
                ConsultarDatos();
                ventanaperido.Visible = true;
            }
        }
        private void EnviarDatos()
        {
            Datos.Nombre = txtnombreCiclo.Text;
            Datos.Inicio = txtinicio.Value;
            Datos.Fin = txtfin.Value;

        }
        private void LimpiarDatos()
        {
            txtnombreCiclo.Text = "";
         
        }
        private void ConsultarDatos() {
            GridView1.DataSource = ctr.Consulta(Datos);
            GridView1.DataBind();
        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            this.lblid.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[1].Text);
            this.txtnombreCiclo.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[2].Text);
            this.txtinicio.Value = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[3].Text);
            this.txtfin.Value = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[4].Text);
            Datos.Clave = int.Parse(lblid.Text);
            System.Data.DataTable datosfull = ctr.ConsultaFull(Datos);
            
            //txtfin.Value = datosfull.Rows[0][2].ToString().Substring(10,20);
        }
        private void enviarperidoB()
        {
            datosperiodo.InicioB = txtinicioperiodoB.Value;
            datosperiodo.FinB = txtfinperiodoB.Value;
        }
        private void enviarperidoA()
        {
            datosperiodo.InicioA = txtperidoAInicio.Value;
            datosperiodo.FinA = txtperidoAfin.Value;
        }
        protected void btnAgrgar_Click(object sender, EventArgs e)
        {
            enviarperidoB();
            System.Data.DataTable cilco = consul.ConsultaCiclo(datosperiodo);
            datosperiodo.Claveciclo = int.Parse(cilco.Rows[0][0].ToString());
            if ( ctrperidos.GuardarPeriodoB(datosperiodo)==1)
                    {
                GridView1.Visible = true;
            }
        }

        protected void btnPeridoA_Click(object sender, EventArgs e)
        {
            enviarperidoA();
            System.Data.DataTable cilco = consul.ConsultaCiclo(datosperiodo);
            datosperiodo.Claveciclo = int.Parse(cilco.Rows[0][0].ToString());
            if (ctrperidos.GuardarPeriodoA(datosperiodo) == 1)
            {
                ventanaperido.Visible = true;
            }
        }
    }
}