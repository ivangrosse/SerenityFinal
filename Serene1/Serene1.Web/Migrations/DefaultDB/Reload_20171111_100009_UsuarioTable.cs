using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100009)]
    public class Reload_20171110_100009_UsuarioTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Usuario").InSchema("Reload")
            .WithColumn("idUsuario").AsInt32()
                .Identity().PrimaryKey().NotNullable()
            .WithColumn("nombreUsuario").AsString(45).NotNullable()
            .WithColumn("contraseñaUsuario").AsString(45).NotNullable()
            .WithColumn("esAdministrador").AsBoolean().NotNullable()
            .WithColumn("habilitadoUsuario").AsBoolean().NotNullable()
            .WithColumn("contraseñaRestaurada").AsBoolean().NotNullable()
            .WithColumn("idEmpleado").AsInt32().Nullable();
        }

    }
}