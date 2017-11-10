
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Empleado")]
    [BasedOnRow(typeof(Entities.EmpleadoRow))]
    public class EmpleadoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdEmpleado { get; set; }
        [EditLink]
        public String ApellidoEmpleado { get; set; }
        public String NombreEmpleado { get; set; }
        public String LegajoEmpleado { get; set; }
        public DateTime FechaIngresoEmpleado { get; set; }
        public Int32 DniEmpleado { get; set; }
        public String CuilEmpleado { get; set; }
        public DateTime FechaNacimientoEmpleado { get; set; }
        public Boolean EsActivoEmpleado { get; set; }
        public String TelefonoEmpleado { get; set; }
        public String EmailEmpleado { get; set; }
        public String DomicilioEmpleado { get; set; }
        public String SexoEmpleado { get; set; }
    }
}