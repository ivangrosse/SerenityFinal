
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[RequerimientoPuesto]")]
    [DisplayName("Requerimiento Puesto"), InstanceName("Requerimiento Puesto"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RequerimientoPuestoRow : Row, IIdRow
    {
        [DisplayName("Id Requerimiento Puesto"), Column("idRequerimientoPuesto"), Identity]
        public Int32? IdRequerimientoPuesto
        {
            get { return Fields.IdRequerimientoPuesto[this]; }
            set { Fields.IdRequerimientoPuesto[this] = value; }
        }

        [DisplayName("Id Requerimiento"), Column("idRequerimiento"), ForeignKey("[Reload].[Requerimiento]", "idRequerimiento"), LeftJoin("jIdRequerimiento"), TextualField("IdRequerimientoDescripcionRequerimiento")]
        public Int32? IdRequerimiento
        {
            get { return Fields.IdRequerimiento[this]; }
            set { Fields.IdRequerimiento[this] = value; }
        }

        [DisplayName("Id Puesto"), Column("idPuesto"), ForeignKey("[Reload].[Puesto]", "idPuesto"), LeftJoin("jIdPuesto"), TextualField("IdPuestoNombrePuesto")]
        public Int32? IdPuesto
        {
            get { return Fields.IdPuesto[this]; }
            set { Fields.IdPuesto[this] = value; }
        }

        [DisplayName("Id Requerimiento Descripcion Requerimiento"), Expression("jIdRequerimiento.[descripcionRequerimiento]")]
        public String IdRequerimientoDescripcionRequerimiento
        {
            get { return Fields.IdRequerimientoDescripcionRequerimiento[this]; }
            set { Fields.IdRequerimientoDescripcionRequerimiento[this] = value; }
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
            get { return Fields.IdRequerimientoPuesto; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RequerimientoPuestoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdRequerimientoPuesto;
            public Int32Field IdRequerimiento;
            public Int32Field IdPuesto;

            public StringField IdRequerimientoDescripcionRequerimiento;

            public StringField IdPuestoNombrePuesto;
            public StringField IdPuestoDescripcionPuesto;
            public Int32Field IdPuestoIdDepartamento;
            public Int32Field IdPuestoIdJerarquia;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.RequerimientoPuesto";
            }
        }
    }
}
