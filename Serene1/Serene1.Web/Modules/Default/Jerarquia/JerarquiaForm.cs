
namespace Serene1.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Jerarquia")]
    [BasedOnRow(typeof(Entities.JerarquiaRow))]
    public class JerarquiaForm
    {
        public String NombreJerarquia { get; set; }
    }
}