using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171111000001)]
    public class Reload_20171110_100001_NivelTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Nivel").InSchema("Reload")
                .WithColumn("idNivel").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("nombreNivel").AsString(45).NotNullable();
        }

    }
}