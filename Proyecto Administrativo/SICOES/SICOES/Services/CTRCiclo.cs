using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SICOES.DAO;
using System.Data;
namespace SICOES.Services
{
    public class CTRCiclo
    {
        ConexionDAO conex = new ConexionDAO();
        CicloDAO alta = new CicloDAO();
        public int AltaAlumno(object Objeto)
        {
            int resultado = 0;
            resultado = alta.GuardarCiclo(Objeto);
            return resultado;
        }

        public DataTable Consulta(object obj)
        {
            DataTable resultado = alta.Consulta(obj);
            return resultado;
        }

        public DataTable ConsultaFull(object obj)
        {
            DataTable resultado = alta.ConsultaFull(obj);
            return resultado;
        }
    }
}