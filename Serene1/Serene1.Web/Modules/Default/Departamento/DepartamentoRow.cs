
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Departamento]")]
    [DisplayName("Departamento"), InstanceName("Departamento"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DepartamentoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Departamento"), Column("idDepartamento"), Identity]
        public Int32? IdDepartamento
        {
            get { return Fields.IdDepartamento[this]; }
            set { Fields.IdDepartamento[this] = value; }
        }

        [DisplayName("Nombre Departamento"), Column("nombreDepartamento"), Size(100), QuickSearch]
        public String NombreDepartamento
        {
            get { return Fields.NombreDepartamento[this]; }
            set { Fields.NombreDepartamento[this] = value; }
        }

        [DisplayName("Id Nivel"), Column("idNivel")]
        public Int32? IdNivel
        {
            get { return Fields.IdNivel[this]; }
            set { Fields.IdNivel[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdDepartamento; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombreDepartamento; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepartamentoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDepartamento;
            public StringField NombreDepartamento;
            public Int32Field IdNivel;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Departamento";
            }
        }
    }
}
