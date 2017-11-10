
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.HistorialEmpleado")]
    [BasedOnRow(typeof(Entities.HistorialEmpleadoRow))]
    public class HistorialEmpleadoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdHistorialEmpleado { get; set; }
        public DateTime FechaIngresoEmpleado { get; set; }
        public DateTime FechaEgresoEmpleado { get; set; }
        public String IdEmpleadoApellidoEmpleado { get; set; }
        public String IdPuestoNombrePuesto { get; set; }
    }
}