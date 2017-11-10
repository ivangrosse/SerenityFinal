
namespace Serene1.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.HistorialEmpleado")]
    [BasedOnRow(typeof(Entities.HistorialEmpleadoRow))]
    public class HistorialEmpleadoForm
    {
        public DateTime FechaIngresoEmpleado { get; set; }
        public DateTime FechaEgresoEmpleado { get; set; }
        public Int32 IdEmpleado { get; set; }
        public Int32 IdPuesto { get; set; }
    }
}