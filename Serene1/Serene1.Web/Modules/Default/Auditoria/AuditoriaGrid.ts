
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AuditoriaGrid extends Serenity.EntityGrid<AuditoriaRow, any> {
        protected getColumnsKey() { return 'Default.Auditoria'; }
        protected getDialogType() { return AuditoriaDialog; }
        protected getIdProperty() { return AuditoriaRow.idProperty; }
        protected getLocalTextPrefix() { return AuditoriaRow.localTextPrefix; }
        protected getService() { return AuditoriaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}