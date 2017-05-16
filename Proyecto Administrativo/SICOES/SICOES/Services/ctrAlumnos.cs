using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SICOES.DAO;
using System.Data;
namespace SICOES.Services
{
    public class ctrAlumnos
    {
        ConexionDAO conex = new ConexionDAO();
        AlumnosDAO alta = new AlumnosDAO();
        public int AltaAlumno(object Objeto)
        {
            int resultado = 0;
            resultado = alta.GuardarAlumno(Objeto);
            return resultado;
        }
     
        public DataTable Consulta(object obj)
        {
            DataTable resultado = alta.Consulta(obj);
            return resultado;
        }
    }
}