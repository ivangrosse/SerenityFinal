
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class JerarquiaDialog extends Serenity.EntityDialog<JerarquiaRow, any> {
        protected getFormKey() { return JerarquiaForm.formKey; }
        protected getIdProperty() { return JerarquiaRow.idProperty; }
        protected getLocalTextPrefix() { return JerarquiaRow.localTextPrefix; }
        protected getNameProperty() { return JerarquiaRow.nameProperty; }
        protected getService() { return JerarquiaService.baseUrl; }

        protected form = new JerarquiaForm(this.idPrefix);

    }
}