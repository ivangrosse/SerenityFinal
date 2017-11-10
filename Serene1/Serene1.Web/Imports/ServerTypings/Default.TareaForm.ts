﻿
namespace Serene1.Default {
    export class TareaForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Tarea';
    }

    export interface TareaForm {
        DescripcionTarea: Serenity.StringEditor;
    }

    [,
        ['DescripcionTarea', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TareaForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}