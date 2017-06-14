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
using System.Data;
using System.Data.SqlClient;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html.simpleparser;

namespace SICOES.Formularios
{
    public partial class RegistrarAlumno : System.Web.UI.Page
    {
        AlumnosBO Alumnos = new AlumnosBO();
        ctrAlumnos ctram = new ctrAlumnos();
        AlumnosDAO prueba = new AlumnosDAO();
        string acta,curp,constancia,comprobantedomicilio,boletascalificacion,certificadoparcial,oficiorevalidadion,constanciamedia,certificadosecundaria;
        string fotos;
        String Usuario, Contraseña;
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
            System.Data.DataTable datosfull = prueba.ConsultaDatosFull(Alumnos);
            chknuevo.Text = datosfull.Rows[0][2].ToString();
            chkrevalida.Text = datosfull.Rows[0][3].ToString();
            txtcurp.Text = datosfull.Rows[0][8].ToString();
            txtcalle.Text = datosfull.Rows[0][9].ToString();
            txtnumero.Text = datosfull.Rows[0][10].ToString();
            txtcolonia.Text = datosfull.Rows[0][11].ToString();
            txtcodigopostal.Text = datosfull.Rows[0][12].ToString();
            txttelefonocasa.Text = datosfull.Rows[0][13].ToString();
            DPestado.Text = datosfull.Rows[0][14].ToString();
            dpmunicipio.Text = datosfull.Rows[0][15].ToString();
            txtnompadre.Text = datosfull.Rows[0][16].ToString();
            txtnombreMadre.Text = datosfull.Rows[0][17].ToString();
            txtnomturor.Text = datosfull.Rows[0][18].ToString();
            txttelefonopadre.Text = datosfull.Rows[0][19].ToString();
            txttelmadre.Text = datosfull.Rows[0][20].ToString();
            txttelfonoturo.Text = datosfull.Rows[0][21].ToString();
            if (txtnomturor.Text == txtnompadre.Text) {chkpadretutor.Checked = true; }
            else  if (txtnomturor.Text==txtnombreMadre.Text) { chkmadretutor.Checked = true; }
            if (chknuevo.Text == "Nuevo") {chknuevo.Checked = true;}
            else{chknuevo.Checked = false; chknuevo.Text = "Nuevo"; }
            if (chkrevalida.Text == "Revalida") { chkrevalida.Checked = true; }
            else { chkrevalida.Checked = false; chkrevalida.Text = "Revalida"; }
            txtescuela.Text = datosfull.Rows[0][22].ToString();
            txtclave.Text = datosfull.Rows[0][23].ToString();
            dpturno.Text = datosfull.Rows[0][24].ToString();
            checkacta.Text = datosfull.Rows[0][25].ToString();
            if (checkacta.Text == "SI") { checkacta.Checked = true; checkacta.Text = "Acta"; } else { checkacta.Checked = false; checkacta.Text = "Acta"; }
            checkfotos.Text = datosfull.Rows[0][26].ToString();
            if (checkfotos.Text == "SI") { checkfotos.Checked = true; checkacta.Text = "Fotos"; } else { checkfotos.Checked = false; checkfotos.Text = "Fotos"; }
            checkcurp.Text = datosfull.Rows[0][27].ToString();
            if (checkcurp.Text == "SI") { checkcurp.Checked = true; checkcurp.Text = "Curp"; } else { checkcurp.Checked = false; checkcurp.Text = "Curp"; }
            checkconstancia.Text = datosfull.Rows[0][28].ToString();
            if (checkconstancia.Text == "SI") { checkconstancia.Checked = true; checkconstancia.Text = "Constancia"; } else { checkconstancia.Checked = false; checkconstancia.Text = "Constancia"; }
            checkcomrodomicilio.Text = datosfull.Rows[0][29].ToString();
            if (checkcomrodomicilio.Text == "SI") { checkcomrodomicilio.Checked = true; checkcomrodomicilio.Text = "Comprobante de Domicilio"; } else { checkcomrodomicilio.Checked = false; checkcomrodomicilio.Text = "Comprobante de Domicilio"; }
            checkboleta.Text = datosfull.Rows[0][30].ToString();
            if (checkboleta.Text == "SI") { checkboleta.Checked = true; checkboleta.Text = "Boletas de Calificación"; } else { checkboleta.Checked = false; checkboleta.Text = "Boletas de Calificación"; }
            checkcertificadoparcial.Text = datosfull.Rows[0][31].ToString();
            if (checkcertificadoparcial.Text == "SI") { checkcertificadoparcial.Checked = true; checkcertificadoparcial.Text = "Certificado Parcial"; } else { checkcertificadoparcial.Checked = false; checkcertificadoparcial.Text = "Certificado Parcial"; }
            checkoficioreva.Text = datosfull.Rows[0][32].ToString();
            if (checkoficioreva.Text == "SI") { checkoficioreva.Checked = true; checkoficioreva.Text = "Oficio de Revalidación"; } else { checkoficioreva.Checked = false; checkoficioreva.Text = "Oficio de Revalidación"; }
            checkconstanciamedia.Text = datosfull.Rows[0][33].ToString();
            if (checkconstanciamedia.Text == "SI") { checkconstanciamedia.Checked = true; checkconstanciamedia.Text = "Constancia de comp. 1/2"; } else { checkconstanciamedia.Checked = false; checkconstanciamedia.Text = "Constancia de Comp. 1/2"; }
            checkcertificadosecundaria.Text = datosfull.Rows[0][34].ToString();
            if (checkcertificadosecundaria.Text == "SI") { checkcertificadosecundaria.Checked = true; checkcertificadosecundaria.Text = "Certificado de Secundaria"; } else { checkcertificadosecundaria.Checked = false; checkcertificadosecundaria.Text = "Certificado de Secundaria"; }
            txtotros.Text = datosfull.Rows[0][35].ToString();
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
                    string script = "window.open('ReporteAlumnoInscrito.aspx', '');";
                    ScriptManager.RegisterStartupScript(this, typeof(Page), "popup", script, true);
                }
            }
        }
        //private void generarpdf()
        //{
        //    Document pdfDoc = new Document(PageSize.A4, 10, 10, 10, 10);

        //    try
        //    {
        //        EnviarDatos();
        //        PdfWriter.GetInstance(pdfDoc, System.Web.HttpContext.Current.Response.OutputStream);

        //        //Open PDF Document to write data 
        //        pdfDoc.Open();
        //        string cadenaFinal = "";
        //        string path = Server.MapPath("/Imagenes/logitopo.png");
        //        cadenaFinal += "<img src='" + path + "' Height='70' Width='70' />";
        //        cadenaFinal += "Escuela Preparatoria Hunucma <br/> Incorporada a la Universidad Autonoma de Yucatán<br/>";
        //        cadenaFinal += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Folio " + lblid.Text + "<br/>";
        //        DateTime fecha = DateTime.Now;
        //        string fecha2 = fecha.ToString();
        //        cadenaFinal +="Fecha" + fecha2.Substring(0,10);
        //        cadenaFinal += "Nombre del aspirante <br/>  ";
        //        cadenaFinal += txtApellidoPaterno.Text + txtapllidomaterno.Text + txtnombres.Text;
        //        //Assign Html content in a string to write in PDF 
        //        string strContent = cadenaFinal;

        //        //Read string contents using stream reader and convert html to parsed conent 
        //        var parsedHtmlElements = HTMLWorker.ParseToList(new StringReader(strContent), null);

        //        //Get each array values from parsed elements and add to the PDF document 
        //        foreach (var htmlElement in parsedHtmlElements)
        //            pdfDoc.Add(htmlElement as IElement);

        //        //Close your PDF 
        //        pdfDoc.Close();

        //        Response.ContentType = "application/pdf";

        //        //Set default file Name as current datetime 
        //        Response.AddHeader("content-disposition", "attachment; filename=DEMO.pdf");
        //        System.Web.HttpContext.Current.Response.Write(pdfDoc);

        //        Response.Flush();
        //        Response.End();

        //    }
        //    catch (Exception ex)
        //    {
        //        Response.Write(ex.ToString());
        //    }
        //}
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
            mostrarestado();
            mostrarMunicipio();
            btnactualizar.Visible = false;
            btnlimpiar.Visible = false;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            GenerarMatricula();

        }

        protected void btnregistroEstado_Click(object sender, EventArgs e)
        {
            Alumnos.EstadoNuevo1 = txtnuevoEstado.Text;
            if (ctram.AltaEstado(Alumnos) == 1)
            {
                mostrarestado();
                txtnuevoEstado.Text = "";
            }
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
           Usuario = dia + mes + año+txtApellidoPaterno.Text.Substring(0,1)+txtapllidomaterno.Text.Substring(0,1);
            Contraseña = Usuario;
            //txtmatriculaalumno.Text = matricula;
        }

        protected void DPestado_Load(object sender, EventArgs e)
        {
        }
        private void cargarestados()
        {
            SqlConnection con = new SqlConnection("Data Source=Anonimus;  Initial Catalog=SICOES; Integrated Security = True");
            SqlCommand cmd = new SqlCommand("select Nombre from Estado", con);
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            sda.Fill(ds);
            DPestado.DataSource = ds;
            DPestado.DataTextField = "Nombre";                            // FieldName of Table in DataBase
            DPestado.DataValueField = "Nombre";
            DPestado.DataBind();
        }
        private void cargarMunicipios()
        {
            SqlConnection con = new SqlConnection("Data Source=Anonimus;  Initial Catalog=SICOES; Integrated Security = True");
            SqlCommand cmd = new SqlCommand("select Nombre from Municipio", con);
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            sda.Fill(ds);
            dpmunicipio.DataSource = ds;
            dpmunicipio.DataTextField = "Nombre";                            // FieldName of Table in DataBase
            dpmunicipio.DataValueField = "Nombre";
            dpmunicipio.DataBind();
        }

        protected void DPestado_PreRender(object sender, EventArgs e)
        {
            cargarestados();
        }

        protected void btnmunicipio_Click(object sender, EventArgs e)
        {
            Alumnos.MunicipioNuevo1 = txtnuevomunicioio.Text;
            if (ctram.AltaMunicipio(Alumnos) == 1)
            {
                mostrarMunicipio();
            }
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

        protected void dpmunicipio_PreRender(object sender, EventArgs e)
        {
            cargarMunicipios();
        }

        protected void Button1_Click1(object sender, EventArgs e)
        {

            int Valor = int.Parse(lblid.Text);
            string script = "window.open('ReporteAlumnoGuardado.aspx?Valor="+Valor+"', '');";
            ScriptManager.RegisterStartupScript(this, typeof(Page), "popup", script, true);
            mostar();
            LimpiarDatos();
        }

        protected void btnactualizar_Click(object sender, EventArgs e)
        {
            Alumnos.Folio = int.Parse(lblid.Text);
            EnviarDatos();
            if (ctram.ActualizarAlumno(Alumnos) == 1)
            {
                LimpiarDatos();
                mostar();

            }
        }

        protected void DPestado_SelectedIndexChanged(object sender, EventArgs e)
        {
            Alumnos.Estado = DPestado.Text;
        }

        private void mostar()
        {
            GridView1.DataSource = ctram.Consulta(Alumnos);
            GridView1.DataBind();
        }
        private void mostrarestado()
        {
            gridmodal.DataSource = ctram.ConsultaEstados(Alumnos);
            gridmodal.DataBind();
        }
        private void mostrarMunicipio()
        {
            gridmunicipios.DataSource = ctram.ConsultaMunicipio(Alumnos);
            gridmunicipios.DataBind();
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
                Alumnos.Fotos = "SI";
            }
            else
            { Alumnos.Fotos = "NO"; }
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
            GenerarMatricula();
            Alumnos.Usuario = Usuario;
            Alumnos.Contraseña = Contraseña;
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
          
            Alumnos.Turnoescuelaprocedencia = dpturno.Text;


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
          //  DPestado.Text = "Seleccione";
            txtfechanacimiento.Value = "";
          //  dpmunicipio.Text = "Seleccione";
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
            dpturno.Text = "Seleccione";
            chknuevo.Checked = false;
            chkrevalida.Checked = false;
            chkpadretutor.Checked = false;
            chkmadretutor.Checked = false;
            checkacta.Checked = false;
            checkboleta.Checked = false;
            checkcertificadoparcial.Checked = false;
            checkcertificadosecundaria.Checked = false;
            checkcomrodomicilio.Checked = false;
            checkconstancia.Checked = false;
            checkconstanciamedia.Checked = false;
            checkcurp.Checked = false;
            checkfotos.Checked = false;
            checkoficioreva.Checked = false;

           
            
        }
        private void metodoTutor()
        {
            if (chkpadretutor.Checked == true)
            {
                txtnomturor.Visible = false;
                txttelfonoturo.Visible = false;
                chktutortutoor.Visible = false;
                Alumnos.Nomtutor = txtnompadre.Text;
                Alumnos.Teltutor = txttelefonopadre.Text;
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