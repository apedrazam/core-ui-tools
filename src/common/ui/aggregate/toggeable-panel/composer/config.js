module.exports = {
  core :
  {
    locator :
    {
      'ui/toggeable-panel/composer' : __dirname
    }
  },
  ui :
  {
    'component' :
    {
      'toggeable-panel' :
      {
        bindings :
        {
          'toggle.panel.on.change' :
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'toggle.panel',
            dispatch       : true
          }
        }
      }
    }
  }
}
