
namespace Serene1.Default {
    export class EmpleadoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Empleado';
    }

    export interface EmpleadoForm {
        ApellidoEmpleado: Serenity.StringEditor;
        NombreEmpleado: Serenity.StringEditor;
        LegajoEmpleado: Serenity.StringEditor;
        FechaIngresoEmpleado: Serenity.DateEditor;
        DniEmpleado: Serenity.IntegerEditor;
        CuilEmpleado: Serenity.StringEditor;
        FechaNacimientoEmpleado: Serenity.DateEditor;
        EsActivoEmpleado: Serenity.BooleanEditor;
        TelefonoEmpleado: Serenity.StringEditor;
        EmailEmpleado: Serenity.StringEditor;
        DomicilioEmpleado: Serenity.StringEditor;
        SexoEmpleado: Serenity.StringEditor;
    }

    [,
        ['ApellidoEmpleado', () => Serenity.StringEditor],
        ['NombreEmpleado', () => Serenity.StringEditor],
        ['LegajoEmpleado', () => Serenity.StringEditor],
        ['FechaIngresoEmpleado', () => Serenity.DateEditor],
        ['DniEmpleado', () => Serenity.IntegerEditor],
        ['CuilEmpleado', () => Serenity.StringEditor],
        ['FechaNacimientoEmpleado', () => Serenity.DateEditor],
        ['EsActivoEmpleado', () => Serenity.BooleanEditor],
        ['TelefonoEmpleado', () => Serenity.StringEditor],
        ['EmailEmpleado', () => Serenity.StringEditor],
        ['DomicilioEmpleado', () => Serenity.StringEditor],
        ['SexoEmpleado', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmpleadoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}