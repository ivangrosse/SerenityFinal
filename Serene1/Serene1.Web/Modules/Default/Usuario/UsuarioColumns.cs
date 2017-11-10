﻿
namespace Serene1.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Usuario")]
    [BasedOnRow(typeof(Entities.UsuarioRow))]
    public class UsuarioColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdUsuario { get; set; }
        [EditLink]
        public String NombreUsuario { get; set; }
        public String ContraseñaUsuario { get; set; }
        public Boolean EsAdministrador { get; set; }
        public Boolean HabilitadoUsuario { get; set; }
        public Boolean ContraseñaRestaurada { get; set; }
        public String IdEmpleadoApellidoEmpleado { get; set; }
    }
}