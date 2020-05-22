/**
 * @implements {superhero/core/eventbus/observer}
 */
class CloseModalAction
{
  constructor(store)
  {
    this.store = store
  }

  execute(action, state)
  {
    const
    { meta: { emitter, schema } } = action,
    context = this.store.getEntityContext(schema, emitter)

    return this.store.addEntityContextToState(schema, { ...context, isOpen: false })
  }
}

module.exports = CloseModalAction
