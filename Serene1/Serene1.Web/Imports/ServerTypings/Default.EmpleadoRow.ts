
namespace Serene1.Default {
    export interface EmpleadoRow {
        IdEmpleado?: number;
        ApellidoEmpleado?: string;
        NombreEmpleado?: string;
        LegajoEmpleado?: string;
        FechaIngresoEmpleado?: string;
        DniEmpleado?: number;
        CuilEmpleado?: string;
        FechaNacimientoEmpleado?: string;
        EsActivoEmpleado?: boolean;
        TelefonoEmpleado?: string;
        EmailEmpleado?: string;
        DomicilioEmpleado?: string;
        SexoEmpleado?: string;
    }

    export namespace EmpleadoRow {
        export const idProperty = 'IdEmpleado';
        export const nameProperty = 'ApellidoEmpleado';
        export const localTextPrefix = 'Default.Empleado';

        export namespace Fields {
            export declare const IdEmpleado;
            export declare const ApellidoEmpleado;
            export declare const NombreEmpleado;
            export declare const LegajoEmpleado;
            export declare const FechaIngresoEmpleado;
            export declare const DniEmpleado;
            export declare const CuilEmpleado;
            export declare const FechaNacimientoEmpleado;
            export declare const EsActivoEmpleado;
            export declare const TelefonoEmpleado;
            export declare const EmailEmpleado;
            export declare const DomicilioEmpleado;
            export declare const SexoEmpleado;
        }

        [
            'IdEmpleado',
            'ApellidoEmpleado',
            'NombreEmpleado',
            'LegajoEmpleado',
            'FechaIngresoEmpleado',
            'DniEmpleado',
            'CuilEmpleado',
            'FechaNacimientoEmpleado',
            'EsActivoEmpleado',
            'TelefonoEmpleado',
            'EmailEmpleado',
            'DomicilioEmpleado',
            'SexoEmpleado'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}