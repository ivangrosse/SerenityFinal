using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100011)]
    public class Reload_20171110_100011_AuditoriaTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Auditoria").InSchema("Reload")
                .WithColumn("idAuditoria").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("operacion").AsString(10).NotNullable()
                .WithColumn("usuario").AsString(40).NotNullable()
                .WithColumn("host").AsString(40).NotNullable()
                .WithColumn("fechahora").AsDateTime()
                .WithColumn("tabla").AsString(45).NotNullable()
                .WithColumn("columna").AsString(45).NotNullable()
                .WithColumn("id").AsString(45).NotNullable()
                .WithColumn("valorViejo").AsString(200).Nullable()
                .WithColumn("valorNuevo").AsString(200).Nullable();
        }
    }
}