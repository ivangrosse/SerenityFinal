
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[Auditoria]")]
    [DisplayName("Auditoria"), InstanceName("Auditoria"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AuditoriaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Auditoria"), Column("idAuditoria"), Identity]
        public Int32? IdAuditoria
        {
            get { return Fields.IdAuditoria[this]; }
            set { Fields.IdAuditoria[this] = value; }
        }

        [DisplayName("Operacion"), Column("operacion"), Size(10), NotNull, QuickSearch]
        public String Operacion
        {
            get { return Fields.Operacion[this]; }
            set { Fields.Operacion[this] = value; }
        }

        [DisplayName("Usuario"), Column("usuario"), Size(40), NotNull]
        public String Usuario
        {
            get { return Fields.Usuario[this]; }
            set { Fields.Usuario[this] = value; }
        }

        [DisplayName("Host"), Column("host"), Size(40), NotNull]
        public String Host
        {
            get { return Fields.Host[this]; }
            set { Fields.Host[this] = value; }
        }

        [DisplayName("Fechahora"), Column("fechahora"), NotNull]
        public DateTime? Fechahora
        {
            get { return Fields.Fechahora[this]; }
            set { Fields.Fechahora[this] = value; }
        }

        [DisplayName("Tabla"), Column("tabla"), Size(45), NotNull]
        public String Tabla
        {
            get { return Fields.Tabla[this]; }
            set { Fields.Tabla[this] = value; }
        }

        [DisplayName("Columna"), Column("columna"), Size(45), NotNull]
        public String Columna
        {
            get { return Fields.Columna[this]; }
            set { Fields.Columna[this] = value; }
        }

        [DisplayName("Id"), Column("id"), Size(45), NotNull]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Valor Viejo"), Column("valorViejo"), Size(200)]
        public String ValorViejo
        {
            get { return Fields.ValorViejo[this]; }
            set { Fields.ValorViejo[this] = value; }
        }

        [DisplayName("Valor Nuevo"), Column("valorNuevo"), Size(200)]
        public String ValorNuevo
        {
            get { return Fields.ValorNuevo[this]; }
            set { Fields.ValorNuevo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdAuditoria; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Operacion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AuditoriaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAuditoria;
            public StringField Operacion;
            public StringField Usuario;
            public StringField Host;
            public DateTimeField Fechahora;
            public StringField Tabla;
            public StringField Columna;
            public StringField Id;
            public StringField ValorViejo;
            public StringField ValorNuevo;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.Auditoria";
            }
        }
    }
}
