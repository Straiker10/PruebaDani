using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using SICOES.BO;
namespace SICOES.DAO
{
    public class AlumnosDAO
    {
     AlumnosBO datos = new AlumnosBO();

        SqlCommand cmd = new SqlCommand();
        ConexionDAO con = new ConexionDAO();
      //  SqlCommand cmdauera = new SqlCommand();
        public int GuardarAlumno(object obj)
        {
            AlumnosBO nom = (AlumnosBO)obj;
            cmd.Connection = con.EstablecerConexion();
            string sql = "insert into RegistroAlumno (fecha,Nuevo,Revalida,ApellidoPaterno,ApellidoMaterno,Nombre,FechaNaci,Curp,Calle,NumeroCalle,Colonia,CodigoPostal,Telefono,Estado,Municipio,NombrePadre,NombreMadre,NombreTutor,TelPadre,TelMadre,TelTutor,EscuelaProcedencia,ClaveEscuelaProcedencia,TurnoAnitguaEscuela,Acta,Fotos,CurpDocu,Constancia,ComproDomi,BoletasCalificacion,CertificadoParcial,OficioRevalidadcion,ConstanciaMedia,CertificadoSecundaria,otros,Status,Imagen) values ('" + nom.Fecha+"','"+nom.Nuevo+"','"+nom.Revalida+"','"+nom.AP1+"','"+nom.AM1+"','"+nom.Nombre+"','"+nom.Fechanacimiento+"','"+nom.Curp+"','"+nom.Calle+"','"+nom.Numero+"','"+nom.Colonia+"','"+nom.Codigopostal+"','"+nom.Telefonodomicilio+"','"+nom.Estado+"','"+nom.Municipio+"','"+nom.Nompadre+"','"+nom.Nommadre+"','"+nom.Nomtutor+"','"+nom.Telpadre+"','"+nom.Telmadre+"','"+nom.Teltutor+"','"+nom.Escuelaprocedencia+"','"+nom.Claveescuelaprocedencia+"','"+nom.Turnoescuelaprocedencia+"','"+nom.Actadenacimiento+"','"+nom.Fotos+"','"+nom.Curpdocu+"','"+nom.Constancia+"','"+nom.Comprobantedomicilio+"','"+nom.Boletascalificacion+"','"+nom.Certificadoparcial+"','"+nom.OficiioRevalidacion+"','"+nom.ConstanciaMedia1+"','"+nom.CertificadoSecundaria1+"','"+nom.Otros1+"','"+nom.Status+"','"+nom.Imagen1+"')";
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
        //public int ActualizarAMBULANCIALOCAstatus(object obj)
        //{//se borro la imagen solo para probar que si llegan los datos checareos en el boton si lo envia directamente
        //    AmbulanciaBO datos = (AmbulanciaBO)obj;
        //    cmd.Connection = con.EstablecerConexion();
        //    //  string sql = "update emergentequellama set ambulancia = @ambulancia,id=@id";
        //    string sql = "Update ambulancias2 set status='" + datos.Status + "' where no_indentificacion='" + datos.No_inden + "'";
        //    cmd.CommandText = sql;
        //    cmd.Parameters.Add("@no_indentificacion", SqlDbType.NVarChar);
        //    cmd.Parameters.Add("@status", SqlDbType.NChar);
        //    //Pasaar los datos que se reciben a los parametros
        //    cmd.Parameters["@no_indentificacion"].Value = datos.No_inden;
        //    cmd.Parameters["@status"].Value = datos.Status;
        //    con.AbrirConexion();
        //    int i = cmd.ExecuteNonQuery();
        //    con.CerrarConexion();
        //    if (i <= 0)
        //    {
        //        return 0;
        //    }
        //    return 1;
        //}
        public DataTable Consulta(object obj)
        {
            AlumnosBO datos = (AlumnosBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select Folio, Nombre,ApellidoPaterno,ApellidoMaterno ,FechaNaci as 'Fecha de Nacimiento',NombreTutor as 'Tutor',TelTutor as 'Teléfono Tutor' from RegistroAlumno where Status='Guardado'";
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
            string sql = "delete  from RegistroAlumno WHERE Folio=1";
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
            AlumnosBO datos = (AlumnosBO)obj;
            DataTable dt = new DataTable();
            cmd.Connection = con.EstablecerConexion();
            con.AbrirConexion();
            SqlDataAdapter da = new SqlDataAdapter();
            string sql;

            sql = "select Imagen from registroalumno  WHERE Folio='" + datos.Folio + "'";
            cmd.CommandText = sql;
            da.SelectCommand = cmd;
            da.Fill(dt);
            con.CerrarConexion();
            return dt;
        }
    }
}