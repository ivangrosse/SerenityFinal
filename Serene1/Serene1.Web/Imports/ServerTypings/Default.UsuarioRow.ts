
namespace Serene1.Default {
    export interface UsuarioRow {
        IdUsuario?: number;
        NombreUsuario?: string;
        ContraseñaUsuario?: string;
        EsAdministrador?: boolean;
        HabilitadoUsuario?: boolean;
        ContraseñaRestaurada?: boolean;
        IdEmpleado?: number;
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
    }

    export namespace UsuarioRow {
        export const idProperty = 'IdUsuario';
        export const nameProperty = 'NombreUsuario';
        export const localTextPrefix = 'Default.Usuario';

        export namespace Fields {
            export declare const IdUsuario;
            export declare const NombreUsuario;
            export declare const ContraseñaUsuario;
            export declare const EsAdministrador;
            export declare const HabilitadoUsuario;
            export declare const ContraseñaRestaurada;
            export declare const IdEmpleado;
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
        }

        [
            'IdUsuario',
            'NombreUsuario',
            'ContraseñaUsuario',
            'EsAdministrador',
            'HabilitadoUsuario',
            'ContraseñaRestaurada',
            'IdEmpleado',
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
            'IdEmpleadoSexoEmpleado'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}