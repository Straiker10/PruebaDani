using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICOES.BO
{
    public class PeriodosAB
    {
        int claveA, claveB;
        string inicioA, inicioB, finA, finB;
        int claveciclo;

        public int ClaveA
        {
            get
            {
                return claveA;
            }

            set
            {
                claveA = value;
            }
        }

        public int ClaveB
        {
            get
            {
                return claveB;
            }

            set
            {
                claveB = value;
            }
        }

        public string InicioA
        {
            get
            {
                return inicioA;
            }

            set
            {
                inicioA = value;
            }
        }

        public string InicioB
        {
            get
            {
                return inicioB;
            }

            set
            {
                inicioB = value;
            }
        }

        public string FinA
        {
            get
            {
                return finA;
            }

            set
            {
                finA = value;
            }
        }

        public string FinB
        {
            get
            {
                return finB;
            }

            set
            {
                finB = value;
            }
        }

        public int Claveciclo
        {
            get
            {
                return claveciclo;
            }

            set
            {
                claveciclo = value;
            }
        }
    }
}