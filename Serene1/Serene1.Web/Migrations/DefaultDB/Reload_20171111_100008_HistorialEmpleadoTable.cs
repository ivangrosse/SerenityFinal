using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100008)]
    public class Reload_20171110_100008_HistorialEmpleadoTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("HistorialEmpleado").InSchema("Reload")
                .WithColumn("idHistorialEmpleado").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("fechaIngresoEmpleado").AsDate().NotNullable()
                .WithColumn("fechaEgresoEmpleado").AsDate().NotNullable()
                .WithColumn("idEmpleado").AsInt32().Nullable()
                .WithColumn("idPuesto").AsInt32().Nullable();
        }
    }
}