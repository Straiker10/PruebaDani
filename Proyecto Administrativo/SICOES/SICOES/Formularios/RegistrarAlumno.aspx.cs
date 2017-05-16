using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SICOES.BO;
using SICOES.DAO;
using SICOES.Services;
using System.IO;
namespace SICOES.Formularios
{
    public partial class RegistrarAlumno : System.Web.UI.Page
    {
        AlumnosBO Alumnos = new AlumnosBO();
        ctrAlumnos ctram = new ctrAlumnos();
        AlumnosDAO prueba = new AlumnosDAO();
        string acta,fotos,curp,constancia,comprobantedomicilio,boletascalificacion,certificadoparcial,oficiorevalidadion,constanciamedia,certificadosecundaria;

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            this.lblid.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[1].Text);
            this.txtnombres.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[2].Text);
            this.txtApellidoPaterno.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[3].Text);
            this.txtapllidomaterno.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[4].Text);
          this.txtfechanacimiento.Value = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[5].Text);
            this.txtnomturor.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[6].Text);
            this.txttelfonoturo.Text = Convert.ToString(this.GridView1.Rows[GridView1.SelectedIndex].Cells[7].Text);
            // this.imagenparameidco.ImageUrl= (this.GridView1.Rows[GridView1.SelectedIndex].Cells[5].Text);
            Alumnos.Folio = int.Parse(lblid.Text);
            System.Data.DataTable tbxsdfdee = prueba.ConsultaImagenAlumno(Alumnos);
            Image1.ImageUrl = "../img/" + tbxsdfdee.Rows[0][0].ToString();
            btnactualizar.Visible = true;
            btnlimpiar.Visible = true;
        }

        protected void btninscribir_Click(object sender, EventArgs e)
        {
            EnviarDatos();
            Alumnos.Status = "Inscrito";
            if (ctram.AltaAlumno(Alumnos) == 1)
            {
                {
                    LimpiarDatos();
                    mostar();

                }
            }
        }

        protected void chkpadretutor_CheckedChanged(object sender, EventArgs e)
        {
            metodoTutor();
        }

        protected void chkmadretutor_CheckedChanged(object sender, EventArgs e)
        {
            metodoTutor();
        }

        protected void btnlimpiar_Click(object sender, EventArgs e)
        {
            LimpiarDatos();
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            mostar();
            btnactualizar.Visible = false;
            btnlimpiar.Visible = false;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            GenerarMatricula();

        }
        private void GenerarMatricula()
        {
             string fechastring;
        string dia = "";
        string mes = "";
        string año = "";
        DateTime fecha;
        fecha = DateTime.Now;
            fechastring = fecha.ToString();
            dia=fechastring.Substring(0,2);
            mes = fechastring.Substring(3,2);
            año = fechastring.Substring(8,2);
            //txtmatriculaalumno.Text = matricula;
        }

        protected void btnguardar_Click(object sender, EventArgs e)
        {
            EnviarDatos();
            Alumnos.Status = "Guardado";
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
            
            if (ctram.AltaAlumno(Alumnos) == 1)
            {
                {
                    LimpiarDatos();
                    mostar();
                   
                }
            }
        }
        private void mostar()
        {
            GridView1.DataSource = ctram.Consulta(Alumnos);
            GridView1.DataBind();
        }
        private void metodochecks()
        {
            if (checkacta.Checked == true)
            {
                acta = "SI";
            }
            else
            { acta = "NO"; }
            if (checkboleta.Checked == true)
            {
                boletascalificacion = "SI";
            }
            else
            { boletascalificacion = "NO"; }
            if (checkcertificadoparcial.Checked == true)
            {
                certificadoparcial = "SI";
            }
            else
            { certificadoparcial = "NO"; }
            if (checkcertificadosecundaria.Checked == true)
            {
                certificadosecundaria = "SI";
            }
            else
            { certificadosecundaria = "NO"; }
            if (checkcomrodomicilio.Checked == true)
            {
                comprobantedomicilio = "SI";
            }
            else
            { comprobantedomicilio = "NO"; }
            if (checkconstancia.Checked == true)
            {
                constancia = "SI";
            }
            else
            { constancia = "NO"; }
            if (checkconstanciamedia.Checked == true)
            {
                constanciamedia = "SI";
            }
            else
            { constanciamedia = "NO"; }
            if (checkcurp.Checked == true)
            {
                curp = "SI";
            }
            else
            { curp = "NO"; }
            if (checkfotos.Checked == true)
            {
                fotos = "SI";
            }
            else
            { fotos = "NO"; }
            if (checkoficioreva.Checked == true)
            {
                oficiorevalidadion = "SI";
            }
            else
            { oficiorevalidadion = "NO"; }
        }
        private void EnviarDatos()
        {
            RevalidaNuevo();
            metodoTutor();
            metodochecks();
            Alumnos.Imagen1 = FileUpload1.FileName;
            Alumnos.Actadenacimiento = acta;
            Alumnos.AM1 = txtapllidomaterno.Text;
            Alumnos.AP1 = txtApellidoPaterno.Text;
            Alumnos.Boletascalificacion = boletascalificacion;
            Alumnos.Calle = txtcalle.Text;
            Alumnos.Certificadoparcial = certificadoparcial;
            Alumnos.CertificadoSecundaria1 = certificadosecundaria;
            Alumnos.Claveescuelaprocedencia = txtclave.Text;
            Alumnos.Codigopostal = txtcodigopostal.Text;
            Alumnos.Colonia = txtcolonia.Text;
            Alumnos.Comprobantedomicilio = comprobantedomicilio;
            Alumnos.Constancia = constancia;
            Alumnos.ConstanciaMedia1 = constanciamedia;
            Alumnos.Curp = txtcurp.Text;
            Alumnos.Curpdocu = curp;
            Alumnos.Escuelaprocedencia = txtescuela.Text;
            Alumnos.Estado = DPestado.Text;
            Alumnos.Municipio = dpmunicipio.Text;
            Alumnos.Nombre = txtnombres.Text;
            Alumnos.Nommadre = txtnombreMadre.Text;
            Alumnos.Nompadre = txtnompadre.Text;
            Alumnos.Numero = txtnumero.Text;
            Alumnos.OficiioRevalidacion = oficiorevalidadion;
            Alumnos.Otros1 = txtotros.Text;
           
            Alumnos.Fechanacimiento = txtfechanacimiento.Value.ToString() ;

            string fechastring;
            DateTime fecha;
            fecha = DateTime.Now;
            fechastring = fecha.ToString();
            string fechaloca = fechastring.Substring(0, 10);
            Alumnos.Fecha = fechaloca;
            Alumnos.Telefonodomicilio = txttelefonocasa.Text;
            Alumnos.Telmadre = txttelmadre.Text;
            Alumnos.Telpadre = txttelefonopadre.Text;
          
            Alumnos.Turnoescuelaprocedencia = txtturno.Text;


        }
        private void RevalidaNuevo()
        {
            if (chkrevalida.Checked == true)
            {
                Alumnos.Revalida = "Revalida";
                Alumnos.Nuevo = "NO";
            }
            if (chknuevo.Checked == true)
            {
                Alumnos.Nuevo = "Nuevo";
                Alumnos.Revalida = "NO";
            }

        }
        private void LimpiarDatos()
        {
            txtApellidoPaterno.Text = "";
            txtapllidomaterno.Text = "";
            txtcalle.Text = "";
            txtclave.Text = "";
            txtcodigopostal.Text = "";
            txtcolonia.Text = "";
            txtcurp.Text = "";
            txtescuela.Text = "";
            DPestado.Text = "Seleccione";
            txtfechanacimiento.Value = "";
            dpmunicipio.Text = "Seleccione";
            txtnombreMadre.Text = "";
            txtnombres.Text = "";
            txtnompadre.Text = "";
            txtnomturor.Text = "";
            txtnumero.Text = "";
            txtotros.Text = "";
            txttelefonocasa.Text = "";
            txttelefonopadre.Text = "";
            txttelfonoturo.Text = "";
            txttelmadre.Text = "";
            txtturno.Text = "";
            chknuevo.Checked = false;
            chkrevalida.Checked = false;
            chkpadretutor.Checked = false;
            chkmadretutor.Checked = false;

        }
        private void metodoTutor()
        {
            if (chkpadretutor.Checked == true)
            {
                txtnomturor.Visible = false;
                txttelfonoturo.Visible = false;
                chktutortutoor.Visible = false;
                Alumnos.Nomtutor = txtnompadre.Text;
                Alumnos.Teltutor = txttelfonoturo.Text;
            }
            if (chkmadretutor.Checked == true)
            {
                txtnomturor.Visible = false;
                txttelfonoturo.Visible = false;
                chktutortutoor.Visible = false;
                Alumnos.Nomtutor = txtnombreMadre.Text;
                Alumnos.Teltutor = txttelmadre.Text;
            }
            if (chkpadretutor.Checked == false && chkmadretutor.Checked == false)
            {
                txtnomturor.Visible = true;
                txttelfonoturo.Visible = true;
                chktutortutoor.Visible = true;
                Alumnos.Nomtutor = txtnomturor.Text;
                Alumnos.Teltutor = txttelfonoturo.Text;
            }
        }
    }
}