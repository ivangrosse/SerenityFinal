using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100006)]
    public class Reload_20171110_100006_PuestoTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Puesto").InSchema("Reload")
                .WithColumn("idPuesto").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("nombrePuesto").AsString(100).NotNullable()
                .WithColumn("descripcionPuesto").AsString(200).Nullable()
                .WithColumn("idDepartamento").AsInt32().Nullable()
                .WithColumn("idJerarquia").AsInt32().Nullable();
        }

    }
}