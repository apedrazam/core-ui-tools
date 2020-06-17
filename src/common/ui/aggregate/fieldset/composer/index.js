const ComponentComposer = require('common/ui/aggregate/component/composer')

/**
 * Fieldset composer
 * @class
 */
class FieldsetComposer extends ComponentComposer
{
  compose({
    renderonchange,
    template,
    disabled,
    parentId,
    classes,
    formId,
    schema,
    legend,
    name,
    id,
    ...args
  })
  {
    const fieldset = super.compose({
      renderonchange,
      disabled,
      parentId,
      template,
      classes,
      schema,
      formId,
      legend,
      name,
      id,
      ...args
    })

    return fieldset
  }
}

module.exports = FieldsetComposer
