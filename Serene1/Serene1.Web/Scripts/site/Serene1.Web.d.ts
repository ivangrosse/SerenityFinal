/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Serene1.Administration {
}
declare namespace Serene1.Administration {
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
}
declare namespace Serene1.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        namespace Fields {
            const Id: string;
            const LanguageId: string;
            const LanguageName: string;
        }
    }
}
declare namespace Serene1.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Administration {
}
declare namespace Serene1.Administration {
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        namespace Fields {
            const RolePermissionId: string;
            const RoleId: string;
            const PermissionKey: string;
            const RoleRoleName: string;
        }
    }
}
declare namespace Serene1.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Serene1.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        namespace Fields {
            const RoleId: string;
            const RoleName: string;
        }
    }
}
declare namespace Serene1.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Serene1.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Serene1.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const List: string;
            const Update: string;
        }
    }
}
declare namespace Serene1.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Serene1.Administration {
}
declare namespace Serene1.Administration {
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        namespace Fields {
            const UserPermissionId: string;
            const UserId: string;
            const PermissionKey: string;
            const Granted: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
            const ListRolePermissions: string;
            const ListPermissionKeys: string;
        }
    }
}
declare namespace Serene1.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Serene1.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Serene1.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Serene1.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        namespace Fields {
            const UserRoleId: string;
            const UserId: string;
            const RoleId: string;
            const Username: string;
            const User: string;
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Serene1.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        namespace Fields {
            const UserId: string;
            const Username: string;
            const Source: string;
            const PasswordHash: string;
            const PasswordSalt: string;
            const DisplayName: string;
            const Email: string;
            const UserImage: string;
            const LastDirectoryUpdate: string;
            const IsActive: string;
            const Password: string;
            const PasswordConfirm: string;
            const InsertUserId: string;
            const InsertDate: string;
            const UpdateUserId: string;
            const UpdateDate: string;
        }
    }
}
declare namespace Serene1.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Undelete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Serene1.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Serene1.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Serene1.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        namespace Fields {
            const UserPreferenceId: string;
            const UserId: string;
            const PreferenceType: string;
            const Name: string;
            const Value: string;
        }
    }
}
declare namespace Serene1.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Update: string;
            const Retrieve: string;
        }
    }
}
declare namespace Serene1.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Serene1.Default {
    class AuditoriaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AuditoriaForm {
        Operacion: Serenity.StringEditor;
        Usuario: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Fechahora: Serenity.DateEditor;
        Tabla: Serenity.StringEditor;
        Columna: Serenity.StringEditor;
        Id: Serenity.StringEditor;
        ValorViejo: Serenity.StringEditor;
        ValorNuevo: Serenity.StringEditor;
    }
}
declare namespace Serene1.Default {
    interface AuditoriaRow {
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
    namespace AuditoriaRow {
        const idProperty = "IdAuditoria";
        const nameProperty = "Operacion";
        const localTextPrefix = "Default.Auditoria";
        namespace Fields {
            const IdAuditoria: any;
            const Operacion: any;
            const Usuario: any;
            const Host: any;
            const Fechahora: any;
            const Tabla: any;
            const Columna: any;
            const Id: any;
            const ValorViejo: any;
            const ValorNuevo: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace AuditoriaService {
        const baseUrl = "Default/Auditoria";
        function Create(request: Serenity.SaveRequest<AuditoriaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuditoriaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditoriaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuditoriaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class DepartamentoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DepartamentoForm {
        NombreDepartamento: Serenity.StringEditor;
        IdNivel: Serenity.IntegerEditor;
    }
}
declare namespace Serene1.Default {
    interface DepartamentoRow {
        IdDepartamento?: number;
        NombreDepartamento?: string;
        IdNivel?: number;
    }
    namespace DepartamentoRow {
        const idProperty = "IdDepartamento";
        const nameProperty = "NombreDepartamento";
        const localTextPrefix = "Default.Departamento";
        namespace Fields {
            const IdDepartamento: any;
            const NombreDepartamento: any;
            const IdNivel: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace DepartamentoService {
        const baseUrl = "Default/Departamento";
        function Create(request: Serenity.SaveRequest<DepartamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartamentoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartamentoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class EmpleadoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmpleadoForm {
        ApellidoEmpleado: Serenity.StringEditor;
        NombreEmpleado: Serenity.StringEditor;
        LegajoEmpleado: Serenity.StringEditor;
        FechaIngresoEmpleado: Serenity.DateEditor;
        DniEmpleado: Serenity.IntegerEditor;
        CuilEmpleado: Serenity.StringEditor;
        FechaNacimientoEmpleado: Serenity.DateEditor;
        EsActivoEmpleado: Serenity.BooleanEditor;
        TelefonoEmpleado: Serenity.StringEditor;
        EmailEmpleado: Serenity.StringEditor;
        DomicilioEmpleado: Serenity.StringEditor;
        SexoEmpleado: Serenity.StringEditor;
    }
}
declare namespace Serene1.Default {
    interface EmpleadoRow {
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
    namespace EmpleadoRow {
        const idProperty = "IdEmpleado";
        const nameProperty = "ApellidoEmpleado";
        const localTextPrefix = "Default.Empleado";
        namespace Fields {
            const IdEmpleado: any;
            const ApellidoEmpleado: any;
            const NombreEmpleado: any;
            const LegajoEmpleado: any;
            const FechaIngresoEmpleado: any;
            const DniEmpleado: any;
            const CuilEmpleado: any;
            const FechaNacimientoEmpleado: any;
            const EsActivoEmpleado: any;
            const TelefonoEmpleado: any;
            const EmailEmpleado: any;
            const DomicilioEmpleado: any;
            const SexoEmpleado: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace EmpleadoService {
        const baseUrl = "Default/Empleado";
        function Create(request: Serenity.SaveRequest<EmpleadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmpleadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmpleadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmpleadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class HistorialEmpleadoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface HistorialEmpleadoForm {
        FechaIngresoEmpleado: Serenity.DateEditor;
        FechaEgresoEmpleado: Serenity.DateEditor;
        IdEmpleado: Serenity.IntegerEditor;
        IdPuesto: Serenity.IntegerEditor;
    }
}
declare namespace Serene1.Default {
    interface HistorialEmpleadoRow {
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
    namespace HistorialEmpleadoRow {
        const idProperty = "IdHistorialEmpleado";
        const localTextPrefix = "Default.HistorialEmpleado";
        namespace Fields {
            const IdHistorialEmpleado: any;
            const FechaIngresoEmpleado: any;
            const FechaEgresoEmpleado: any;
            const IdEmpleado: any;
            const IdPuesto: any;
            const IdEmpleadoApellidoEmpleado: any;
            const IdEmpleadoNombreEmpleado: any;
            const IdEmpleadoLegajoEmpleado: any;
            const IdEmpleadoFechaIngresoEmpleado: any;
            const IdEmpleadoDniEmpleado: any;
            const IdEmpleadoCuilEmpleado: any;
            const IdEmpleadoFechaNacimientoEmpleado: any;
            const IdEmpleadoEsActivoEmpleado: any;
            const IdEmpleadoTelefonoEmpleado: any;
            const IdEmpleadoEmailEmpleado: any;
            const IdEmpleadoDomicilioEmpleado: any;
            const IdEmpleadoSexoEmpleado: any;
            const IdPuestoNombrePuesto: any;
            const IdPuestoDescripcionPuesto: any;
            const IdPuestoIdDepartamento: any;
            const IdPuestoIdJerarquia: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace HistorialEmpleadoService {
        const baseUrl = "Default/HistorialEmpleado";
        function Create(request: Serenity.SaveRequest<HistorialEmpleadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<HistorialEmpleadoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<HistorialEmpleadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<HistorialEmpleadoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class JerarquiaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface JerarquiaForm {
        NombreJerarquia: Serenity.StringEditor;
    }
}
declare namespace Serene1.Default {
    interface JerarquiaRow {
        IdJerarquia?: number;
        NombreJerarquia?: string;
    }
    namespace JerarquiaRow {
        const idProperty = "IdJerarquia";
        const nameProperty = "NombreJerarquia";
        const localTextPrefix = "Default.Jerarquia";
        namespace Fields {
            const IdJerarquia: any;
            const NombreJerarquia: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace JerarquiaService {
        const baseUrl = "Default/Jerarquia";
        function Create(request: Serenity.SaveRequest<JerarquiaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<JerarquiaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<JerarquiaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<JerarquiaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class NivelForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface NivelForm {
        NombreNivel: Serenity.StringEditor;
    }
}
declare namespace Serene1.Default {
    interface NivelRow {
        IdNivel?: number;
        NombreNivel?: string;
    }
    namespace NivelRow {
        const idProperty = "IdNivel";
        const nameProperty = "NombreNivel";
        const localTextPrefix = "Default.Nivel";
        namespace Fields {
            const IdNivel: any;
            const NombreNivel: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace NivelService {
        const baseUrl = "Default/Nivel";
        function Create(request: Serenity.SaveRequest<NivelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NivelRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NivelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NivelRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class PuestoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PuestoForm {
        NombrePuesto: Serenity.StringEditor;
        DescripcionPuesto: Serenity.StringEditor;
        IdDepartamento: Serenity.IntegerEditor;
        IdJerarquia: Serenity.IntegerEditor;
    }
}
declare namespace Serene1.Default {
    interface PuestoRow {
        IdPuesto?: number;
        NombrePuesto?: string;
        DescripcionPuesto?: string;
        IdDepartamento?: number;
        IdJerarquia?: number;
        IdDepartamentoNombreDepartamento?: string;
        IdDepartamentoIdNivel?: number;
        IdJerarquiaNombreJerarquia?: string;
    }
    namespace PuestoRow {
        const idProperty = "IdPuesto";
        const nameProperty = "NombrePuesto";
        const localTextPrefix = "Default.Puesto";
        namespace Fields {
            const IdPuesto: any;
            const NombrePuesto: any;
            const DescripcionPuesto: any;
            const IdDepartamento: any;
            const IdJerarquia: any;
            const IdDepartamentoNombreDepartamento: any;
            const IdDepartamentoIdNivel: any;
            const IdJerarquiaNombreJerarquia: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace PuestoService {
        const baseUrl = "Default/Puesto";
        function Create(request: Serenity.SaveRequest<PuestoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PuestoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PuestoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PuestoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class PuestoTareaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface PuestoTareaForm {
        IdPuesto: Serenity.IntegerEditor;
        IdTarea: Serenity.IntegerEditor;
    }
}
declare namespace Serene1.Default {
    interface PuestoTareaRow {
        IdPuestoTarea?: number;
        IdPuesto?: number;
        IdTarea?: number;
        IdPuestoNombrePuesto?: string;
        IdPuestoDescripcionPuesto?: string;
        IdPuestoIdDepartamento?: number;
        IdPuestoIdJerarquia?: number;
        IdTareaDescripcionTarea?: string;
    }
    namespace PuestoTareaRow {
        const idProperty = "IdPuestoTarea";
        const localTextPrefix = "Default.PuestoTarea";
        namespace Fields {
            const IdPuestoTarea: any;
            const IdPuesto: any;
            const IdTarea: any;
            const IdPuestoNombrePuesto: any;
            const IdPuestoDescripcionPuesto: any;
            const IdPuestoIdDepartamento: any;
            const IdPuestoIdJerarquia: any;
            const IdTareaDescripcionTarea: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace PuestoTareaService {
        const baseUrl = "Default/PuestoTarea";
        function Create(request: Serenity.SaveRequest<PuestoTareaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PuestoTareaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PuestoTareaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PuestoTareaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class RequerimientoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RequerimientoForm {
        DescripcionRequerimiento: Serenity.StringEditor;
    }
}
declare namespace Serene1.Default {
    class RequerimientoPuestoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface RequerimientoPuestoForm {
        IdRequerimiento: Serenity.IntegerEditor;
        IdPuesto: Serenity.IntegerEditor;
    }
}
declare namespace Serene1.Default {
    interface RequerimientoPuestoRow {
        IdRequerimientoPuesto?: number;
        IdRequerimiento?: number;
        IdPuesto?: number;
        IdRequerimientoDescripcionRequerimiento?: string;
        IdPuestoNombrePuesto?: string;
        IdPuestoDescripcionPuesto?: string;
        IdPuestoIdDepartamento?: number;
        IdPuestoIdJerarquia?: number;
    }
    namespace RequerimientoPuestoRow {
        const idProperty = "IdRequerimientoPuesto";
        const localTextPrefix = "Default.RequerimientoPuesto";
        namespace Fields {
            const IdRequerimientoPuesto: any;
            const IdRequerimiento: any;
            const IdPuesto: any;
            const IdRequerimientoDescripcionRequerimiento: any;
            const IdPuestoNombrePuesto: any;
            const IdPuestoDescripcionPuesto: any;
            const IdPuestoIdDepartamento: any;
            const IdPuestoIdJerarquia: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace RequerimientoPuestoService {
        const baseUrl = "Default/RequerimientoPuesto";
        function Create(request: Serenity.SaveRequest<RequerimientoPuestoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequerimientoPuestoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequerimientoPuestoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequerimientoPuestoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    interface RequerimientoRow {
        IdRequerimiento?: number;
        DescripcionRequerimiento?: string;
    }
    namespace RequerimientoRow {
        const idProperty = "IdRequerimiento";
        const nameProperty = "DescripcionRequerimiento";
        const localTextPrefix = "Default.Requerimiento";
        namespace Fields {
            const IdRequerimiento: any;
            const DescripcionRequerimiento: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace RequerimientoService {
        const baseUrl = "Default/Requerimiento";
        function Create(request: Serenity.SaveRequest<RequerimientoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequerimientoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequerimientoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequerimientoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class TareaForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface TareaForm {
        DescripcionTarea: Serenity.StringEditor;
    }
}
declare namespace Serene1.Default {
    interface TareaRow {
        IdTarea?: number;
        DescripcionTarea?: string;
    }
    namespace TareaRow {
        const idProperty = "IdTarea";
        const nameProperty = "DescripcionTarea";
        const localTextPrefix = "Default.Tarea";
        namespace Fields {
            const IdTarea: any;
            const DescripcionTarea: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace TareaService {
        const baseUrl = "Default/Tarea";
        function Create(request: Serenity.SaveRequest<TareaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TareaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TareaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TareaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1.Default {
    class UsuarioForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface UsuarioForm {
        NombreUsuario: Serenity.StringEditor;
        ContraseñaUsuario: Serenity.StringEditor;
        EsAdministrador: Serenity.BooleanEditor;
        HabilitadoUsuario: Serenity.BooleanEditor;
        ContraseñaRestaurada: Serenity.BooleanEditor;
        IdEmpleado: Serenity.IntegerEditor;
    }
}
declare namespace Serene1.Default {
    interface UsuarioRow {
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
    namespace UsuarioRow {
        const idProperty = "IdUsuario";
        const nameProperty = "NombreUsuario";
        const localTextPrefix = "Default.Usuario";
        namespace Fields {
            const IdUsuario: any;
            const NombreUsuario: any;
            const ContraseñaUsuario: any;
            const EsAdministrador: any;
            const HabilitadoUsuario: any;
            const ContraseñaRestaurada: any;
            const IdEmpleado: any;
            const IdEmpleadoApellidoEmpleado: any;
            const IdEmpleadoNombreEmpleado: any;
            const IdEmpleadoLegajoEmpleado: any;
            const IdEmpleadoFechaIngresoEmpleado: any;
            const IdEmpleadoDniEmpleado: any;
            const IdEmpleadoCuilEmpleado: any;
            const IdEmpleadoFechaNacimientoEmpleado: any;
            const IdEmpleadoEsActivoEmpleado: any;
            const IdEmpleadoTelefonoEmpleado: any;
            const IdEmpleadoEmailEmpleado: any;
            const IdEmpleadoDomicilioEmpleado: any;
            const IdEmpleadoSexoEmpleado: any;
        }
    }
}
declare namespace Serene1.Default {
    namespace UsuarioService {
        const baseUrl = "Default/Usuario";
        function Create(request: Serenity.SaveRequest<UsuarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UsuarioRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UsuarioRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace Serene1 {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Serene1 {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Serene1 {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Serene1 {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Serene1.Membership {
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Serene1.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene1.Membership {
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
}
declare namespace Serene1.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Serene1.Membership {
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
}
declare namespace Serene1.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Serene1.Membership {
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Serene1.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene1.Membership {
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
}
declare namespace Serene1.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Serene1 {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Serene1.LanguageList {
    function getValue(): string[][];
}
declare namespace Serene1.ScriptInitialization {
}
declare namespace Serene1.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Serene1.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Serene1.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Serene1.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Serene1.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Serene1.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Serene1.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Serene1.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): string[];
    }
}
declare namespace Serene1.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Serene1.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Serene1.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Serene1.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Serene1 {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Serene1.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Serene1.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Serene1.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Serene1.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Serene1.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Serene1.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Serene1.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Serene1.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Serene1.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Serene1.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Serene1.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Serene1.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Serene1.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Serene1.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Serene1.Default {
    class AuditoriaDialog extends Serenity.EntityDialog<AuditoriaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AuditoriaForm;
    }
}
declare namespace Serene1.Default {
    class AuditoriaGrid extends Serenity.EntityGrid<AuditoriaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditoriaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class DepartamentoDialog extends Serenity.EntityDialog<DepartamentoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DepartamentoForm;
    }
}
declare namespace Serene1.Default {
    class DepartamentoGrid extends Serenity.EntityGrid<DepartamentoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartamentoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class EmpleadoDialog extends Serenity.EntityDialog<EmpleadoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmpleadoForm;
    }
}
declare namespace Serene1.Default {
    class EmpleadoGrid extends Serenity.EntityGrid<EmpleadoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmpleadoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class HistorialEmpleadoDialog extends Serenity.EntityDialog<HistorialEmpleadoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: HistorialEmpleadoForm;
    }
}
declare namespace Serene1.Default {
    class HistorialEmpleadoGrid extends Serenity.EntityGrid<HistorialEmpleadoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof HistorialEmpleadoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class JerarquiaDialog extends Serenity.EntityDialog<JerarquiaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: JerarquiaForm;
    }
}
declare namespace Serene1.Default {
    class JerarquiaGrid extends Serenity.EntityGrid<JerarquiaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof JerarquiaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class NivelDialog extends Serenity.EntityDialog<NivelRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: NivelForm;
    }
}
declare namespace Serene1.Default {
    class NivelGrid extends Serenity.EntityGrid<NivelRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NivelDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class PuestoDialog extends Serenity.EntityDialog<PuestoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PuestoForm;
    }
}
declare namespace Serene1.Default {
    class PuestoGrid extends Serenity.EntityGrid<PuestoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PuestoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class PuestoTareaDialog extends Serenity.EntityDialog<PuestoTareaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: PuestoTareaForm;
    }
}
declare namespace Serene1.Default {
    class PuestoTareaGrid extends Serenity.EntityGrid<PuestoTareaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PuestoTareaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class RequerimientoDialog extends Serenity.EntityDialog<RequerimientoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequerimientoForm;
    }
}
declare namespace Serene1.Default {
    class RequerimientoGrid extends Serenity.EntityGrid<RequerimientoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequerimientoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class RequerimientoPuestoDialog extends Serenity.EntityDialog<RequerimientoPuestoRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: RequerimientoPuestoForm;
    }
}
declare namespace Serene1.Default {
    class RequerimientoPuestoGrid extends Serenity.EntityGrid<RequerimientoPuestoRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequerimientoPuestoDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class TareaDialog extends Serenity.EntityDialog<TareaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TareaForm;
    }
}
declare namespace Serene1.Default {
    class TareaGrid extends Serenity.EntityGrid<TareaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TareaDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Default {
    class UsuarioDialog extends Serenity.EntityDialog<UsuarioRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UsuarioForm;
    }
}
declare namespace Serene1.Default {
    class UsuarioGrid extends Serenity.EntityGrid<UsuarioRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UsuarioDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Serene1.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene1.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
