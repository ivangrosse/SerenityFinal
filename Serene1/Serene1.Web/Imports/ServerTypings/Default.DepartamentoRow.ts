
namespace Serene1.Default {
    export interface DepartamentoRow {
        IdDepartamento?: number;
        NombreDepartamento?: string;
        IdNivel?: number;
    }

    export namespace DepartamentoRow {
        export const idProperty = 'IdDepartamento';
        export const nameProperty = 'NombreDepartamento';
        export const localTextPrefix = 'Default.Departamento';

        export namespace Fields {
            export declare const IdDepartamento;
            export declare const NombreDepartamento;
            export declare const IdNivel;
        }

        [
            'IdDepartamento',
            'NombreDepartamento',
            'IdNivel'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}