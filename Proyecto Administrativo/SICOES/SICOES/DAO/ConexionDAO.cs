using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
namespace SICOES.DAO
{
    public class ConexionDAO
    {
        //Variables de Conexion
        SqlConnection con;

        public SqlConnection EstablecerConexion()
        {
            string cs = "Data Source=Anonimus;  Initial Catalog=SICOES; Integrated Security = True";
            con = new SqlConnection(cs);
            return con;
        }

        public void AbrirConexion()
        {
            con.Open();
        }

        public void CerrarConexion()
        {
            con.Close();
        }


        public DataTable RecuperarDatos(string sql)
        {
            SqlDataAdapter adp = new SqlDataAdapter(sql, con);
            DataTable tabla = new DataTable();

            adp.Fill(tabla);
            return tabla;
        }


        //Merodo General Sentencias
        public int EjecutarSentencia(string sql)
        {

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = EstablecerConexion();
            AbrirConexion();
            cmd.CommandText = sql;
            int valor = cmd.ExecuteNonQuery();
            CerrarConexion();
            if (valor <= 0)
            {
                return 0;
            }
            return 1;

        }

        //Metodo Generar para Tablas
        public DataTable TablaGeneral(string sql)
        {
            SqlDataAdapter TablaX = new SqlDataAdapter(sql, EstablecerConexion());
            DataTable TablaConsulta = new DataTable();
            //TablaX.Fill(TablaConsulta);
            return TablaConsulta;
        }
    }
}