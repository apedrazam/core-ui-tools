module.exports = {
  core :
  {
    locator :
    {
      'ui/checkbox-input/composer'           : `${__dirname}/checkbox-input`,
      'ui/checkbox-input-group/composer'     : `${__dirname}/checkbox-input-group`,
      'ui/component/composer'                : `${__dirname}/component`,
      'ui/date-input-group/composer'         : `${__dirname}/date-input-group`,
      'ui/fieldset/composer'                 : `${__dirname}/fieldset`,
      'ui/form/composer'                     : `${__dirname}/form`,
      'ui/modal/composer'                    : `${__dirname}/modal`,
      'ui/number-input-group/composer'       : `${__dirname}/number-input-group`,
      'ui/page/composer'                     : `${__dirname}/page`,
      'ui/page-blocker/composer'             : `${__dirname}/page-blocker`,
      'ui/pagination/composer'               : `${__dirname}/pagination`,
      'ui/password-input/composer'           : `${__dirname}/password-input`,
      'ui/password-input-group/composer'     : `${__dirname}/password-input-group`,
      'ui/radio-button-input/composer'       : `${__dirname}/radio-button-input`,
      'ui/radio-button-input-group/composer' : `${__dirname}/radio-button-input-group`,
      'ui/radio-fieldset/composer'           : `${__dirname}/radio-fieldset`,
      'ui/select-input/composer'             : `${__dirname}/select-input`,
      'ui/select-input-group/composer'       : `${__dirname}/select-input-group`,
      'ui/table/composer'                    : `${__dirname}/table`,
      'ui/text-input/composer'               : `${__dirname}/text-input`,
      'ui/text-input-group/composer'         : `${__dirname}/text-input-group`,
      'ui/textarea-input/composer'           : `${__dirname}/textarea-input`,
      'ui/textarea-input-group/composer'     : `${__dirname}/textarea-input-group`,
      'ui/toggeable-fieldset/composer'       : `${__dirname}/toggeable-fieldset`
    }
  },
  ui :
  {
    'component' :
    {
      'checkbox-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/checkbox'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.checkbox.input.group',
            dispatch : true
          }
        ]
      },
      'date-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="date"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.date.input.group',
            dispatch : true
          }
        ]
      },
      'modal' :
      {
        bindings :
        [
          {
            selector       : '[data-action]',
            domEvent       : 'click',
            domEventMapper : 'ui/mapper/modal-action',
            event          : 'dispatch.action',
            dispatch       : true,
            preventDefault : true
          }
        ]
      },
      'number-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="number"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.number.input.group',
            dispatch : true
          }
        ]
      },
      'page-blocker' :
      {
        listeners :
        [
          {
            channel  : 'ui',
            event    : 'toggle.blocker',
            dispatch : true
          }
        ]
      },
      'pagination' :
      {
        bindings :
        [
          {
            selector       : '.pagination__page__number',
            domEvent       : 'click',
            domEventMapper : 'ui/mapper/page-number',
            event          : 'page.clicked',
            dispatch       : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-pages',
            event    : 'prev.pages.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-pages',
            event    : 'next.pages.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__next-page',
            event    : 'next.page.clicked',
            dispatch : true
          },
          {
            domEvent : 'click',
            selector : '.pagination__prev-page',
            event    : 'prev.page.clicked',
            dispatch : true
          }
        ]
      },
      'password-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="password"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.password.input.group',
            dispatch : true
          }
        ]
      },
      'radio-button-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="radio"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.radio.button.input.group',
            dispatch : true
          }
        ]
      },
      'radio-fieldset' :
      {
        bindings :
        [
          {
            selector       : '.radio-fieldset-toggle',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/checkbox',
            event          : 'toggle.fieldset',
            dispatch       : true
          }
        ]
      },
      'select-input-group' :
      {
        bindings :
        [
          {
            selector       : 'select',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/select'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.select.input.group',
            dispatch : true
          }
        ]
      },
      'text-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="text"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.text.input.group',
            dispatch : true
          }
        ]
      },
      'textarea-input-group' :
      {
        bindings :
        [
          {
            selector       : 'textarea',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/input'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.textarea.input.group',
            dispatch : true
          }
        ]
      },
      'toggeable-fieldset' :
      {
        bindings :
        [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/mapper/checkbox',
            event          : 'toggle.fieldset',
            dispatch       : true
          }
        ]
      }
    }
  }
}
