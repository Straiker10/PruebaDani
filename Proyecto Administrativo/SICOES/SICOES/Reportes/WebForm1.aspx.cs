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
namespace SICOES.Reportes
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            try
            {
                ConexionDAO conex = new ConexionDAO();
                string cs = "Data Source=Anonimus;  Initial Catalog=SICOES; Integrated Security = True";
                DataSetAlumnos data = new DataSetAlumnos();
                string sql = "select Folio,fecha,Nuevo from RegistroAlumno where folio=3;";
                SqlDataAdapter adpater = new SqlDataAdapter(sql, cs);
                adpater.Fill(data.RegistroAlumno);
                ReportDocument reporte = new ReportDocument();
                reporte.Load(Server.MapPath("~/Reportes/CrystalReport1.rpt"));
                reporte.SetDataSource(data);
                prueba.ReportSource = reporte;

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}