
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Auditoria")]
    [BasedOnRow(typeof(Entities.AuditoriaRow))]
    public class AuditoriaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdAuditoria { get; set; }
        [EditLink]
        public String Operacion { get; set; }
        public String Usuario { get; set; }
        public String Host { get; set; }
        public DateTime Fechahora { get; set; }
        public String Tabla { get; set; }
        public String Columna { get; set; }
        public String Id { get; set; }
        public String ValorViejo { get; set; }
        public String ValorNuevo { get; set; }
    }
}