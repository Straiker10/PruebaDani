using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SICOES.BO;
using SICOES.DAO;
namespace SICOES.Formularios
{
    public partial class login : System.Web.UI.Page
    {
        LoginDAO ob = new LoginDAO();
        MaestrosBO on = new MaestrosBO();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btningresar_Click(object sender, EventArgs e)
        {
            if (txtusuario.Text.Length == 0 || txtcontraseña.Text.Length == 0)
            {
                Response.Write("<script>alert('" + "El Usuario o la Contraseña no Existen" + "');</script>");
            }
            else
            {
                on.Usuario = txtusuario.Text;
                on.Contraseña = txtcontraseña.Text;
                
                if (on.Contraseña == ob.validarusuario(on))
                {
                    Session["Usuario"] = on.Usuario;
                    Session["Contraseña"] = on.Contraseña;
                    Session["Imagen"] = ob.ConsultaImagenParamedico(on);
                    Response.Redirect("RegistrarAlumno.aspx");
                }
                else
                {
                    Response.Write("<script>alert('" + "El Usuario o la Contraseña no existen" + "');</script>");
                }
            }
        }
            

        protected void Button1_Click(object sender, EventArgs e)
        {

        }
    }
}