
namespace Serene1.Default {
    export class PuestoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Puesto';
    }

    export interface PuestoForm {
        NombrePuesto: Serenity.StringEditor;
        DescripcionPuesto: Serenity.StringEditor;
        IdDepartamento: Serenity.IntegerEditor;
        IdJerarquia: Serenity.IntegerEditor;
    }

    [,
        ['NombrePuesto', () => Serenity.StringEditor],
        ['DescripcionPuesto', () => Serenity.StringEditor],
        ['IdDepartamento', () => Serenity.IntegerEditor],
        ['IdJerarquia', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(PuestoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}