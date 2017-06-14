using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICOES.BO
{
    public class CicloBO
    {
        String nombre, inicio;
        int clave;
        string fin;

        public string Nombre
        {
            get
            {
                return nombre;
            }

            set
            {
                nombre = value;
            }
        }

        public string Inicio
        {
            get
            {
                return inicio;
            }

            set
            {
                inicio = value;
            }
        }

        public int Clave
        {
            get
            {
                return clave;
            }

            set
            {
                clave = value;
            }
        }

        public string Fin
        {
            get
            {
                return fin;
            }

            set
            {
                fin = value;
            }
        }
    }
}