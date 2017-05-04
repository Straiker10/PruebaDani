using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SICOES.Formularios
{
    public partial class RegistrarAlumno : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

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
        string matricula = "";
        DateTime fecha;
        fecha = DateTime.Now;
            fechastring = fecha.ToString();
            dia=fechastring.Substring(0,2);
            mes = fechastring.Substring(3,2);
            año = fechastring.Substring(8,2);
            matricula = año + mes + dia;
            txtmatriculaalumno.Text = matricula;
        }
    }
}