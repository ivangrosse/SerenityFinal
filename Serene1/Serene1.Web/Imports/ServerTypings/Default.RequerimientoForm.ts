
namespace Serene1.Default {
    export class RequerimientoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Requerimiento';
    }

    export interface RequerimientoForm {
        DescripcionRequerimiento: Serenity.StringEditor;
    }

    [,
        ['DescripcionRequerimiento', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(RequerimientoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}