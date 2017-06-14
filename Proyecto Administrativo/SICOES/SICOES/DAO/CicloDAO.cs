using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SICOES.BO;
using System.Data;
using System.Data.SqlClient;
namespace SICOES.DAO
{
    public class CicloDAO
    {
       CicloBO  datos = new CicloBO();

        SqlCommand cmd = new SqlCommand();
        ConexionDAO con = new ConexionDAO();
        //  SqlCommand cmdauera = new SqlCommand();
        public int GuardarCiclo(object obj)
        {
            CicloBO nom = (CicloBO)obj;
            cmd.Connection = con.EstablecerConexion();
            string sql = "insert into Ciclo (NombreCiclo,Inicio,Fin) values ('" + nom.Nombre + "','" + nom.Inicio + "','"+ nom.Fin +"')";
            cmd.CommandText = sql;
            con.AbrirConexion();
            int i = cmd.ExecuteNonQuery();
            con.CerrarConexion();
            if (i <= 0)
            {
                return 0;
            }
            return 1;
        }
        public DataTable Consulta(object obj)
        {
            CicloBO datos = (CicloBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select clave, NombreCiclo as 'Nombre del Ciclo',Inicio as 'Inicio del Ciclo', Fin as 'Fin del Ciclo' from Ciclo";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
        public DataTable ConsultaFull(object obj)
        {
            CicloBO datos = (CicloBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select * from Ciclo where clave='"+datos.Clave+"'";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
    }
}