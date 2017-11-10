var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            [
                'Id',
                'LanguageId',
                'LanguageName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            [
                'RolePermissionId',
                'RoleId',
                'PermissionKey',
                'RoleRoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            [
                'RoleId',
                'RoleName'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            [
                'UserPermissionId',
                'UserId',
                'PermissionKey',
                'Granted',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            [
                'UserRoleId',
                'UserId',
                'RoleId',
                'Username',
                'User'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            [
                'UserId',
                'Username',
                'Source',
                'PasswordHash',
                'PasswordSalt',
                'DisplayName',
                'Email',
                'UserImage',
                'LastDirectoryUpdate',
                'IsActive',
                'Password',
                'PasswordConfirm',
                'InsertUserId',
                'InsertDate',
                'UpdateUserId',
                'UpdateDate'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            [
                'UserPreferenceId',
                'UserId',
                'PreferenceType',
                'Name',
                'Value'
            ].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AuditoriaForm = /** @class */ (function (_super) {
            __extends(AuditoriaForm, _super);
            function AuditoriaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AuditoriaForm.formKey = 'Default.Auditoria';
            return AuditoriaForm;
        }(Serenity.PrefixedContext));
        Default.AuditoriaForm = AuditoriaForm;
        [,
            ['Operacion', function () { return Serenity.StringEditor; }],
            ['Usuario', function () { return Serenity.StringEditor; }],
            ['Host', function () { return Serenity.StringEditor; }],
            ['Fechahora', function () { return Serenity.DateEditor; }],
            ['Tabla', function () { return Serenity.StringEditor; }],
            ['Columna', function () { return Serenity.StringEditor; }],
            ['Id', function () { return Serenity.StringEditor; }],
            ['ValorViejo', function () { return Serenity.StringEditor; }],
            ['ValorNuevo', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(AuditoriaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AuditoriaRow;
        (function (AuditoriaRow) {
            AuditoriaRow.idProperty = 'IdAuditoria';
            AuditoriaRow.nameProperty = 'Operacion';
            AuditoriaRow.localTextPrefix = 'Default.Auditoria';
            var Fields;
            (function (Fields) {
            })(Fields = AuditoriaRow.Fields || (AuditoriaRow.Fields = {}));
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
            ].forEach(function (x) { return Fields[x] = x; });
        })(AuditoriaRow = Default.AuditoriaRow || (Default.AuditoriaRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AuditoriaService;
        (function (AuditoriaService) {
            AuditoriaService.baseUrl = 'Default/Auditoria';
            var Methods;
            (function (Methods) {
            })(Methods = AuditoriaService.Methods || (AuditoriaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AuditoriaService[x] = function (r, s, o) {
                    return Q.serviceRequest(AuditoriaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = AuditoriaService.baseUrl + '/' + x;
            });
        })(AuditoriaService = Default.AuditoriaService || (Default.AuditoriaService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartamentoForm = /** @class */ (function (_super) {
            __extends(DepartamentoForm, _super);
            function DepartamentoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DepartamentoForm.formKey = 'Default.Departamento';
            return DepartamentoForm;
        }(Serenity.PrefixedContext));
        Default.DepartamentoForm = DepartamentoForm;
        [,
            ['NombreDepartamento', function () { return Serenity.StringEditor; }],
            ['IdNivel', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(DepartamentoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartamentoRow;
        (function (DepartamentoRow) {
            DepartamentoRow.idProperty = 'IdDepartamento';
            DepartamentoRow.nameProperty = 'NombreDepartamento';
            DepartamentoRow.localTextPrefix = 'Default.Departamento';
            var Fields;
            (function (Fields) {
            })(Fields = DepartamentoRow.Fields || (DepartamentoRow.Fields = {}));
            [
                'IdDepartamento',
                'NombreDepartamento',
                'IdNivel'
            ].forEach(function (x) { return Fields[x] = x; });
        })(DepartamentoRow = Default.DepartamentoRow || (Default.DepartamentoRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartamentoService;
        (function (DepartamentoService) {
            DepartamentoService.baseUrl = 'Default/Departamento';
            var Methods;
            (function (Methods) {
            })(Methods = DepartamentoService.Methods || (DepartamentoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DepartamentoService[x] = function (r, s, o) {
                    return Q.serviceRequest(DepartamentoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = DepartamentoService.baseUrl + '/' + x;
            });
        })(DepartamentoService = Default.DepartamentoService || (Default.DepartamentoService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpleadoForm = /** @class */ (function (_super) {
            __extends(EmpleadoForm, _super);
            function EmpleadoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmpleadoForm.formKey = 'Default.Empleado';
            return EmpleadoForm;
        }(Serenity.PrefixedContext));
        Default.EmpleadoForm = EmpleadoForm;
        [,
            ['ApellidoEmpleado', function () { return Serenity.StringEditor; }],
            ['NombreEmpleado', function () { return Serenity.StringEditor; }],
            ['LegajoEmpleado', function () { return Serenity.StringEditor; }],
            ['FechaIngresoEmpleado', function () { return Serenity.DateEditor; }],
            ['DniEmpleado', function () { return Serenity.IntegerEditor; }],
            ['CuilEmpleado', function () { return Serenity.StringEditor; }],
            ['FechaNacimientoEmpleado', function () { return Serenity.DateEditor; }],
            ['EsActivoEmpleado', function () { return Serenity.BooleanEditor; }],
            ['TelefonoEmpleado', function () { return Serenity.StringEditor; }],
            ['EmailEmpleado', function () { return Serenity.StringEditor; }],
            ['DomicilioEmpleado', function () { return Serenity.StringEditor; }],
            ['SexoEmpleado', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(EmpleadoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpleadoRow;
        (function (EmpleadoRow) {
            EmpleadoRow.idProperty = 'IdEmpleado';
            EmpleadoRow.nameProperty = 'ApellidoEmpleado';
            EmpleadoRow.localTextPrefix = 'Default.Empleado';
            var Fields;
            (function (Fields) {
            })(Fields = EmpleadoRow.Fields || (EmpleadoRow.Fields = {}));
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
            ].forEach(function (x) { return Fields[x] = x; });
        })(EmpleadoRow = Default.EmpleadoRow || (Default.EmpleadoRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpleadoService;
        (function (EmpleadoService) {
            EmpleadoService.baseUrl = 'Default/Empleado';
            var Methods;
            (function (Methods) {
            })(Methods = EmpleadoService.Methods || (EmpleadoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmpleadoService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmpleadoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = EmpleadoService.baseUrl + '/' + x;
            });
        })(EmpleadoService = Default.EmpleadoService || (Default.EmpleadoService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var HistorialEmpleadoForm = /** @class */ (function (_super) {
            __extends(HistorialEmpleadoForm, _super);
            function HistorialEmpleadoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HistorialEmpleadoForm.formKey = 'Default.HistorialEmpleado';
            return HistorialEmpleadoForm;
        }(Serenity.PrefixedContext));
        Default.HistorialEmpleadoForm = HistorialEmpleadoForm;
        [,
            ['FechaIngresoEmpleado', function () { return Serenity.DateEditor; }],
            ['FechaEgresoEmpleado', function () { return Serenity.DateEditor; }],
            ['IdEmpleado', function () { return Serenity.IntegerEditor; }],
            ['IdPuesto', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(HistorialEmpleadoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var HistorialEmpleadoRow;
        (function (HistorialEmpleadoRow) {
            HistorialEmpleadoRow.idProperty = 'IdHistorialEmpleado';
            HistorialEmpleadoRow.localTextPrefix = 'Default.HistorialEmpleado';
            var Fields;
            (function (Fields) {
            })(Fields = HistorialEmpleadoRow.Fields || (HistorialEmpleadoRow.Fields = {}));
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
            ].forEach(function (x) { return Fields[x] = x; });
        })(HistorialEmpleadoRow = Default.HistorialEmpleadoRow || (Default.HistorialEmpleadoRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var HistorialEmpleadoService;
        (function (HistorialEmpleadoService) {
            HistorialEmpleadoService.baseUrl = 'Default/HistorialEmpleado';
            var Methods;
            (function (Methods) {
            })(Methods = HistorialEmpleadoService.Methods || (HistorialEmpleadoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                HistorialEmpleadoService[x] = function (r, s, o) {
                    return Q.serviceRequest(HistorialEmpleadoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = HistorialEmpleadoService.baseUrl + '/' + x;
            });
        })(HistorialEmpleadoService = Default.HistorialEmpleadoService || (Default.HistorialEmpleadoService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var JerarquiaForm = /** @class */ (function (_super) {
            __extends(JerarquiaForm, _super);
            function JerarquiaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            JerarquiaForm.formKey = 'Default.Jerarquia';
            return JerarquiaForm;
        }(Serenity.PrefixedContext));
        Default.JerarquiaForm = JerarquiaForm;
        [,
            ['NombreJerarquia', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(JerarquiaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var JerarquiaRow;
        (function (JerarquiaRow) {
            JerarquiaRow.idProperty = 'IdJerarquia';
            JerarquiaRow.nameProperty = 'NombreJerarquia';
            JerarquiaRow.localTextPrefix = 'Default.Jerarquia';
            var Fields;
            (function (Fields) {
            })(Fields = JerarquiaRow.Fields || (JerarquiaRow.Fields = {}));
            [
                'IdJerarquia',
                'NombreJerarquia'
            ].forEach(function (x) { return Fields[x] = x; });
        })(JerarquiaRow = Default.JerarquiaRow || (Default.JerarquiaRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var JerarquiaService;
        (function (JerarquiaService) {
            JerarquiaService.baseUrl = 'Default/Jerarquia';
            var Methods;
            (function (Methods) {
            })(Methods = JerarquiaService.Methods || (JerarquiaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                JerarquiaService[x] = function (r, s, o) {
                    return Q.serviceRequest(JerarquiaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = JerarquiaService.baseUrl + '/' + x;
            });
        })(JerarquiaService = Default.JerarquiaService || (Default.JerarquiaService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var NivelForm = /** @class */ (function (_super) {
            __extends(NivelForm, _super);
            function NivelForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NivelForm.formKey = 'Default.Nivel';
            return NivelForm;
        }(Serenity.PrefixedContext));
        Default.NivelForm = NivelForm;
        [,
            ['NombreNivel', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(NivelForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var NivelRow;
        (function (NivelRow) {
            NivelRow.idProperty = 'IdNivel';
            NivelRow.nameProperty = 'NombreNivel';
            NivelRow.localTextPrefix = 'Default.Nivel';
            var Fields;
            (function (Fields) {
            })(Fields = NivelRow.Fields || (NivelRow.Fields = {}));
            [
                'IdNivel',
                'NombreNivel'
            ].forEach(function (x) { return Fields[x] = x; });
        })(NivelRow = Default.NivelRow || (Default.NivelRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var NivelService;
        (function (NivelService) {
            NivelService.baseUrl = 'Default/Nivel';
            var Methods;
            (function (Methods) {
            })(Methods = NivelService.Methods || (NivelService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                NivelService[x] = function (r, s, o) {
                    return Q.serviceRequest(NivelService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = NivelService.baseUrl + '/' + x;
            });
        })(NivelService = Default.NivelService || (Default.NivelService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoForm = /** @class */ (function (_super) {
            __extends(PuestoForm, _super);
            function PuestoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PuestoForm.formKey = 'Default.Puesto';
            return PuestoForm;
        }(Serenity.PrefixedContext));
        Default.PuestoForm = PuestoForm;
        [,
            ['NombrePuesto', function () { return Serenity.StringEditor; }],
            ['DescripcionPuesto', function () { return Serenity.StringEditor; }],
            ['IdDepartamento', function () { return Serenity.IntegerEditor; }],
            ['IdJerarquia', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(PuestoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoRow;
        (function (PuestoRow) {
            PuestoRow.idProperty = 'IdPuesto';
            PuestoRow.nameProperty = 'NombrePuesto';
            PuestoRow.localTextPrefix = 'Default.Puesto';
            var Fields;
            (function (Fields) {
            })(Fields = PuestoRow.Fields || (PuestoRow.Fields = {}));
            [
                'IdPuesto',
                'NombrePuesto',
                'DescripcionPuesto',
                'IdDepartamento',
                'IdJerarquia',
                'IdDepartamentoNombreDepartamento',
                'IdDepartamentoIdNivel',
                'IdJerarquiaNombreJerarquia'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PuestoRow = Default.PuestoRow || (Default.PuestoRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoService;
        (function (PuestoService) {
            PuestoService.baseUrl = 'Default/Puesto';
            var Methods;
            (function (Methods) {
            })(Methods = PuestoService.Methods || (PuestoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PuestoService[x] = function (r, s, o) {
                    return Q.serviceRequest(PuestoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PuestoService.baseUrl + '/' + x;
            });
        })(PuestoService = Default.PuestoService || (Default.PuestoService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoTareaForm = /** @class */ (function (_super) {
            __extends(PuestoTareaForm, _super);
            function PuestoTareaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PuestoTareaForm.formKey = 'Default.PuestoTarea';
            return PuestoTareaForm;
        }(Serenity.PrefixedContext));
        Default.PuestoTareaForm = PuestoTareaForm;
        [,
            ['IdPuesto', function () { return Serenity.IntegerEditor; }],
            ['IdTarea', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(PuestoTareaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoTareaRow;
        (function (PuestoTareaRow) {
            PuestoTareaRow.idProperty = 'IdPuestoTarea';
            PuestoTareaRow.localTextPrefix = 'Default.PuestoTarea';
            var Fields;
            (function (Fields) {
            })(Fields = PuestoTareaRow.Fields || (PuestoTareaRow.Fields = {}));
            [
                'IdPuestoTarea',
                'IdPuesto',
                'IdTarea',
                'IdPuestoNombrePuesto',
                'IdPuestoDescripcionPuesto',
                'IdPuestoIdDepartamento',
                'IdPuestoIdJerarquia',
                'IdTareaDescripcionTarea'
            ].forEach(function (x) { return Fields[x] = x; });
        })(PuestoTareaRow = Default.PuestoTareaRow || (Default.PuestoTareaRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoTareaService;
        (function (PuestoTareaService) {
            PuestoTareaService.baseUrl = 'Default/PuestoTarea';
            var Methods;
            (function (Methods) {
            })(Methods = PuestoTareaService.Methods || (PuestoTareaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PuestoTareaService[x] = function (r, s, o) {
                    return Q.serviceRequest(PuestoTareaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = PuestoTareaService.baseUrl + '/' + x;
            });
        })(PuestoTareaService = Default.PuestoTareaService || (Default.PuestoTareaService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoForm = /** @class */ (function (_super) {
            __extends(RequerimientoForm, _super);
            function RequerimientoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RequerimientoForm.formKey = 'Default.Requerimiento';
            return RequerimientoForm;
        }(Serenity.PrefixedContext));
        Default.RequerimientoForm = RequerimientoForm;
        [,
            ['DescripcionRequerimiento', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(RequerimientoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoPuestoForm = /** @class */ (function (_super) {
            __extends(RequerimientoPuestoForm, _super);
            function RequerimientoPuestoForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RequerimientoPuestoForm.formKey = 'Default.RequerimientoPuesto';
            return RequerimientoPuestoForm;
        }(Serenity.PrefixedContext));
        Default.RequerimientoPuestoForm = RequerimientoPuestoForm;
        [,
            ['IdRequerimiento', function () { return Serenity.IntegerEditor; }],
            ['IdPuesto', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(RequerimientoPuestoForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoPuestoRow;
        (function (RequerimientoPuestoRow) {
            RequerimientoPuestoRow.idProperty = 'IdRequerimientoPuesto';
            RequerimientoPuestoRow.localTextPrefix = 'Default.RequerimientoPuesto';
            var Fields;
            (function (Fields) {
            })(Fields = RequerimientoPuestoRow.Fields || (RequerimientoPuestoRow.Fields = {}));
            [
                'IdRequerimientoPuesto',
                'IdRequerimiento',
                'IdPuesto',
                'IdRequerimientoDescripcionRequerimiento',
                'IdPuestoNombrePuesto',
                'IdPuestoDescripcionPuesto',
                'IdPuestoIdDepartamento',
                'IdPuestoIdJerarquia'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RequerimientoPuestoRow = Default.RequerimientoPuestoRow || (Default.RequerimientoPuestoRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoPuestoService;
        (function (RequerimientoPuestoService) {
            RequerimientoPuestoService.baseUrl = 'Default/RequerimientoPuesto';
            var Methods;
            (function (Methods) {
            })(Methods = RequerimientoPuestoService.Methods || (RequerimientoPuestoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequerimientoPuestoService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequerimientoPuestoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RequerimientoPuestoService.baseUrl + '/' + x;
            });
        })(RequerimientoPuestoService = Default.RequerimientoPuestoService || (Default.RequerimientoPuestoService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoRow;
        (function (RequerimientoRow) {
            RequerimientoRow.idProperty = 'IdRequerimiento';
            RequerimientoRow.nameProperty = 'DescripcionRequerimiento';
            RequerimientoRow.localTextPrefix = 'Default.Requerimiento';
            var Fields;
            (function (Fields) {
            })(Fields = RequerimientoRow.Fields || (RequerimientoRow.Fields = {}));
            [
                'IdRequerimiento',
                'DescripcionRequerimiento'
            ].forEach(function (x) { return Fields[x] = x; });
        })(RequerimientoRow = Default.RequerimientoRow || (Default.RequerimientoRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoService;
        (function (RequerimientoService) {
            RequerimientoService.baseUrl = 'Default/Requerimiento';
            var Methods;
            (function (Methods) {
            })(Methods = RequerimientoService.Methods || (RequerimientoService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequerimientoService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequerimientoService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = RequerimientoService.baseUrl + '/' + x;
            });
        })(RequerimientoService = Default.RequerimientoService || (Default.RequerimientoService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var TareaForm = /** @class */ (function (_super) {
            __extends(TareaForm, _super);
            function TareaForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TareaForm.formKey = 'Default.Tarea';
            return TareaForm;
        }(Serenity.PrefixedContext));
        Default.TareaForm = TareaForm;
        [,
            ['DescripcionTarea', function () { return Serenity.StringEditor; }]
        ].forEach(function (x) { return Object.defineProperty(TareaForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var TareaRow;
        (function (TareaRow) {
            TareaRow.idProperty = 'IdTarea';
            TareaRow.nameProperty = 'DescripcionTarea';
            TareaRow.localTextPrefix = 'Default.Tarea';
            var Fields;
            (function (Fields) {
            })(Fields = TareaRow.Fields || (TareaRow.Fields = {}));
            [
                'IdTarea',
                'DescripcionTarea'
            ].forEach(function (x) { return Fields[x] = x; });
        })(TareaRow = Default.TareaRow || (Default.TareaRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var TareaService;
        (function (TareaService) {
            TareaService.baseUrl = 'Default/Tarea';
            var Methods;
            (function (Methods) {
            })(Methods = TareaService.Methods || (TareaService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TareaService[x] = function (r, s, o) {
                    return Q.serviceRequest(TareaService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = TareaService.baseUrl + '/' + x;
            });
        })(TareaService = Default.TareaService || (Default.TareaService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var UsuarioForm = /** @class */ (function (_super) {
            __extends(UsuarioForm, _super);
            function UsuarioForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UsuarioForm.formKey = 'Default.Usuario';
            return UsuarioForm;
        }(Serenity.PrefixedContext));
        Default.UsuarioForm = UsuarioForm;
        [,
            ['NombreUsuario', function () { return Serenity.StringEditor; }],
            ['ContraseñaUsuario', function () { return Serenity.StringEditor; }],
            ['EsAdministrador', function () { return Serenity.BooleanEditor; }],
            ['HabilitadoUsuario', function () { return Serenity.BooleanEditor; }],
            ['ContraseñaRestaurada', function () { return Serenity.BooleanEditor; }],
            ['IdEmpleado', function () { return Serenity.IntegerEditor; }]
        ].forEach(function (x) { return Object.defineProperty(UsuarioForm.prototype, x[0], {
            get: function () {
                return this.w(x[0], x[1]());
            },
            enumerable: true,
            configurable: true
        }); });
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var UsuarioRow;
        (function (UsuarioRow) {
            UsuarioRow.idProperty = 'IdUsuario';
            UsuarioRow.nameProperty = 'NombreUsuario';
            UsuarioRow.localTextPrefix = 'Default.Usuario';
            var Fields;
            (function (Fields) {
            })(Fields = UsuarioRow.Fields || (UsuarioRow.Fields = {}));
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
            ].forEach(function (x) { return Fields[x] = x; });
        })(UsuarioRow = Default.UsuarioRow || (Default.UsuarioRow = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var UsuarioService;
        (function (UsuarioService) {
            UsuarioService.baseUrl = 'Default/Usuario';
            var Methods;
            (function (Methods) {
            })(Methods = UsuarioService.Methods || (UsuarioService.Methods = {}));
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UsuarioService[x] = function (r, s, o) {
                    return Q.serviceRequest(UsuarioService.baseUrl + '/' + x, r, s, o);
                };
                Methods[x] = UsuarioService.baseUrl + '/' + x;
            });
        })(UsuarioService = Default.UsuarioService || (Default.UsuarioService = {}));
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Serene1.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Serene1.LanguageList || (Serene1.LanguageList = {}));
})(Serene1 || (Serene1 = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Serene1;
(function (Serene1) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Serene1');
        Serenity.EntityDialog.defaultLanguageList = Serene1.LanguageList.getValue;
    })(ScriptInitialization = Serene1.ScriptInitialization || (Serene1.ScriptInitialization = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Serene1.Administration || (Serene1.Administration = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Serene1.BasicProgressDialog = BasicProgressDialog;
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Serene1.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Serene1.DialogUtils || (Serene1.DialogUtils = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Serene1.Common || (Serene1.Common = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AuditoriaDialog = /** @class */ (function (_super) {
            __extends(AuditoriaDialog, _super);
            function AuditoriaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.AuditoriaForm(_this.idPrefix);
                return _this;
            }
            AuditoriaDialog.prototype.getFormKey = function () { return Default.AuditoriaForm.formKey; };
            AuditoriaDialog.prototype.getIdProperty = function () { return Default.AuditoriaRow.idProperty; };
            AuditoriaDialog.prototype.getLocalTextPrefix = function () { return Default.AuditoriaRow.localTextPrefix; };
            AuditoriaDialog.prototype.getNameProperty = function () { return Default.AuditoriaRow.nameProperty; };
            AuditoriaDialog.prototype.getService = function () { return Default.AuditoriaService.baseUrl; };
            AuditoriaDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], AuditoriaDialog);
            return AuditoriaDialog;
        }(Serenity.EntityDialog));
        Default.AuditoriaDialog = AuditoriaDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var AuditoriaGrid = /** @class */ (function (_super) {
            __extends(AuditoriaGrid, _super);
            function AuditoriaGrid(container) {
                return _super.call(this, container) || this;
            }
            AuditoriaGrid.prototype.getColumnsKey = function () { return 'Default.Auditoria'; };
            AuditoriaGrid.prototype.getDialogType = function () { return Default.AuditoriaDialog; };
            AuditoriaGrid.prototype.getIdProperty = function () { return Default.AuditoriaRow.idProperty; };
            AuditoriaGrid.prototype.getLocalTextPrefix = function () { return Default.AuditoriaRow.localTextPrefix; };
            AuditoriaGrid.prototype.getService = function () { return Default.AuditoriaService.baseUrl; };
            AuditoriaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AuditoriaGrid);
            return AuditoriaGrid;
        }(Serenity.EntityGrid));
        Default.AuditoriaGrid = AuditoriaGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartamentoDialog = /** @class */ (function (_super) {
            __extends(DepartamentoDialog, _super);
            function DepartamentoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.DepartamentoForm(_this.idPrefix);
                return _this;
            }
            DepartamentoDialog.prototype.getFormKey = function () { return Default.DepartamentoForm.formKey; };
            DepartamentoDialog.prototype.getIdProperty = function () { return Default.DepartamentoRow.idProperty; };
            DepartamentoDialog.prototype.getLocalTextPrefix = function () { return Default.DepartamentoRow.localTextPrefix; };
            DepartamentoDialog.prototype.getNameProperty = function () { return Default.DepartamentoRow.nameProperty; };
            DepartamentoDialog.prototype.getService = function () { return Default.DepartamentoService.baseUrl; };
            DepartamentoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DepartamentoDialog);
            return DepartamentoDialog;
        }(Serenity.EntityDialog));
        Default.DepartamentoDialog = DepartamentoDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var DepartamentoGrid = /** @class */ (function (_super) {
            __extends(DepartamentoGrid, _super);
            function DepartamentoGrid(container) {
                return _super.call(this, container) || this;
            }
            DepartamentoGrid.prototype.getColumnsKey = function () { return 'Default.Departamento'; };
            DepartamentoGrid.prototype.getDialogType = function () { return Default.DepartamentoDialog; };
            DepartamentoGrid.prototype.getIdProperty = function () { return Default.DepartamentoRow.idProperty; };
            DepartamentoGrid.prototype.getLocalTextPrefix = function () { return Default.DepartamentoRow.localTextPrefix; };
            DepartamentoGrid.prototype.getService = function () { return Default.DepartamentoService.baseUrl; };
            DepartamentoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepartamentoGrid);
            return DepartamentoGrid;
        }(Serenity.EntityGrid));
        Default.DepartamentoGrid = DepartamentoGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpleadoDialog = /** @class */ (function (_super) {
            __extends(EmpleadoDialog, _super);
            function EmpleadoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.EmpleadoForm(_this.idPrefix);
                return _this;
            }
            EmpleadoDialog.prototype.getFormKey = function () { return Default.EmpleadoForm.formKey; };
            EmpleadoDialog.prototype.getIdProperty = function () { return Default.EmpleadoRow.idProperty; };
            EmpleadoDialog.prototype.getLocalTextPrefix = function () { return Default.EmpleadoRow.localTextPrefix; };
            EmpleadoDialog.prototype.getNameProperty = function () { return Default.EmpleadoRow.nameProperty; };
            EmpleadoDialog.prototype.getService = function () { return Default.EmpleadoService.baseUrl; };
            EmpleadoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EmpleadoDialog);
            return EmpleadoDialog;
        }(Serenity.EntityDialog));
        Default.EmpleadoDialog = EmpleadoDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var EmpleadoGrid = /** @class */ (function (_super) {
            __extends(EmpleadoGrid, _super);
            function EmpleadoGrid(container) {
                return _super.call(this, container) || this;
            }
            EmpleadoGrid.prototype.getColumnsKey = function () { return 'Default.Empleado'; };
            EmpleadoGrid.prototype.getDialogType = function () { return Default.EmpleadoDialog; };
            EmpleadoGrid.prototype.getIdProperty = function () { return Default.EmpleadoRow.idProperty; };
            EmpleadoGrid.prototype.getLocalTextPrefix = function () { return Default.EmpleadoRow.localTextPrefix; };
            EmpleadoGrid.prototype.getService = function () { return Default.EmpleadoService.baseUrl; };
            EmpleadoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmpleadoGrid);
            return EmpleadoGrid;
        }(Serenity.EntityGrid));
        Default.EmpleadoGrid = EmpleadoGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var HistorialEmpleadoDialog = /** @class */ (function (_super) {
            __extends(HistorialEmpleadoDialog, _super);
            function HistorialEmpleadoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.HistorialEmpleadoForm(_this.idPrefix);
                return _this;
            }
            HistorialEmpleadoDialog.prototype.getFormKey = function () { return Default.HistorialEmpleadoForm.formKey; };
            HistorialEmpleadoDialog.prototype.getIdProperty = function () { return Default.HistorialEmpleadoRow.idProperty; };
            HistorialEmpleadoDialog.prototype.getLocalTextPrefix = function () { return Default.HistorialEmpleadoRow.localTextPrefix; };
            HistorialEmpleadoDialog.prototype.getService = function () { return Default.HistorialEmpleadoService.baseUrl; };
            HistorialEmpleadoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], HistorialEmpleadoDialog);
            return HistorialEmpleadoDialog;
        }(Serenity.EntityDialog));
        Default.HistorialEmpleadoDialog = HistorialEmpleadoDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var HistorialEmpleadoGrid = /** @class */ (function (_super) {
            __extends(HistorialEmpleadoGrid, _super);
            function HistorialEmpleadoGrid(container) {
                return _super.call(this, container) || this;
            }
            HistorialEmpleadoGrid.prototype.getColumnsKey = function () { return 'Default.HistorialEmpleado'; };
            HistorialEmpleadoGrid.prototype.getDialogType = function () { return Default.HistorialEmpleadoDialog; };
            HistorialEmpleadoGrid.prototype.getIdProperty = function () { return Default.HistorialEmpleadoRow.idProperty; };
            HistorialEmpleadoGrid.prototype.getLocalTextPrefix = function () { return Default.HistorialEmpleadoRow.localTextPrefix; };
            HistorialEmpleadoGrid.prototype.getService = function () { return Default.HistorialEmpleadoService.baseUrl; };
            HistorialEmpleadoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], HistorialEmpleadoGrid);
            return HistorialEmpleadoGrid;
        }(Serenity.EntityGrid));
        Default.HistorialEmpleadoGrid = HistorialEmpleadoGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var JerarquiaDialog = /** @class */ (function (_super) {
            __extends(JerarquiaDialog, _super);
            function JerarquiaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.JerarquiaForm(_this.idPrefix);
                return _this;
            }
            JerarquiaDialog.prototype.getFormKey = function () { return Default.JerarquiaForm.formKey; };
            JerarquiaDialog.prototype.getIdProperty = function () { return Default.JerarquiaRow.idProperty; };
            JerarquiaDialog.prototype.getLocalTextPrefix = function () { return Default.JerarquiaRow.localTextPrefix; };
            JerarquiaDialog.prototype.getNameProperty = function () { return Default.JerarquiaRow.nameProperty; };
            JerarquiaDialog.prototype.getService = function () { return Default.JerarquiaService.baseUrl; };
            JerarquiaDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], JerarquiaDialog);
            return JerarquiaDialog;
        }(Serenity.EntityDialog));
        Default.JerarquiaDialog = JerarquiaDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var JerarquiaGrid = /** @class */ (function (_super) {
            __extends(JerarquiaGrid, _super);
            function JerarquiaGrid(container) {
                return _super.call(this, container) || this;
            }
            JerarquiaGrid.prototype.getColumnsKey = function () { return 'Default.Jerarquia'; };
            JerarquiaGrid.prototype.getDialogType = function () { return Default.JerarquiaDialog; };
            JerarquiaGrid.prototype.getIdProperty = function () { return Default.JerarquiaRow.idProperty; };
            JerarquiaGrid.prototype.getLocalTextPrefix = function () { return Default.JerarquiaRow.localTextPrefix; };
            JerarquiaGrid.prototype.getService = function () { return Default.JerarquiaService.baseUrl; };
            JerarquiaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], JerarquiaGrid);
            return JerarquiaGrid;
        }(Serenity.EntityGrid));
        Default.JerarquiaGrid = JerarquiaGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var NivelDialog = /** @class */ (function (_super) {
            __extends(NivelDialog, _super);
            function NivelDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.NivelForm(_this.idPrefix);
                return _this;
            }
            NivelDialog.prototype.getFormKey = function () { return Default.NivelForm.formKey; };
            NivelDialog.prototype.getIdProperty = function () { return Default.NivelRow.idProperty; };
            NivelDialog.prototype.getLocalTextPrefix = function () { return Default.NivelRow.localTextPrefix; };
            NivelDialog.prototype.getNameProperty = function () { return Default.NivelRow.nameProperty; };
            NivelDialog.prototype.getService = function () { return Default.NivelService.baseUrl; };
            NivelDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], NivelDialog);
            return NivelDialog;
        }(Serenity.EntityDialog));
        Default.NivelDialog = NivelDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var NivelGrid = /** @class */ (function (_super) {
            __extends(NivelGrid, _super);
            function NivelGrid(container) {
                return _super.call(this, container) || this;
            }
            NivelGrid.prototype.getColumnsKey = function () { return 'Default.Nivel'; };
            NivelGrid.prototype.getDialogType = function () { return Default.NivelDialog; };
            NivelGrid.prototype.getIdProperty = function () { return Default.NivelRow.idProperty; };
            NivelGrid.prototype.getLocalTextPrefix = function () { return Default.NivelRow.localTextPrefix; };
            NivelGrid.prototype.getService = function () { return Default.NivelService.baseUrl; };
            NivelGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NivelGrid);
            return NivelGrid;
        }(Serenity.EntityGrid));
        Default.NivelGrid = NivelGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoDialog = /** @class */ (function (_super) {
            __extends(PuestoDialog, _super);
            function PuestoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PuestoForm(_this.idPrefix);
                return _this;
            }
            PuestoDialog.prototype.getFormKey = function () { return Default.PuestoForm.formKey; };
            PuestoDialog.prototype.getIdProperty = function () { return Default.PuestoRow.idProperty; };
            PuestoDialog.prototype.getLocalTextPrefix = function () { return Default.PuestoRow.localTextPrefix; };
            PuestoDialog.prototype.getNameProperty = function () { return Default.PuestoRow.nameProperty; };
            PuestoDialog.prototype.getService = function () { return Default.PuestoService.baseUrl; };
            PuestoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PuestoDialog);
            return PuestoDialog;
        }(Serenity.EntityDialog));
        Default.PuestoDialog = PuestoDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoGrid = /** @class */ (function (_super) {
            __extends(PuestoGrid, _super);
            function PuestoGrid(container) {
                return _super.call(this, container) || this;
            }
            PuestoGrid.prototype.getColumnsKey = function () { return 'Default.Puesto'; };
            PuestoGrid.prototype.getDialogType = function () { return Default.PuestoDialog; };
            PuestoGrid.prototype.getIdProperty = function () { return Default.PuestoRow.idProperty; };
            PuestoGrid.prototype.getLocalTextPrefix = function () { return Default.PuestoRow.localTextPrefix; };
            PuestoGrid.prototype.getService = function () { return Default.PuestoService.baseUrl; };
            PuestoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PuestoGrid);
            return PuestoGrid;
        }(Serenity.EntityGrid));
        Default.PuestoGrid = PuestoGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoTareaDialog = /** @class */ (function (_super) {
            __extends(PuestoTareaDialog, _super);
            function PuestoTareaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.PuestoTareaForm(_this.idPrefix);
                return _this;
            }
            PuestoTareaDialog.prototype.getFormKey = function () { return Default.PuestoTareaForm.formKey; };
            PuestoTareaDialog.prototype.getIdProperty = function () { return Default.PuestoTareaRow.idProperty; };
            PuestoTareaDialog.prototype.getLocalTextPrefix = function () { return Default.PuestoTareaRow.localTextPrefix; };
            PuestoTareaDialog.prototype.getService = function () { return Default.PuestoTareaService.baseUrl; };
            PuestoTareaDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PuestoTareaDialog);
            return PuestoTareaDialog;
        }(Serenity.EntityDialog));
        Default.PuestoTareaDialog = PuestoTareaDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var PuestoTareaGrid = /** @class */ (function (_super) {
            __extends(PuestoTareaGrid, _super);
            function PuestoTareaGrid(container) {
                return _super.call(this, container) || this;
            }
            PuestoTareaGrid.prototype.getColumnsKey = function () { return 'Default.PuestoTarea'; };
            PuestoTareaGrid.prototype.getDialogType = function () { return Default.PuestoTareaDialog; };
            PuestoTareaGrid.prototype.getIdProperty = function () { return Default.PuestoTareaRow.idProperty; };
            PuestoTareaGrid.prototype.getLocalTextPrefix = function () { return Default.PuestoTareaRow.localTextPrefix; };
            PuestoTareaGrid.prototype.getService = function () { return Default.PuestoTareaService.baseUrl; };
            PuestoTareaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PuestoTareaGrid);
            return PuestoTareaGrid;
        }(Serenity.EntityGrid));
        Default.PuestoTareaGrid = PuestoTareaGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoDialog = /** @class */ (function (_super) {
            __extends(RequerimientoDialog, _super);
            function RequerimientoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RequerimientoForm(_this.idPrefix);
                return _this;
            }
            RequerimientoDialog.prototype.getFormKey = function () { return Default.RequerimientoForm.formKey; };
            RequerimientoDialog.prototype.getIdProperty = function () { return Default.RequerimientoRow.idProperty; };
            RequerimientoDialog.prototype.getLocalTextPrefix = function () { return Default.RequerimientoRow.localTextPrefix; };
            RequerimientoDialog.prototype.getNameProperty = function () { return Default.RequerimientoRow.nameProperty; };
            RequerimientoDialog.prototype.getService = function () { return Default.RequerimientoService.baseUrl; };
            RequerimientoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RequerimientoDialog);
            return RequerimientoDialog;
        }(Serenity.EntityDialog));
        Default.RequerimientoDialog = RequerimientoDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoGrid = /** @class */ (function (_super) {
            __extends(RequerimientoGrid, _super);
            function RequerimientoGrid(container) {
                return _super.call(this, container) || this;
            }
            RequerimientoGrid.prototype.getColumnsKey = function () { return 'Default.Requerimiento'; };
            RequerimientoGrid.prototype.getDialogType = function () { return Default.RequerimientoDialog; };
            RequerimientoGrid.prototype.getIdProperty = function () { return Default.RequerimientoRow.idProperty; };
            RequerimientoGrid.prototype.getLocalTextPrefix = function () { return Default.RequerimientoRow.localTextPrefix; };
            RequerimientoGrid.prototype.getService = function () { return Default.RequerimientoService.baseUrl; };
            RequerimientoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequerimientoGrid);
            return RequerimientoGrid;
        }(Serenity.EntityGrid));
        Default.RequerimientoGrid = RequerimientoGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoPuestoDialog = /** @class */ (function (_super) {
            __extends(RequerimientoPuestoDialog, _super);
            function RequerimientoPuestoDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.RequerimientoPuestoForm(_this.idPrefix);
                return _this;
            }
            RequerimientoPuestoDialog.prototype.getFormKey = function () { return Default.RequerimientoPuestoForm.formKey; };
            RequerimientoPuestoDialog.prototype.getIdProperty = function () { return Default.RequerimientoPuestoRow.idProperty; };
            RequerimientoPuestoDialog.prototype.getLocalTextPrefix = function () { return Default.RequerimientoPuestoRow.localTextPrefix; };
            RequerimientoPuestoDialog.prototype.getService = function () { return Default.RequerimientoPuestoService.baseUrl; };
            RequerimientoPuestoDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], RequerimientoPuestoDialog);
            return RequerimientoPuestoDialog;
        }(Serenity.EntityDialog));
        Default.RequerimientoPuestoDialog = RequerimientoPuestoDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var RequerimientoPuestoGrid = /** @class */ (function (_super) {
            __extends(RequerimientoPuestoGrid, _super);
            function RequerimientoPuestoGrid(container) {
                return _super.call(this, container) || this;
            }
            RequerimientoPuestoGrid.prototype.getColumnsKey = function () { return 'Default.RequerimientoPuesto'; };
            RequerimientoPuestoGrid.prototype.getDialogType = function () { return Default.RequerimientoPuestoDialog; };
            RequerimientoPuestoGrid.prototype.getIdProperty = function () { return Default.RequerimientoPuestoRow.idProperty; };
            RequerimientoPuestoGrid.prototype.getLocalTextPrefix = function () { return Default.RequerimientoPuestoRow.localTextPrefix; };
            RequerimientoPuestoGrid.prototype.getService = function () { return Default.RequerimientoPuestoService.baseUrl; };
            RequerimientoPuestoGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RequerimientoPuestoGrid);
            return RequerimientoPuestoGrid;
        }(Serenity.EntityGrid));
        Default.RequerimientoPuestoGrid = RequerimientoPuestoGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var TareaDialog = /** @class */ (function (_super) {
            __extends(TareaDialog, _super);
            function TareaDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.TareaForm(_this.idPrefix);
                return _this;
            }
            TareaDialog.prototype.getFormKey = function () { return Default.TareaForm.formKey; };
            TareaDialog.prototype.getIdProperty = function () { return Default.TareaRow.idProperty; };
            TareaDialog.prototype.getLocalTextPrefix = function () { return Default.TareaRow.localTextPrefix; };
            TareaDialog.prototype.getNameProperty = function () { return Default.TareaRow.nameProperty; };
            TareaDialog.prototype.getService = function () { return Default.TareaService.baseUrl; };
            TareaDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TareaDialog);
            return TareaDialog;
        }(Serenity.EntityDialog));
        Default.TareaDialog = TareaDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var TareaGrid = /** @class */ (function (_super) {
            __extends(TareaGrid, _super);
            function TareaGrid(container) {
                return _super.call(this, container) || this;
            }
            TareaGrid.prototype.getColumnsKey = function () { return 'Default.Tarea'; };
            TareaGrid.prototype.getDialogType = function () { return Default.TareaDialog; };
            TareaGrid.prototype.getIdProperty = function () { return Default.TareaRow.idProperty; };
            TareaGrid.prototype.getLocalTextPrefix = function () { return Default.TareaRow.localTextPrefix; };
            TareaGrid.prototype.getService = function () { return Default.TareaService.baseUrl; };
            TareaGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TareaGrid);
            return TareaGrid;
        }(Serenity.EntityGrid));
        Default.TareaGrid = TareaGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var UsuarioDialog = /** @class */ (function (_super) {
            __extends(UsuarioDialog, _super);
            function UsuarioDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Default.UsuarioForm(_this.idPrefix);
                return _this;
            }
            UsuarioDialog.prototype.getFormKey = function () { return Default.UsuarioForm.formKey; };
            UsuarioDialog.prototype.getIdProperty = function () { return Default.UsuarioRow.idProperty; };
            UsuarioDialog.prototype.getLocalTextPrefix = function () { return Default.UsuarioRow.localTextPrefix; };
            UsuarioDialog.prototype.getNameProperty = function () { return Default.UsuarioRow.nameProperty; };
            UsuarioDialog.prototype.getService = function () { return Default.UsuarioService.baseUrl; };
            UsuarioDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UsuarioDialog);
            return UsuarioDialog;
        }(Serenity.EntityDialog));
        Default.UsuarioDialog = UsuarioDialog;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Default;
    (function (Default) {
        var UsuarioGrid = /** @class */ (function (_super) {
            __extends(UsuarioGrid, _super);
            function UsuarioGrid(container) {
                return _super.call(this, container) || this;
            }
            UsuarioGrid.prototype.getColumnsKey = function () { return 'Default.Usuario'; };
            UsuarioGrid.prototype.getDialogType = function () { return Default.UsuarioDialog; };
            UsuarioGrid.prototype.getIdProperty = function () { return Default.UsuarioRow.idProperty; };
            UsuarioGrid.prototype.getLocalTextPrefix = function () { return Default.UsuarioRow.localTextPrefix; };
            UsuarioGrid.prototype.getService = function () { return Default.UsuarioService.baseUrl; };
            UsuarioGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UsuarioGrid);
            return UsuarioGrid;
        }(Serenity.EntityGrid));
        Default.UsuarioGrid = UsuarioGrid;
    })(Default = Serene1.Default || (Serene1.Default = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Serene1.Authorization || (Serene1.Authorization = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
var Serene1;
(function (Serene1) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Serene1.Membership || (Serene1.Membership = {}));
})(Serene1 || (Serene1 = {}));
//# sourceMappingURL=Serene1.Web.js.map