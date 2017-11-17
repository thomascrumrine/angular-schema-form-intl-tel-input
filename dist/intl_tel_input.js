angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/intl_tel_input.html','<div class="form-group">\n  <label>{{form.title}}</label>\n  <div ng-class="{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}">\n    <span ng-if="form.fieldAddonLeft"\n          class="input-group-addon"\n          ng-bind-html="form.fieldAddonLeft"></span>\n    <input name=\'tel\'\n           class="form-control"\n           sf-field-model\n           ng-intl-tel-input\n           ng-model=\'form.phone\'\n           schema-validate="form"\n           type="tel"\n           data-selected-country="form.telCountry"\n           data-initial-country="us" />\n    </input>\n    <span ng-if="form.fieldAddonLeft"\n          class="input-group-addon"\n          ng-bind-html="form.fieldAddonLeft"></span>\n  </div>\n\n  <span class="help-block" sf-message>{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n');}]);
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
