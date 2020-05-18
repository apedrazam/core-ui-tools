/**
 * @implements {common/core/reducer/action}
 */
class ValidateTextInputAction
{
  // TODO add dictionary
  constructor(store)
  {
    this.store = store
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    textInputGroup = this.store.getEntityContext(schema, emitter),
    { input: { required, pattern, title }, label } = textInputGroup

    let
    message = null,
    code    = null

    if(required && (!value || value.trim() === ''))
    {
      message = `${label} is required`
      code    = 'E_INPUT_REQUIRED'
    }
    else if(pattern)
    {
      const
      regexp = new RegExp(pattern),
      match  = regexp.exec(value)

      if(!match)
      {
        message = title ? title : `Format invalid`
        code    = 'E_INPUT_FORMAT_INVALID'
      }
    }

    const entities = this.store.normalizeEntityContext(schema, {
      ...textInputGroup,
      value,
      error : message ? { message, code } : undefined
    })

    return this.store.merge(entities)
  }
}

module.exports = ValidateTextInputAction
