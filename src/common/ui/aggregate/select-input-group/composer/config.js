module.exports = {
  core :
  {
    locator :
    {
      'ui/select-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'select-input-group' :
      {
        bindings :
        {
          'validate.text-input.on.change' :
          {
            selector       : 'select',
            domEvent       : 'change',
            domEventMapper : 'ui/select-input/mapper/selected-options-to-data',
            event          : 'validate.select.input',
            dispatch       : true
          }
        }
      }
    }
  }
}
