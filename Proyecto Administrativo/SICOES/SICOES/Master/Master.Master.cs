using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SICOES.Master
{
    public partial class Master : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Metodo_DE_Login();
        }
        private void Metodo_DE_Login()
        {
            if
            (Session["Usuario"] == null || Session["Contraseña"] == null)
            {
                Response.Redirect("Login.aspx");
                //cuando ponga el boton de cerrar secion igualarlo a solo un =null
            }
            else
            {
                logo.Src = "../img/" + Session["Imagen"].ToString();
                nom.InnerText = Session["Usuario"].ToString();
            }
        }
    }
}