
namespace Serene1.Default {
    export class DepartamentoForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Departamento';
    }

    export interface DepartamentoForm {
        NombreDepartamento: Serenity.StringEditor;
        IdNivel: Serenity.IntegerEditor;
    }

    [,
        ['NombreDepartamento', () => Serenity.StringEditor],
        ['IdNivel', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(DepartamentoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}