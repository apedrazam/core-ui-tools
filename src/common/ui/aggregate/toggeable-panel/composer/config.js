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
        bindings : [
          {
            selector       : 'input[type="checkbox"]',
            domEvent       : 'change',
            domEventMapper : 'ui/checkbox-input/mapper/input-data-mapper',
            event          : 'toggle.panel'
          }
        ],
        listeners : [
          {
            event   : 'toggle.panel',
            locator : 'ui/toggeable-panel/listener/on-toggle-panel'
          }
        ]
      }
    }
  }
}