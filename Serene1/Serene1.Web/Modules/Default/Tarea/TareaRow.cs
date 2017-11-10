
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Tarea]")]
    [DisplayName("Tarea"), InstanceName("Tarea"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TareaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Tarea"), Column("idTarea"), Identity]
        public Int32? IdTarea
        {
            get { return Fields.IdTarea[this]; }
            set { Fields.IdTarea[this] = value; }
        }

        [DisplayName("Descripcion Tarea"), Column("descripcionTarea"), Size(200), NotNull, QuickSearch]
        public String DescripcionTarea
        {
            get { return Fields.DescripcionTarea[this]; }
            set { Fields.DescripcionTarea[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdTarea; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DescripcionTarea; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TareaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTarea;
            public StringField DescripcionTarea;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Tarea";
            }
        }
    }
}
