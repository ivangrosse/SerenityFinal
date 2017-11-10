
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.RequerimientoPuesto")]
    [BasedOnRow(typeof(Entities.RequerimientoPuestoRow))]
    public class RequerimientoPuestoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdRequerimientoPuesto { get; set; }
        public String IdRequerimientoDescripcionRequerimiento { get; set; }
        public String IdPuestoNombrePuesto { get; set; }
    }
}