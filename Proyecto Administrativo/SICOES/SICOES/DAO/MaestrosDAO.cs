using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SICOES.BO;
using System.Data.SqlClient;
using System.Data;
namespace SICOES.DAO
{
    public class MaestrosDAO
    {
        MaestrosBO datos = new MaestrosBO();

        SqlCommand cmd = new SqlCommand();
        ConexionDAO con = new ConexionDAO();
        //  SqlCommand cmdauera = new SqlCommand();
        public int GuardarMaestro(object obj)
        {
            MaestrosBO nom = (MaestrosBO)obj;
            cmd.Connection = con.EstablecerConexion();
            string sql = "insert into RegistroMaestros (Nombre,ApellidoPaterno,ApellidoMaterno,GradoAcademico,Telefono,Correo,Direccion,Curriculum,Cedula,Foto,Añoingreso,Usuario,Contraseña) values ('" + nom.Nombre + "','" + nom.Ap + "','" + nom.Am + "','" + nom.Gradoacademico + "','" + nom.Telefono + "','" + nom.Correo + "','" + nom.Direccion + "','" + nom.Curriculum + "','" + nom.Cedula + "','" + nom.Foto + "','" + nom.Añoingreso + "','" + nom.Usuario + "','" + nom.Contraseña + "')";
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
        public int eliminarAlumno(object id)
        {
            AlumnosBO datos = (AlumnosBO)id;
            cmd.Connection = con.EstablecerConexion();
            //  string sql = "update emergentequellama set ambulancia = @ambulancia,id=@id";
            string sql = "delete  from RegistroAlumno WHERE Folio='" + datos.Folio + "'";
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
        public DataTable ConsultaImagenAlumno(object obj)
        {
            MaestrosBO datos = (MaestrosBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select Foto from RegistroMaestros  WHERE Clave='" + datos.Clave + "'";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
        public DataTable ConsultaCurriculum(object obj)
        {
            MaestrosBO datos = (MaestrosBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select Curriculum from RegistroMaestros  WHERE Clave='" + datos.Clave + "'";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
    }
}