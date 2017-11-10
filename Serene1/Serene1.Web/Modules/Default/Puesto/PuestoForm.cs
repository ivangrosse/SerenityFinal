
namespace Serene1.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Puesto")]
    [BasedOnRow(typeof(Entities.PuestoRow))]
    public class PuestoForm
    {
        public String NombrePuesto { get; set; }
        public String DescripcionPuesto { get; set; }
        public Int32 IdDepartamento { get; set; }
        public Int32 IdJerarquia { get; set; }
    }
}