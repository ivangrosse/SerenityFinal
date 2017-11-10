
namespace Serene1.Default {
    export interface PuestoTareaRow {
        IdPuestoTarea?: number;
        IdPuesto?: number;
        IdTarea?: number;
        IdPuestoNombrePuesto?: string;
        IdPuestoDescripcionPuesto?: string;
        IdPuestoIdDepartamento?: number;
        IdPuestoIdJerarquia?: number;
        IdTareaDescripcionTarea?: string;
    }

    export namespace PuestoTareaRow {
        export const idProperty = 'IdPuestoTarea';
        export const localTextPrefix = 'Default.PuestoTarea';

        export namespace Fields {
            export declare const IdPuestoTarea;
            export declare const IdPuesto;
            export declare const IdTarea;
            export declare const IdPuestoNombrePuesto;
            export declare const IdPuestoDescripcionPuesto;
            export declare const IdPuestoIdDepartamento;
            export declare const IdPuestoIdJerarquia;
            export declare const IdTareaDescripcionTarea;
        }

        [
            'IdPuestoTarea',
            'IdPuesto',
            'IdTarea',
            'IdPuestoNombrePuesto',
            'IdPuestoDescripcionPuesto',
            'IdPuestoIdDepartamento',
            'IdPuestoIdJerarquia',
            'IdTareaDescripcionTarea'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}