
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Empleado]")]
    [DisplayName("Empleado"), InstanceName("Empleado"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmpleadoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Empleado"), Column("idEmpleado"), Identity]
        public Int32? IdEmpleado
        {
            get { return Fields.IdEmpleado[this]; }
            set { Fields.IdEmpleado[this] = value; }
        }

        [DisplayName("Apellido Empleado"), Column("apellidoEmpleado"), Size(45), QuickSearch]
        public String ApellidoEmpleado
        {
            get { return Fields.ApellidoEmpleado[this]; }
            set { Fields.ApellidoEmpleado[this] = value; }
        }

        [DisplayName("Nombre Empleado"), Column("nombreEmpleado"), Size(45)]
        public String NombreEmpleado
        {
            get { return Fields.NombreEmpleado[this]; }
            set { Fields.NombreEmpleado[this] = value; }
        }

        [DisplayName("Legajo Empleado"), Column("legajoEmpleado"), Size(45), NotNull]
        public String LegajoEmpleado
        {
            get { return Fields.LegajoEmpleado[this]; }
            set { Fields.LegajoEmpleado[this] = value; }
        }

        [DisplayName("Fecha Ingreso Empleado"), Column("fechaIngresoEmpleado")]
        public DateTime? FechaIngresoEmpleado
        {
            get { return Fields.FechaIngresoEmpleado[this]; }
            set { Fields.FechaIngresoEmpleado[this] = value; }
        }

        [DisplayName("Dni Empleado"), Column("dniEmpleado")]
        public Int32? DniEmpleado
        {
            get { return Fields.DniEmpleado[this]; }
            set { Fields.DniEmpleado[this] = value; }
        }

        [DisplayName("Cuil Empleado"), Column("cuilEmpleado"), Size(45)]
        public String CuilEmpleado
        {
            get { return Fields.CuilEmpleado[this]; }
            set { Fields.CuilEmpleado[this] = value; }
        }

        [DisplayName("Fecha Nacimiento Empleado"), Column("fechaNacimientoEmpleado")]
        public DateTime? FechaNacimientoEmpleado
        {
            get { return Fields.FechaNacimientoEmpleado[this]; }
            set { Fields.FechaNacimientoEmpleado[this] = value; }
        }

        [DisplayName("Es Activo Empleado"), Column("esActivoEmpleado")]
        public Boolean? EsActivoEmpleado
        {
            get { return Fields.EsActivoEmpleado[this]; }
            set { Fields.EsActivoEmpleado[this] = value; }
        }

        [DisplayName("Telefono Empleado"), Column("telefonoEmpleado"), Size(45)]
        public String TelefonoEmpleado
        {
            get { return Fields.TelefonoEmpleado[this]; }
            set { Fields.TelefonoEmpleado[this] = value; }
        }

        [DisplayName("Email Empleado"), Column("emailEmpleado"), Size(45)]
        public String EmailEmpleado
        {
            get { return Fields.EmailEmpleado[this]; }
            set { Fields.EmailEmpleado[this] = value; }
        }

        [DisplayName("Domicilio Empleado"), Column("domicilioEmpleado"), Size(100)]
        public String DomicilioEmpleado
        {
            get { return Fields.DomicilioEmpleado[this]; }
            set { Fields.DomicilioEmpleado[this] = value; }
        }

        [DisplayName("Sexo Empleado"), Column("sexoEmpleado"), Size(1)]
        public String SexoEmpleado
        {
            get { return Fields.SexoEmpleado[this]; }
            set { Fields.SexoEmpleado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdEmpleado; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ApellidoEmpleado; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmpleadoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdEmpleado;
            public StringField ApellidoEmpleado;
            public StringField NombreEmpleado;
            public StringField LegajoEmpleado;
            public DateTimeField FechaIngresoEmpleado;
            public Int32Field DniEmpleado;
            public StringField CuilEmpleado;
            public DateTimeField FechaNacimientoEmpleado;
            public BooleanField EsActivoEmpleado;
            public StringField TelefonoEmpleado;
            public StringField EmailEmpleado;
            public StringField DomicilioEmpleado;
            public StringField SexoEmpleado;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Empleado";
            }
        }
    }
}
