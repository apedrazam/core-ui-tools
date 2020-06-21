class CoreHandlebarsHelperSwitch
{
  create()
  {
    return function(value, options)
    {
      this.switch_value = value
      this.switch_break = false
      return options.fn(this)
    }
  }
}

module.exports = CoreHandlebarsHelperSwitch
