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
    public partial class WebForm2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                ConexionDAO conex = new ConexionDAO();
                string cs = "Data Source=Anonimus;  Initial Catalog=SICOES; Integrated Security = True";
                DataSetAlumnos data = new DataSetAlumnos();
                string sql = "SELECT top 1 * FROM RegistroAlumno where Status='Inscrito' ORDER BY Folio DESC ;";
                SqlDataAdapter adpater = new SqlDataAdapter(sql, cs);
                adpater.Fill(data.RegistroAlumno);
                ReportDocument reporte = new ReportDocument();
                reporte.Load(Server.MapPath("~/Reportes/ReporteAlumnoInscrito.rpt"));
                reporte.SetDataSource(data);
                Prueba.ReportSource = reporte;

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}