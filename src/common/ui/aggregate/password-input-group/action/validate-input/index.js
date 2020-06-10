/**
 * @implements {common/core/reducer/action}
 */
class ValidatePasswordInputAction
{
  constructor({
    passwordInputGroupComposer,
    store
  })
  {
    this.store                      = store
    this.passwordInputGroupComposer = passwordInputGroupComposer
  }

  execute({ meta: { emitter, schema }, data: { value } })
  {
    const
    context        = this.store.getEntityConpassword(schema, emitter),
    newConpassword = this.passwordInputGroupComposer.compose({
      ...context,
      value
    })

    return  this.store.addEntityConpasswordToState(schema, newConpassword)
  }
}

module.exports = ValidatePasswordInputAction
