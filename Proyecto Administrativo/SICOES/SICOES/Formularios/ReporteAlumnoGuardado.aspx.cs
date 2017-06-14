using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using CrystalDecisions.CrystalReports.Engine;
using System.Configuration;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Drawing;
using CrystalDecisions.Web;
using CrystalDecisions.Shared;
using SICOES.DAO;
using SICOES.Reportes;
namespace SICOES.Formularios
{
    public partial class ReporteAlumnoGuardado : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                String Valor = Request.QueryString["Valor"];
                int Folio = int.Parse(Valor);
                ConexionDAO conex = new ConexionDAO();
                string cs = "Data Source=Anonimus;  Initial Catalog=SICOES; Integrated Security = True";
                DataSetAlumnos data = new DataSetAlumnos();
                string sql = "SELECT  * FROM RegistroAlumno where Folio='"+Folio+"';";
                SqlDataAdapter adpater = new SqlDataAdapter(sql, cs);
                adpater.Fill(data.RegistroAlumno);
                ReportDocument reporte = new ReportDocument();
                reporte.Load(Server.MapPath("~/Reportes/ReporteAlumnoInscrito.rpt"));
                reporte.SetDataSource(data);
                pruebaloca.ReportSource = reporte;

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}