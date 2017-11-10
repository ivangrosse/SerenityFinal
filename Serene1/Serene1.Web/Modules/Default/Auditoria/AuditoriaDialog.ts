
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AuditoriaDialog extends Serenity.EntityDialog<AuditoriaRow, any> {
        protected getFormKey() { return AuditoriaForm.formKey; }
        protected getIdProperty() { return AuditoriaRow.idProperty; }
        protected getLocalTextPrefix() { return AuditoriaRow.localTextPrefix; }
        protected getNameProperty() { return AuditoriaRow.nameProperty; }
        protected getService() { return AuditoriaService.baseUrl; }

        protected form = new AuditoriaForm(this.idPrefix);

    }
}