using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using SICOES.DAO;
namespace SICOES.Services
{
    public class CtrPeriodos
    {
        ConexionDAO conex = new ConexionDAO();
        PeriodosDAO alta = new PeriodosDAO();
        public int GuardarPeriodoA(object Objeto)
        {
            int resultado = 0;
            resultado = alta.GuardarPeriodoA(Objeto);
            return resultado;
        }
        public int GuardarPeriodoB(object Objeto)
        {
            int resultado = 0;
            resultado = alta.GuardarPeriodoB(Objeto);
            return resultado;
        }

    }
}