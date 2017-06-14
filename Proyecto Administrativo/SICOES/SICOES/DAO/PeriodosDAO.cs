using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using SICOES.BO;
namespace SICOES.DAO
{
    public class PeriodosDAO
    {
        PeriodosAB datos = new PeriodosAB();

        SqlCommand cmd = new SqlCommand();
        ConexionDAO con = new ConexionDAO();
        //  SqlCommand cmdauera = new SqlCommand();
        public int GuardarPeriodoA(object obj)
        {
            PeriodosAB nom = (PeriodosAB)obj;
            cmd.Connection = con.EstablecerConexion();
            string sql = "insert into PeridoA (Inicio,Fin,CicloPerteneciente) values ('" + nom.InicioA + "','" + nom.FinA + "','" + nom.Claveciclo + "')";
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
        public int GuardarPeriodoB(object obj)
        {
            PeriodosAB nom = (PeriodosAB)obj;
            cmd.Connection = con.EstablecerConexion();
            string sql = "insert into PeridoB (Inicio,Fin,CicloPerteneciente) values ('" + nom.InicioB + "','" + nom.InicioB + "','" + nom.Claveciclo + "')";
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
            MaestrosBO datos = (MaestrosBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;
            sql = "select Clave,Nombre,Cedula,GradoAcademico as 'Grado Academico' ,Telefono  from RegistroMaestros";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
        public DataTable ConsultaCiclo(object obj)
        {
            PeriodosAB datos = (PeriodosAB)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select MAX(Clave) from Ciclo ";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
    }
}