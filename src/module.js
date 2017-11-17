angular.module('intlTelInput', ['schemaForm', 'templates', 'ngIntlTelInput']).config([
  'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'ngIntlTelInputProvider',
  function(schemaFormDecoratorsProvider, sfBuilderProvider, ngIntlTelInputProvider) {

    schemaFormDecoratorsProvider.defineAddOn(
      'bootstrapDecorator',           // Name of the decorator you want to add to.
      'intl_tel_input',                      // Form type that should render this add-on
      'src/templates/intl_tel_input.html',  // Template name in $templateCache
      sfBuilderProvider.stdBuilders   // List of builder functions to apply.
    )

    ngIntlTelInputProvider.set({initialCountry: 'us'})
  }
])
