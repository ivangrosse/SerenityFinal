using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100005)]
    public class Reload_20171110_100005_DepartamentoTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Departamento").InSchema("Reload")
                .WithColumn("idDepartamento").AsInt32().Identity().NotNullable().PrimaryKey()
                .WithColumn("nombreDepartamento").AsString(100).Nullable()
        .WithColumn("idNivel").AsInt32().Nullable();
        }

    }
}