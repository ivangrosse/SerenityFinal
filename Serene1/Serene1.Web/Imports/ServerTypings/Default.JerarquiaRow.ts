
namespace Serene1.Default {
    export interface JerarquiaRow {
        IdJerarquia?: number;
        NombreJerarquia?: string;
    }

    export namespace JerarquiaRow {
        export const idProperty = 'IdJerarquia';
        export const nameProperty = 'NombreJerarquia';
        export const localTextPrefix = 'Default.Jerarquia';

        export namespace Fields {
            export declare const IdJerarquia;
            export declare const NombreJerarquia;
        }

        [
            'IdJerarquia',
            'NombreJerarquia'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}