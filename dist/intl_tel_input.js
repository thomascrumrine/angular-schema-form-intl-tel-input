angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/intl_tel_input.html','<div class="form-group {{form.htmlClass}} schema-form-intl-tel-input"\n     ng-class="{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false, \'required\': form.required === true}">\n  <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\n  <input name="{{form.key.slice(-1)[0]}}"\n         class="form-control {{form.fieldHtmlClass}}"\n         sf-field-model\n         ng-intl-tel-input\n         ng-model="$$value$$"\n         schema-validate="form"\n         type="tel"\n         data-selected-country="form.telCountry"\n         data-initial-country="us"\n         sf-changed="form"\n         ng-disabled="form.readonly">\n  </input>\n\n  <div class="help-block" sf-message="form.description"></div>\n</div>\n');}]);
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
