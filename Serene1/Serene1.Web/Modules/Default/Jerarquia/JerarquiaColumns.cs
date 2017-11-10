
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Jerarquia")]
    [BasedOnRow(typeof(Entities.JerarquiaRow))]
    public class JerarquiaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdJerarquia { get; set; }
        [EditLink]
        public String NombreJerarquia { get; set; }
    }
}