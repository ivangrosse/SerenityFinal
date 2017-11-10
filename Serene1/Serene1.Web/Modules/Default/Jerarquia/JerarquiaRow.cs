
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Jerarquia]")]
    [DisplayName("Jerarquia"), InstanceName("Jerarquia"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class JerarquiaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Jerarquia"), Column("idJerarquia"), Identity]
        public Int32? IdJerarquia
        {
            get { return Fields.IdJerarquia[this]; }
            set { Fields.IdJerarquia[this] = value; }
        }

        [DisplayName("Nombre Jerarquia"), Column("nombreJerarquia"), Size(45), NotNull, QuickSearch]
        public String NombreJerarquia
        {
            get { return Fields.NombreJerarquia[this]; }
            set { Fields.NombreJerarquia[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdJerarquia; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombreJerarquia; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public JerarquiaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdJerarquia;
            public StringField NombreJerarquia;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Jerarquia";
            }
        }
    }
}
