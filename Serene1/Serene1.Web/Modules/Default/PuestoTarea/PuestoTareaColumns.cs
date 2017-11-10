﻿
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.PuestoTarea")]
    [BasedOnRow(typeof(Entities.PuestoTareaRow))]
    public class PuestoTareaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPuestoTarea { get; set; }
        public String IdPuestoNombrePuesto { get; set; }
        public String IdTareaDescripcionTarea { get; set; }
    }
}