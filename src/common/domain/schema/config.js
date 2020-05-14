module.exports = {
  core :
  {
    schema :
    {
      composer :
      {
        'value-object/error'         : `${__dirname}/value-object/error`,
        'value-object/partial'       : `${__dirname}/value-object/partial`,
        'value-object/reference'     : `${__dirname}/value-object/reference`,
        'value-object/binding'       : `${__dirname}/value-object/binding`,
        'value-object/listener'      : `${__dirname}/value-object/listener`,
        'entity/component'           : `${__dirname}/entity/component`,
        'entity/modal'               : `${__dirname}/entity/modal`,
        'entity/modal-action'        : `${__dirname}/entity/modal-action`,
        'entity/page-blocker'        : `${__dirname}/entity/page-blocker`,
        'entity/page'                : `${__dirname}/entity/page`,
        'entity/pagination'          : `${__dirname}/entity/pagination`,
        'entity/button-group-button' : `${__dirname}/entity/button-group-button`,
        'entity/table'               : `${__dirname}/entity/table`,
        // FORMS
        'entity/form'                : `${__dirname}/entity/form`,
        'entity/fieldset'            : `${__dirname}/entity/fieldset`,
        'entity/toggeable-fieldset'  : `${__dirname}/entity/toggeable-fieldset`,
        'entity/input-group'         : `${__dirname}/entity/input-group`,
        // INPUTS
        'entity/input'               : `${__dirname}/entity/input`,
        'entity/select-input'        : `${__dirname}/entity/select-input`,
        'entity/password-input'      : `${__dirname}/entity/password-input`,
        'entity/text-input'          : `${__dirname}/entity/text-input`,
        'entity/textarea-input'      : `${__dirname}/entity/textarea-input`,
        'entity/button-group-input'  : `${__dirname}/entity/button-group-input`,
        'entity/checkbox-input'      : `${__dirname}/entity/checkbox-input`
      }
    },
    locator :
    {
      'composer/pagination' : `${__dirname}/composer/pagination`
    }
  }
}
