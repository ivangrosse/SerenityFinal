
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Usuario]")]
    [DisplayName("Usuario"), InstanceName("Usuario"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UsuarioRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Usuario"), Column("idUsuario"), Identity]
        public Int32? IdUsuario
        {
            get { return Fields.IdUsuario[this]; }
            set { Fields.IdUsuario[this] = value; }
        }

        [DisplayName("Nombre Usuario"), Column("nombreUsuario"), Size(45), NotNull, QuickSearch]
        public String NombreUsuario
        {
            get { return Fields.NombreUsuario[this]; }
            set { Fields.NombreUsuario[this] = value; }
        }

        [DisplayName("Contraseña Usuario"), Column("contraseñaUsuario"), Size(45), NotNull]
        public String ContraseñaUsuario
        {
            get { return Fields.ContraseñaUsuario[this]; }
            set { Fields.ContraseñaUsuario[this] = value; }
        }

        [DisplayName("Es Administrador"), Column("esAdministrador"), NotNull]
        public Boolean? EsAdministrador
        {
            get { return Fields.EsAdministrador[this]; }
            set { Fields.EsAdministrador[this] = value; }
        }

        [DisplayName("Habilitado Usuario"), Column("habilitadoUsuario"), NotNull]
        public Boolean? HabilitadoUsuario
        {
            get { return Fields.HabilitadoUsuario[this]; }
            set { Fields.HabilitadoUsuario[this] = value; }
        }

        [DisplayName("Contraseña Restaurada"), Column("contraseñaRestaurada"), NotNull]
        public Boolean? ContraseñaRestaurada
        {
            get { return Fields.ContraseñaRestaurada[this]; }
            set { Fields.ContraseñaRestaurada[this] = value; }
        }

        [DisplayName("Id Empleado"), Column("idEmpleado"), ForeignKey("[Reload].[Empleado]", "idEmpleado"), LeftJoin("jIdEmpleado"), TextualField("IdEmpleadoApellidoEmpleado")]
        public Int32? IdEmpleado
        {
            get { return Fields.IdEmpleado[this]; }
            set { Fields.IdEmpleado[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.IdUsuario; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombreUsuario; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UsuarioRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdUsuario;
            public StringField NombreUsuario;
            public StringField ContraseñaUsuario;
            public BooleanField EsAdministrador;
            public BooleanField HabilitadoUsuario;
            public BooleanField ContraseñaRestaurada;
            public Int32Field IdEmpleado;

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

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Usuario";
            }
        }
    }
}
