
namespace Serene1.Default {
    export interface NivelRow {
        IdNivel?: number;
        NombreNivel?: string;
    }

    export namespace NivelRow {
        export const idProperty = 'IdNivel';
        export const nameProperty = 'NombreNivel';
        export const localTextPrefix = 'Default.Nivel';

        export namespace Fields {
            export declare const IdNivel;
            export declare const NombreNivel;
        }

        [
            'IdNivel',
            'NombreNivel'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}