using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100004)]
    public class Reload_20171110_100004_TareaTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Tarea").InSchema("Reload")
                .WithColumn("idTarea").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("descripcionTarea").AsString(200);
        }

    }
}