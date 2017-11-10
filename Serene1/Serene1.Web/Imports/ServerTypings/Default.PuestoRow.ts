
namespace Serene1.Default {
    export interface PuestoRow {
        IdPuesto?: number;
        NombrePuesto?: string;
        DescripcionPuesto?: string;
        IdDepartamento?: number;
        IdJerarquia?: number;
        IdDepartamentoNombreDepartamento?: string;
        IdDepartamentoIdNivel?: number;
        IdJerarquiaNombreJerarquia?: string;
    }

    export namespace PuestoRow {
        export const idProperty = 'IdPuesto';
        export const nameProperty = 'NombrePuesto';
        export const localTextPrefix = 'Default.Puesto';

        export namespace Fields {
            export declare const IdPuesto;
            export declare const NombrePuesto;
            export declare const DescripcionPuesto;
            export declare const IdDepartamento;
            export declare const IdJerarquia;
            export declare const IdDepartamentoNombreDepartamento;
            export declare const IdDepartamentoIdNivel;
            export declare const IdJerarquiaNombreJerarquia;
        }

        [
            'IdPuesto',
            'NombrePuesto',
            'DescripcionPuesto',
            'IdDepartamento',
            'IdJerarquia',
            'IdDepartamentoNombreDepartamento',
            'IdDepartamentoIdNivel',
            'IdJerarquiaNombreJerarquia'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}