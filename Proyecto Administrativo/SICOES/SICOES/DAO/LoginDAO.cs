using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using SICOES.BO;
namespace SICOES.DAO
{
    public class LoginDAO
    {
        ConexionDAO conexion = new ConexionDAO();
        string SQL;
        SqlCommand cmd = new SqlCommand();
        ConexionDAO con = new ConexionDAO();
        //crear metodo 

        public string validarusuario(MaestrosBO objusuario)
        {

            string contra = "";
            SQL = "Select Contraseña from registroMaestros where Usuario = '" + objusuario.Usuario + "'";
            SqlCommand cmd = new SqlCommand(SQL, conexion.EstablecerConexion());
            conexion.AbrirConexion();
            cmd.Parameters.AddWithValue("@Usuario", contra);
            SqlDataReader leer = cmd.ExecuteReader();
            if (leer.Read())
            {
                contra = leer["Contraseña"].ToString();
            }
            conexion.CerrarConexion();
            return contra;

        }
        public String ConsultaImagenParamedico(object obj)
        {
            MaestrosBO datos = (MaestrosBO)obj;
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand(SQL, conexion.EstablecerConexion());
            conexion.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select Foto from registroMaestros  WHERE Usuario='" + datos.Usuario + "'";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            conexion.CerrarConexion();
            return dt.Rows[0][0].ToString();
        }
      
    }
}