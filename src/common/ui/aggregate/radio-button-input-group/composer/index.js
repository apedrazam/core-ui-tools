const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * RadioButtonInputGroup composer
 * @class
 */
class RadioButtonInputGroupComposer extends ComponentComposer
{
  validate(required, value, label)
  {
    if(required && !value)
      return `${label} is required`
  }

  compose({
    renderonchange,
    attribute,
    disabled,
    optional,
    parentId,
    readonly,
    required,
    buttons,
    classes,
    options,
    label,
    title,
    value,
    name,
    big,
    id
  })
  {
    const
    radioButtonInputGroup = super.compose({
      schema   : 'entity/radio-button-input-group',
      template : 'radio-button-input-group',
      error    : process.env.PLATFORM === 'browser' ? this.validate(required, value, label) : undefined,
      renderonchange,
      attribute,
      disabled,
      optional,
      parentId,
      readonly,
      required,
      buttons,
      classes,
      options,
      label,
      title,
      value,
      name,
      big,
      id
    })

    return radioButtonInputGroup
  }
}

module.exports = RadioButtonInputGroupComposer
