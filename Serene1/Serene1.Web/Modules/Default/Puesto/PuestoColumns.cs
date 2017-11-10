
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Puesto")]
    [BasedOnRow(typeof(Entities.PuestoRow))]
    public class PuestoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdPuesto { get; set; }
        [EditLink]
        public String NombrePuesto { get; set; }
        public String DescripcionPuesto { get; set; }
        public String IdDepartamentoNombreDepartamento { get; set; }
        public String IdJerarquiaNombreJerarquia { get; set; }
    }
}