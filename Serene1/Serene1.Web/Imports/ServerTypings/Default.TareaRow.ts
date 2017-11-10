
namespace Serene1.Default {
    export interface TareaRow {
        IdTarea?: number;
        DescripcionTarea?: string;
    }

    export namespace TareaRow {
        export const idProperty = 'IdTarea';
        export const nameProperty = 'DescripcionTarea';
        export const localTextPrefix = 'Default.Tarea';

        export namespace Fields {
            export declare const IdTarea;
            export declare const DescripcionTarea;
        }

        [
            'IdTarea',
            'DescripcionTarea'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}