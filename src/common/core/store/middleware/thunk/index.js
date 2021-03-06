/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
class ThunkMiddleware
{
  middleware()
  {
    return store => next => action =>
    {
      if(typeof action === 'function')
        return action(store.dispatch, store.getState)

      return next(action)
    }
  }
}

module.exports = ThunkMiddleware
