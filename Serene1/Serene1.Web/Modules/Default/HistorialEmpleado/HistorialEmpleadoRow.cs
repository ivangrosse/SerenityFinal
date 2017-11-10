
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[HistorialEmpleado]")]
    [DisplayName("Historial Empleado"), InstanceName("Historial Empleado"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class HistorialEmpleadoRow : Row, IIdRow
    {
        [DisplayName("Id Historial Empleado"), Column("idHistorialEmpleado"), Identity]
        public Int32? IdHistorialEmpleado
        {
            get { return Fields.IdHistorialEmpleado[this]; }
            set { Fields.IdHistorialEmpleado[this] = value; }
        }

        [DisplayName("Fecha Ingreso Empleado"), Column("fechaIngresoEmpleado"), NotNull]
        public DateTime? FechaIngresoEmpleado
        {
            get { return Fields.FechaIngresoEmpleado[this]; }
            set { Fields.FechaIngresoEmpleado[this] = value; }
        }

        [DisplayName("Fecha Egreso Empleado"), Column("fechaEgresoEmpleado"), NotNull]
        public DateTime? FechaEgresoEmpleado
        {
            get { return Fields.FechaEgresoEmpleado[this]; }
            set { Fields.FechaEgresoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado"), Column("idEmpleado"), ForeignKey("[Reload].[Empleado]", "idEmpleado"), LeftJoin("jIdEmpleado"), TextualField("IdEmpleadoApellidoEmpleado")]
        public Int32? IdEmpleado
        {
            get { return Fields.IdEmpleado[this]; }
            set { Fields.IdEmpleado[this] = value; }
        }

        [DisplayName("Id Puesto"), Column("idPuesto"), ForeignKey("[Reload].[Puesto]", "idPuesto"), LeftJoin("jIdPuesto"), TextualField("IdPuestoNombrePuesto")]
        public Int32? IdPuesto
        {
            get { return Fields.IdPuesto[this]; }
            set { Fields.IdPuesto[this] = value; }
        }

        [DisplayName("Id Empleado Apellido Empleado"), Expression("jIdEmpleado.[apellidoEmpleado]")]
        public String IdEmpleadoApellidoEmpleado
        {
            get { return Fields.IdEmpleadoApellidoEmpleado[this]; }
            set { Fields.IdEmpleadoApellidoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Nombre Empleado"), Expression("jIdEmpleado.[nombreEmpleado]")]
        public String IdEmpleadoNombreEmpleado
        {
            get { return Fields.IdEmpleadoNombreEmpleado[this]; }
            set { Fields.IdEmpleadoNombreEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Legajo Empleado"), Expression("jIdEmpleado.[legajoEmpleado]")]
        public String IdEmpleadoLegajoEmpleado
        {
            get { return Fields.IdEmpleadoLegajoEmpleado[this]; }
            set { Fields.IdEmpleadoLegajoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Fecha Ingreso Empleado"), Expression("jIdEmpleado.[fechaIngresoEmpleado]")]
        public DateTime? IdEmpleadoFechaIngresoEmpleado
        {
            get { return Fields.IdEmpleadoFechaIngresoEmpleado[this]; }
            set { Fields.IdEmpleadoFechaIngresoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Dni Empleado"), Expression("jIdEmpleado.[dniEmpleado]")]
        public Int32? IdEmpleadoDniEmpleado
        {
            get { return Fields.IdEmpleadoDniEmpleado[this]; }
            set { Fields.IdEmpleadoDniEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Cuil Empleado"), Expression("jIdEmpleado.[cuilEmpleado]")]
        public String IdEmpleadoCuilEmpleado
        {
            get { return Fields.IdEmpleadoCuilEmpleado[this]; }
            set { Fields.IdEmpleadoCuilEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Fecha Nacimiento Empleado"), Expression("jIdEmpleado.[fechaNacimientoEmpleado]")]
        public DateTime? IdEmpleadoFechaNacimientoEmpleado
        {
            get { return Fields.IdEmpleadoFechaNacimientoEmpleado[this]; }
            set { Fields.IdEmpleadoFechaNacimientoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Es Activo Empleado"), Expression("jIdEmpleado.[esActivoEmpleado]")]
        public Boolean? IdEmpleadoEsActivoEmpleado
        {
            get { return Fields.IdEmpleadoEsActivoEmpleado[this]; }
            set { Fields.IdEmpleadoEsActivoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Telefono Empleado"), Expression("jIdEmpleado.[telefonoEmpleado]")]
        public String IdEmpleadoTelefonoEmpleado
        {
            get { return Fields.IdEmpleadoTelefonoEmpleado[this]; }
            set { Fields.IdEmpleadoTelefonoEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Email Empleado"), Expression("jIdEmpleado.[emailEmpleado]")]
        public String IdEmpleadoEmailEmpleado
        {
            get { return Fields.IdEmpleadoEmailEmpleado[this]; }
            set { Fields.IdEmpleadoEmailEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Domicilio Empleado"), Expression("jIdEmpleado.[domicilioEmpleado]")]
        public String IdEmpleadoDomicilioEmpleado
        {
            get { return Fields.IdEmpleadoDomicilioEmpleado[this]; }
            set { Fields.IdEmpleadoDomicilioEmpleado[this] = value; }
        }

        [DisplayName("Id Empleado Sexo Empleado"), Expression("jIdEmpleado.[sexoEmpleado]")]
        public String IdEmpleadoSexoEmpleado
        {
            get { return Fields.IdEmpleadoSexoEmpleado[this]; }
            set { Fields.IdEmpleadoSexoEmpleado[this] = value; }
        }

        [DisplayName("Id Puesto Nombre Puesto"), Expression("jIdPuesto.[nombrePuesto]")]
        public String IdPuestoNombrePuesto
        {
            get { return Fields.IdPuestoNombrePuesto[this]; }
            set { Fields.IdPuestoNombrePuesto[this] = value; }
        }

        [DisplayName("Id Puesto Descripcion Puesto"), Expression("jIdPuesto.[descripcionPuesto]")]
        public String IdPuestoDescripcionPuesto
        {
            get { return Fields.IdPuestoDescripcionPuesto[this]; }
            set { Fields.IdPuestoDescripcionPuesto[this] = value; }
        }

        [DisplayName("Id Puesto Id Departamento"), Expression("jIdPuesto.[idDepartamento]")]
        public Int32? IdPuestoIdDepartamento
        {
            get { return Fields.IdPuestoIdDepartamento[this]; }
            set { Fields.IdPuestoIdDepartamento[this] = value; }
        }

        [DisplayName("Id Puesto Id Jerarquia"), Expression("jIdPuesto.[idJerarquia]")]
        public Int32? IdPuestoIdJerarquia
        {
            get { return Fields.IdPuestoIdJerarquia[this]; }
            set { Fields.IdPuestoIdJerarquia[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdHistorialEmpleado; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HistorialEmpleadoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdHistorialEmpleado;
            public DateTimeField FechaIngresoEmpleado;
            public DateTimeField FechaEgresoEmpleado;
            public Int32Field IdEmpleado;
            public Int32Field IdPuesto;

            public StringField IdEmpleadoApellidoEmpleado;
            public StringField IdEmpleadoNombreEmpleado;
            public StringField IdEmpleadoLegajoEmpleado;
            public DateTimeField IdEmpleadoFechaIngresoEmpleado;
            public Int32Field IdEmpleadoDniEmpleado;
            public StringField IdEmpleadoCuilEmpleado;
            public DateTimeField IdEmpleadoFechaNacimientoEmpleado;
            public BooleanField IdEmpleadoEsActivoEmpleado;
            public StringField IdEmpleadoTelefonoEmpleado;
            public StringField IdEmpleadoEmailEmpleado;
            public StringField IdEmpleadoDomicilioEmpleado;
            public StringField IdEmpleadoSexoEmpleado;

            public StringField IdPuestoNombrePuesto;
            public StringField IdPuestoDescripcionPuesto;
            public Int32Field IdPuestoIdDepartamento;
            public Int32Field IdPuestoIdJerarquia;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.HistorialEmpleado";
            }
        }
    }
}
