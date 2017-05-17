using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SICOES.DAO;
using SICOES.BO;
using SICOES.Services;
using System.IO;
namespace SICOES.Formularios
{
    public partial class RegistroMaestroos : System.Web.UI.Page
    {
        MaestrosBO ob = new MaestrosBO();
        ctrMaestros ctr = new ctrMaestros();
        MaestrosDAO maestros = new MaestrosDAO();
        protected void Page_Load(object sender, EventArgs e)
        {
            mostar();
            btnactualizar.Visible = false;
            btnEliminar.Visible = false;
            btnlimpiar.Visible = false;
        }

        protected void btnagregar_Click(object sender, EventArgs e)
        {
            EnviarDatos();
            if (FileUpload1.HasFile) // Si el usuario tiene un archivo
            {
                try
                {
                    string filename = Path.GetFileName(FileUpload1.FileName);
                    FileUpload1.SaveAs(Server.MapPath("~/img/") + filename); // archivo.jpg
                }
                catch (Exception ex)
                { }
            }
            if (filedocu.HasFile) // Si el usuario tiene un archivo
            {
                try
                {
                    string filename = Path.GetFileName(filedocu.FileName);
                    filedocu.SaveAs(Server.MapPath("~/CV/") + filename); // archivo.DOC
                }
                catch (Exception ex)
                { }
            }

            if (ctr.AltaMaestro(ob) == 1)
            {
                {
                    limpiarDatos();
                    mostar();
                }
            }
        }
        private void EnviarDatos()
        {
            ob.Am = txtam.Text;
            ob.Nombre = txtnombre.Text;
            ob.Gradoacademico = txtgradoAcademico.Text;
            ob.Telefono = txttelefono.Text;
            ob.Usuario = txtusuario.Text;
            ob.Ap = txtap.Text;
            DateTime fecha;
            fecha = DateTime.Now;
            string fechastring;
            fechastring = fecha.ToString();
            string fechaloca = fechastring.Substring(0, 10);
            ob.Añoingreso = fechaloca;
            ob.Cedula = txtcedula.Text;
            ob.Contraseña = txtcontraseña.Text;
            ob.Correo = txtcorreo.Text;
            ob.Curriculum = filedocu.FileName;
            ob.Direccion = txtdireccion.Text;
            ob.Foto = FileUpload1.FileName;
        }
        private void limpiarDatos()
        {
            txtap.Text = "";
            txtam.Text = "";
            txtcedula.Text = "";
            txtcontraseña.Text = "";
            txtcorreo.Text = "";
            txtdireccion.Text = "";
            txtgradoAcademico.Text = "";
            txtnombre.Text = "";
            txttelefono.Text = "";
            txtusuario.Text = "";
        }
        private void mostar()
        {
            GridView1.DataSource = ctr.Consulta(ob);
            GridView1.DataBind();
        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            this.lblid.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[1].Text);
            this.txtnombre.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[2].Text);
            this.txtcedula.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[3].Text);
            this.txtgradoAcademico.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[4].Text);
            this.txttelefono.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[5].Text);
            ob.Clave = int.Parse(lblid.Text);
            System.Data.DataTable tbxsdfdee = maestros.ConsultaImagenAlumno(ob);
            Image1.ImageUrl = "../img/" + tbxsdfdee.Rows[0][0].ToString();
            //curriculum abrir
            //System.Data.DataTable cv = maestros.ConsultaCurriculum(ob);
            //object documento = "../CV/" + cv.Rows[0][0].ToString();
            //this.Application.Documents.Open(@"C:\Test\NewDocument.docx");
            btnactualizar.Visible = true;
            btnlimpiar.Visible = true;
            btnEliminar.Visible = true;
        }

        protected void btnlimpiar_Click(object sender, EventArgs e)
        {
            limpiarDatos();
        }
    }
}