using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using SICOES.DAO;
namespace SICOES.Services
{
    public class ctrMaestros
    {
        ConexionDAO conex = new ConexionDAO();
        MaestrosDAO alta = new MaestrosDAO();
        public int AltaMaestro(object Objeto)
        {
            int resultado = 0;
            resultado = alta.GuardarMaestro(Objeto);
            return resultado;
        }

        public DataTable Consulta(object obj)
        {
            DataTable resultado = alta.Consulta(obj);
            return resultado;
        }
    }
}