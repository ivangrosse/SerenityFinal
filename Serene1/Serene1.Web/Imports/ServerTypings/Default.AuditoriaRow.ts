
namespace Serene1.Default {
    export interface AuditoriaRow {
        IdAuditoria?: number;
        Operacion?: string;
        Usuario?: string;
        Host?: string;
        Fechahora?: string;
        Tabla?: string;
        Columna?: string;
        Id?: string;
        ValorViejo?: string;
        ValorNuevo?: string;
    }

    export namespace AuditoriaRow {
        export const idProperty = 'IdAuditoria';
        export const nameProperty = 'Operacion';
        export const localTextPrefix = 'Default.Auditoria';

        export namespace Fields {
            export declare const IdAuditoria;
            export declare const Operacion;
            export declare const Usuario;
            export declare const Host;
            export declare const Fechahora;
            export declare const Tabla;
            export declare const Columna;
            export declare const Id;
            export declare const ValorViejo;
            export declare const ValorNuevo;
        }

        [
            'IdAuditoria',
            'Operacion',
            'Usuario',
            'Host',
            'Fechahora',
            'Tabla',
            'Columna',
            'Id',
            'ValorViejo',
            'ValorNuevo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}