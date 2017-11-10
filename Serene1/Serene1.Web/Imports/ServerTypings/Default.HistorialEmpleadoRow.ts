
namespace Serene1.Default {
    export interface HistorialEmpleadoRow {
        IdHistorialEmpleado?: number;
        FechaIngresoEmpleado?: string;
        FechaEgresoEmpleado?: string;
        IdEmpleado?: number;
        IdPuesto?: number;
        IdEmpleadoApellidoEmpleado?: string;
        IdEmpleadoNombreEmpleado?: string;
        IdEmpleadoLegajoEmpleado?: string;
        IdEmpleadoFechaIngresoEmpleado?: string;
        IdEmpleadoDniEmpleado?: number;
        IdEmpleadoCuilEmpleado?: string;
        IdEmpleadoFechaNacimientoEmpleado?: string;
        IdEmpleadoEsActivoEmpleado?: boolean;
        IdEmpleadoTelefonoEmpleado?: string;
        IdEmpleadoEmailEmpleado?: string;
        IdEmpleadoDomicilioEmpleado?: string;
        IdEmpleadoSexoEmpleado?: string;
        IdPuestoNombrePuesto?: string;
        IdPuestoDescripcionPuesto?: string;
        IdPuestoIdDepartamento?: number;
        IdPuestoIdJerarquia?: number;
    }

    export namespace HistorialEmpleadoRow {
        export const idProperty = 'IdHistorialEmpleado';
        export const localTextPrefix = 'Default.HistorialEmpleado';

        export namespace Fields {
            export declare const IdHistorialEmpleado;
            export declare const FechaIngresoEmpleado;
            export declare const FechaEgresoEmpleado;
            export declare const IdEmpleado;
            export declare const IdPuesto;
            export declare const IdEmpleadoApellidoEmpleado;
            export declare const IdEmpleadoNombreEmpleado;
            export declare const IdEmpleadoLegajoEmpleado;
            export declare const IdEmpleadoFechaIngresoEmpleado;
            export declare const IdEmpleadoDniEmpleado;
            export declare const IdEmpleadoCuilEmpleado;
            export declare const IdEmpleadoFechaNacimientoEmpleado;
            export declare const IdEmpleadoEsActivoEmpleado;
            export declare const IdEmpleadoTelefonoEmpleado;
            export declare const IdEmpleadoEmailEmpleado;
            export declare const IdEmpleadoDomicilioEmpleado;
            export declare const IdEmpleadoSexoEmpleado;
            export declare const IdPuestoNombrePuesto;
            export declare const IdPuestoDescripcionPuesto;
            export declare const IdPuestoIdDepartamento;
            export declare const IdPuestoIdJerarquia;
        }

        [
            'IdHistorialEmpleado',
            'FechaIngresoEmpleado',
            'FechaEgresoEmpleado',
            'IdEmpleado',
            'IdPuesto',
            'IdEmpleadoApellidoEmpleado',
            'IdEmpleadoNombreEmpleado',
            'IdEmpleadoLegajoEmpleado',
            'IdEmpleadoFechaIngresoEmpleado',
            'IdEmpleadoDniEmpleado',
            'IdEmpleadoCuilEmpleado',
            'IdEmpleadoFechaNacimientoEmpleado',
            'IdEmpleadoEsActivoEmpleado',
            'IdEmpleadoTelefonoEmpleado',
            'IdEmpleadoEmailEmpleado',
            'IdEmpleadoDomicilioEmpleado',
            'IdEmpleadoSexoEmpleado',
            'IdPuestoNombrePuesto',
            'IdPuestoDescripcionPuesto',
            'IdPuestoIdDepartamento',
            'IdPuestoIdJerarquia'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}