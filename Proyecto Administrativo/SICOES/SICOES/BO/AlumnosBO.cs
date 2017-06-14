using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SICOES.BO
{
    public class AlumnosBO
    {
        string fecha, nuevo, revalida, AP, AM, nombre, fechanacimiento, curp, calle, colonia, estado, numero, codigopostal, telefonodomicilio, municipio, nompadre, nommadre, nomtutor, telpadre, telmadre, teltutor, escuelaprocedencia, claveescuelaprocedencia, turnoescuelaprocedencia, actadenacimiento, fotos, curpdocu, comprobantedomicilio, boletascalificacion, certificadoparcial, oficiioRevalidacion, ConstanciaMedia, CertificadoSecundaria, Otros;
        string constancia;
        string status;
        String Imagen;
        int folio;
        string EstadoNuevo;
        string MunicipioNuevo;
        string usuario, contraseña;
        public string Actadenacimiento
        {
            get
            {
                return actadenacimiento;
            }

            set
            {
                actadenacimiento = value;
            }
        }

        public string AM1
        {
            get
            {
                return AM;
            }

            set
            {
                AM = value;
            }
        }

        public string AP1
        {
            get
            {
                return AP;
            }

            set
            {
                AP = value;
            }
        }

        public string Boletascalificacion
        {
            get
            {
                return boletascalificacion;
            }

            set
            {
                boletascalificacion = value;
            }
        }

        public string Calle
        {
            get
            {
                return calle;
            }

            set
            {
                calle = value;
            }
        }

        public string Certificadoparcial
        {
            get
            {
                return certificadoparcial;
            }

            set
            {
                certificadoparcial = value;
            }
        }

        public string CertificadoSecundaria1
        {
            get
            {
                return CertificadoSecundaria;
            }

            set
            {
                CertificadoSecundaria = value;
            }
        }

        public string Claveescuelaprocedencia
        {
            get
            {
                return claveescuelaprocedencia;
            }

            set
            {
                claveescuelaprocedencia = value;
            }
        }

        public string Codigopostal
        {
            get
            {
                return codigopostal;
            }

            set
            {
                codigopostal = value;
            }
        }

        public string Colonia
        {
            get
            {
                return colonia;
            }

            set
            {
                colonia = value;
            }
        }

        public string Comprobantedomicilio
        {
            get
            {
                return comprobantedomicilio;
            }

            set
            {
                comprobantedomicilio = value;
            }
        }

        public string ConstanciaMedia1
        {
            get
            {
                return ConstanciaMedia;
            }

            set
            {
                ConstanciaMedia = value;
            }
        }

        public string Curp
        {
            get
            {
                return curp;
            }

            set
            {
                curp = value;
            }
        }

        public string Curpdocu
        {
            get
            {
                return curpdocu;
            }

            set
            {
                curpdocu = value;
            }
        }

        public string Escuelaprocedencia
        {
            get
            {
                return escuelaprocedencia;
            }

            set
            {
                escuelaprocedencia = value;
            }
        }

        public string Estado
        {
            get
            {
                return estado;
            }

            set
            {
                estado = value;
            }
        }

        public string Fecha
        {
            get
            {
                return fecha;
            }

            set
            {
                fecha = value;
            }
        }

        public string Fechanacimiento
        {
            get
            {
                return fechanacimiento;
            }

            set
            {
                fechanacimiento = value;
            }
        }

        public string Fotos
        {
            get
            {
                return fotos;
            }

            set
            {
                fotos = value;
            }
        }

        public string Municipio
        {
            get
            {
                return municipio;
            }

            set
            {
                municipio = value;
            }
        }

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

        public string Nommadre
        {
            get
            {
                return nommadre;
            }

            set
            {
                nommadre = value;
            }
        }

        public string Nompadre
        {
            get
            {
                return nompadre;
            }

            set
            {
                nompadre = value;
            }
        }

        public string Nomtutor
        {
            get
            {
                return nomtutor;
            }

            set
            {
                nomtutor = value;
            }
        }

        public string Nuevo
        {
            get
            {
                return nuevo;
            }

            set
            {
                nuevo = value;
            }
        }

        public string Numero
        {
            get
            {
                return numero;
            }

            set
            {
                numero = value;
            }
        }

        public string OficiioRevalidacion
        {
            get
            {
                return oficiioRevalidacion;
            }

            set
            {
                oficiioRevalidacion = value;
            }
        }

        public string Otros1
        {
            get
            {
                return Otros;
            }

            set
            {
                Otros = value;
            }
        }

        public string Revalida
        {
            get
            {
                return revalida;
            }

            set
            {
                revalida = value;
            }
        }

        public string Telefonodomicilio
        {
            get
            {
                return telefonodomicilio;
            }

            set
            {
                telefonodomicilio = value;
            }
        }

        public string Telmadre
        {
            get
            {
                return telmadre;
            }

            set
            {
                telmadre = value;
            }
        }

        public string Telpadre
        {
            get
            {
                return telpadre;
            }

            set
            {
                telpadre = value;
            }
        }

        public string Teltutor
        {
            get
            {
                return teltutor;
            }

            set
            {
                teltutor = value;
            }
        }

        public string Turnoescuelaprocedencia
        {
            get
            {
                return turnoescuelaprocedencia;
            }

            set
            {
                turnoescuelaprocedencia = value;
            }
        }

        public string Constancia
        {
            get
            {
                return constancia;
            }

            set
            {
                constancia = value;
            }
        }

        public string Status
        {
            get
            {
                return status;
            }

            set
            {
                status = value;
            }
        }

        public string Imagen1
        {
            get
            {
                return Imagen;
            }

            set
            {
                Imagen = value;
            }
        }

        public int Folio
        {
            get
            {
                return folio;
            }

            set
            {
                folio = value;
            }
        }

        public string EstadoNuevo1
        {
            get
            {
                return EstadoNuevo;
            }

            set
            {
                EstadoNuevo = value;
            }
        }

        public string MunicipioNuevo1
        {
            get
            {
                return MunicipioNuevo;
            }

            set
            {
                MunicipioNuevo = value;
            }
        }

        public string Usuario
        {
            get
            {
                return usuario;
            }

            set
            {
                usuario = value;
            }
        }

        public string Contraseña
        {
            get
            {
                return contraseña;
            }

            set
            {
                contraseña = value;
            }
        }
    }
}