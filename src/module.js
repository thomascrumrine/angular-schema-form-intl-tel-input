angular.module('intlTelInput', ['schemaForm', 'templates', 'ngIntlTelInput']).config([
  'schemaFormDecoratorsProvider', 'sfBuilderProvider', 'ngIntlTelInputProvider',
  function(schemaFormDecoratorsProvider, sfBuilderProvider, ngIntlTelInputProvider) {

    schemaFormDecoratorsProvider.defineAddOn(
      'bootstrapDecorator',
      'intl_tel_input',
      'src/templates/intl_tel_input.html',
      sfBuilderProvider.stdBuilders
    )

    ngIntlTelInputProvider.set({initialCountry: 'us'})
  }
])
