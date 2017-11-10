
namespace Serene1.Default {
    export class JerarquiaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Jerarquia';
    }

    export interface JerarquiaForm {
        NombreJerarquia: Serenity.StringEditor;
    }

    [,
        ['NombreJerarquia', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(JerarquiaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}