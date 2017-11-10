
namespace Serene1.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Nivel")]
    [BasedOnRow(typeof(Entities.NivelRow))]
    public class NivelForm
    {
        public String NombreNivel { get; set; }
    }
}