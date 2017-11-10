
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Puesto]")]
    [DisplayName("Puesto"), InstanceName("Puesto"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PuestoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Puesto"), Column("idPuesto"), Identity]
        public Int32? IdPuesto
        {
            get { return Fields.IdPuesto[this]; }
            set { Fields.IdPuesto[this] = value; }
        }

        [DisplayName("Nombre Puesto"), Column("nombrePuesto"), Size(100), NotNull, QuickSearch]
        public String NombrePuesto
        {
            get { return Fields.NombrePuesto[this]; }
            set { Fields.NombrePuesto[this] = value; }
        }

        [DisplayName("Descripcion Puesto"), Column("descripcionPuesto"), Size(200)]
        public String DescripcionPuesto
        {
            get { return Fields.DescripcionPuesto[this]; }
            set { Fields.DescripcionPuesto[this] = value; }
        }

        [DisplayName("Id Departamento"), Column("idDepartamento"), ForeignKey("[Reload].[Departamento]", "idDepartamento"), LeftJoin("jIdDepartamento"), TextualField("IdDepartamentoNombreDepartamento")]
        public Int32? IdDepartamento
        {
            get { return Fields.IdDepartamento[this]; }
            set { Fields.IdDepartamento[this] = value; }
        }

        [DisplayName("Id Jerarquia"), Column("idJerarquia"), ForeignKey("[Reload].[Jerarquia]", "idJerarquia"), LeftJoin("jIdJerarquia"), TextualField("IdJerarquiaNombreJerarquia")]
        public Int32? IdJerarquia
        {
            get { return Fields.IdJerarquia[this]; }
            set { Fields.IdJerarquia[this] = value; }
        }

        [DisplayName("Id Departamento Nombre Departamento"), Expression("jIdDepartamento.[nombreDepartamento]")]
        public String IdDepartamentoNombreDepartamento
        {
            get { return Fields.IdDepartamentoNombreDepartamento[this]; }
            set { Fields.IdDepartamentoNombreDepartamento[this] = value; }
        }

        [DisplayName("Id Departamento Id Nivel"), Expression("jIdDepartamento.[idNivel]")]
        public Int32? IdDepartamentoIdNivel
        {
            get { return Fields.IdDepartamentoIdNivel[this]; }
            set { Fields.IdDepartamentoIdNivel[this] = value; }
        }

        [DisplayName("Id Jerarquia Nombre Jerarquia"), Expression("jIdJerarquia.[nombreJerarquia]")]
        public String IdJerarquiaNombreJerarquia
        {
            get { return Fields.IdJerarquiaNombreJerarquia[this]; }
            set { Fields.IdJerarquiaNombreJerarquia[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPuesto; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombrePuesto; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PuestoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPuesto;
            public StringField NombrePuesto;
            public StringField DescripcionPuesto;
            public Int32Field IdDepartamento;
            public Int32Field IdJerarquia;

            public StringField IdDepartamentoNombreDepartamento;
            public Int32Field IdDepartamentoIdNivel;

            public StringField IdJerarquiaNombreJerarquia;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Puesto";
            }
        }
    }
}
