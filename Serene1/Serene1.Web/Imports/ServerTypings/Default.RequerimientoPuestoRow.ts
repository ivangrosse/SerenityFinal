
namespace Serene1.Default {
    export interface RequerimientoPuestoRow {
        IdRequerimientoPuesto?: number;
        IdRequerimiento?: number;
        IdPuesto?: number;
        IdRequerimientoDescripcionRequerimiento?: string;
        IdPuestoNombrePuesto?: string;
        IdPuestoDescripcionPuesto?: string;
        IdPuestoIdDepartamento?: number;
        IdPuestoIdJerarquia?: number;
    }

    export namespace RequerimientoPuestoRow {
        export const idProperty = 'IdRequerimientoPuesto';
        export const localTextPrefix = 'Default.RequerimientoPuesto';

        export namespace Fields {
            export declare const IdRequerimientoPuesto;
            export declare const IdRequerimiento;
            export declare const IdPuesto;
            export declare const IdRequerimientoDescripcionRequerimiento;
            export declare const IdPuestoNombrePuesto;
            export declare const IdPuestoDescripcionPuesto;
            export declare const IdPuestoIdDepartamento;
            export declare const IdPuestoIdJerarquia;
        }

        [
            'IdRequerimientoPuesto',
            'IdRequerimiento',
            'IdPuesto',
            'IdRequerimientoDescripcionRequerimiento',
            'IdPuestoNombrePuesto',
            'IdPuestoDescripcionPuesto',
            'IdPuestoIdDepartamento',
            'IdPuestoIdJerarquia'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}