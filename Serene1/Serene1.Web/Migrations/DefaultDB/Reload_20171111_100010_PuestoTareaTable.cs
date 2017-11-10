using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100010)]
    public class Reload_20171110_100010_PuestoTareaTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PuestoTarea").InSchema("Reload")
                .WithColumn("idPuestoTarea").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("idPuesto").AsInt32().Nullable()
                .WithColumn("idTarea").AsInt32().Nullable();
        }
    }
}