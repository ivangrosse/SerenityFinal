
namespace Serene1.Default {
    export class AuditoriaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Auditoria';
    }

    export interface AuditoriaForm {
        Operacion: Serenity.StringEditor;
        Usuario: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Fechahora: Serenity.DateEditor;
        Tabla: Serenity.StringEditor;
        Columna: Serenity.StringEditor;
        Id: Serenity.StringEditor;
        ValorViejo: Serenity.StringEditor;
        ValorNuevo: Serenity.StringEditor;
    }

    [,
        ['Operacion', () => Serenity.StringEditor],
        ['Usuario', () => Serenity.StringEditor],
        ['Host', () => Serenity.StringEditor],
        ['Fechahora', () => Serenity.DateEditor],
        ['Tabla', () => Serenity.StringEditor],
        ['Columna', () => Serenity.StringEditor],
        ['Id', () => Serenity.StringEditor],
        ['ValorViejo', () => Serenity.StringEditor],
        ['ValorNuevo', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AuditoriaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}