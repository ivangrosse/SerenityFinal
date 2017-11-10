using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100007)]
    public class Reload_20171110_100007_RequerimientoPuestoTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("RequerimientoPuesto").InSchema("Reload")
                .WithColumn("idRequerimientoPuesto").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("idRequerimiento").AsInt32().Nullable()
                .WithColumn("idPuesto").AsInt32().Nullable();
        }
    }
}