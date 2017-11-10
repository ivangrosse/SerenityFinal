using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene1.Migrations.DefaultDB
{
    [Migration(20171110100000)]
    public class Reload_20171110_100000_EmpleadoTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Schema("Reload");
            Create.Table("Empleado").InSchema("Reload")
                .WithColumn("idEmpleado").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("apellidoEmpleado").AsString(45).Nullable()
                .WithColumn("nombreEmpleado").AsString(45).Nullable()
                .WithColumn("legajoEmpleado").AsString(45).NotNullable()
                .WithColumn("fechaIngresoEmpleado").AsDate().Nullable()
                .WithColumn("dniEmpleado").AsInt32().Nullable()
                .WithColumn("cuilEmpleado").AsString(45).Nullable()
                .WithColumn("fechaNacimientoEmpleado").AsDate().Nullable()
                .WithColumn("esActivoEmpleado").AsBoolean().Nullable()
                .WithColumn("telefonoEmpleado").AsString(45).Nullable()
                .WithColumn("emailEmpleado").AsString(45).Nullable()
                .WithColumn("domicilioEmpleado").AsString(100).Nullable()
                .WithColumn("sexoEmpleado").AsString(1).Nullable();
        }
    }
}