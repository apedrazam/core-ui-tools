module.exports = {
  core :
  {
    locator :
    {
      'ui/text-input-group/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'text-input-group' :
      {
        bindings :
        [
          {
            selector       : 'input[type="text"]',
            domEvent       : 'change',
            domEventMapper : 'ui/input/mapper/input-data-mapper'
          }
        ],
        listeners :
        [
          {
            event    : 'change',
            map      : 'validate.text.input',
            dispatch : true
          }
        ]
      }
    }
  }
}
