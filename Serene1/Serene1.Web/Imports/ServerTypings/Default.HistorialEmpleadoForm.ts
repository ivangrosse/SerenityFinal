
namespace Serene1.Default {
    export class HistorialEmpleadoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.HistorialEmpleado';
    }

    export interface HistorialEmpleadoForm {
        FechaIngresoEmpleado: Serenity.DateEditor;
        FechaEgresoEmpleado: Serenity.DateEditor;
        IdEmpleado: Serenity.IntegerEditor;
        IdPuesto: Serenity.IntegerEditor;
    }

    [,
        ['FechaIngresoEmpleado', () => Serenity.DateEditor],
        ['FechaEgresoEmpleado', () => Serenity.DateEditor],
        ['IdEmpleado', () => Serenity.IntegerEditor],
        ['IdPuesto', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(HistorialEmpleadoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}