
namespace Serene1.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[Reload].[PuestoTarea]")]
    [DisplayName("Puesto Tarea"), InstanceName("Puesto Tarea"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PuestoTareaRow : Row, IIdRow
    {
        [DisplayName("Id Puesto Tarea"), Column("idPuestoTarea"), Identity]
        public Int32? IdPuestoTarea
        {
            get { return Fields.IdPuestoTarea[this]; }
            set { Fields.IdPuestoTarea[this] = value; }
        }

        [DisplayName("Id Puesto"), Column("idPuesto"), ForeignKey("[Reload].[Puesto]", "idPuesto"), LeftJoin("jIdPuesto"), TextualField("IdPuestoNombrePuesto")]
        public Int32? IdPuesto
        {
            get { return Fields.IdPuesto[this]; }
            set { Fields.IdPuesto[this] = value; }
        }

        [DisplayName("Id Tarea"), Column("idTarea"), ForeignKey("[Reload].[Tarea]", "idTarea"), LeftJoin("jIdTarea"), TextualField("IdTareaDescripcionTarea")]
        public Int32? IdTarea
        {
            get { return Fields.IdTarea[this]; }
            set { Fields.IdTarea[this] = value; }
        }

        [DisplayName("Id Puesto Nombre Puesto"), Expression("jIdPuesto.[nombrePuesto]")]
        public String IdPuestoNombrePuesto
        {
            get { return Fields.IdPuestoNombrePuesto[this]; }
            set { Fields.IdPuestoNombrePuesto[this] = value; }
        }

        [DisplayName("Id Puesto Descripcion Puesto"), Expression("jIdPuesto.[descripcionPuesto]")]
        public String IdPuestoDescripcionPuesto
        {
            get { return Fields.IdPuestoDescripcionPuesto[this]; }
            set { Fields.IdPuestoDescripcionPuesto[this] = value; }
        }

        [DisplayName("Id Puesto Id Departamento"), Expression("jIdPuesto.[idDepartamento]")]
        public Int32? IdPuestoIdDepartamento
        {
            get { return Fields.IdPuestoIdDepartamento[this]; }
            set { Fields.IdPuestoIdDepartamento[this] = value; }
        }

        [DisplayName("Id Puesto Id Jerarquia"), Expression("jIdPuesto.[idJerarquia]")]
        public Int32? IdPuestoIdJerarquia
        {
            get { return Fields.IdPuestoIdJerarquia[this]; }
            set { Fields.IdPuestoIdJerarquia[this] = value; }
        }

        [DisplayName("Id Tarea Descripcion Tarea"), Expression("jIdTarea.[descripcionTarea]")]
        public String IdTareaDescripcionTarea
        {
            get { return Fields.IdTareaDescripcionTarea[this]; }
            set { Fields.IdTareaDescripcionTarea[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPuestoTarea; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PuestoTareaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdPuestoTarea;
            public Int32Field IdPuesto;
            public Int32Field IdTarea;

            public StringField IdPuestoNombrePuesto;
            public StringField IdPuestoDescripcionPuesto;
            public Int32Field IdPuestoIdDepartamento;
            public Int32Field IdPuestoIdJerarquia;

            public StringField IdTareaDescripcionTarea;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Default.PuestoTarea";
            }
        }
    }
}
