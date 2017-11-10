using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100003)]
    public class Reload_20171110_100003_RequerimientoTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Requerimiento").InSchema("Reload")
                .WithColumn("idRequerimiento").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("descripcionRequerimiento").AsString(200);
        }

    }
}