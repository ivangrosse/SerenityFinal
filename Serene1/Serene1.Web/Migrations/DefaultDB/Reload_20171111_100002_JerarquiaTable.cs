using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171111000002)]
    public class Reload_20171110_100002_JerarquiaTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Jerarquia").InSchema("Reload")
                .WithColumn("idJerarquia").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("nombreJerarquia").AsString(45).NotNullable();
        }

    }
}