
namespace Serene1.Default {
    export interface RequerimientoRow {
        IdRequerimiento?: number;
        DescripcionRequerimiento?: string;
    }

    export namespace RequerimientoRow {
        export const idProperty = 'IdRequerimiento';
        export const nameProperty = 'DescripcionRequerimiento';
        export const localTextPrefix = 'Default.Requerimiento';

        export namespace Fields {
            export declare const IdRequerimiento;
            export declare const DescripcionRequerimiento;
        }

        [
            'IdRequerimiento',
            'DescripcionRequerimiento'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}