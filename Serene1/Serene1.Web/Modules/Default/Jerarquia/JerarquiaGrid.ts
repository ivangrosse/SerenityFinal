
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class JerarquiaGrid extends Serenity.EntityGrid<JerarquiaRow, any> {
        protected getColumnsKey() { return 'Default.Jerarquia'; }
        protected getDialogType() { return JerarquiaDialog; }
        protected getIdProperty() { return JerarquiaRow.idProperty; }
        protected getLocalTextPrefix() { return JerarquiaRow.localTextPrefix; }
        protected getService() { return JerarquiaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}