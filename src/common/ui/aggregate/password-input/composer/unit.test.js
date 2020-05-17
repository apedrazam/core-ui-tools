describe('src/common/ui/composer/password-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  passwordInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/bootstrap' },
      { name: 'common/core/object' },
      { name: 'common/core/schema' },
      { name: 'node/core/schema/bootstrap' },
      { name: 'common/core/data-structure' },
      { name: 'common/ui/schema' },
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/store' },
      { name: 'common/view/handlebars' },
      { name: 'common/core/listener' },
      { name: 'common/infrastructure/bus' },
      { name: 'common/core/normalizer' },
      { name: 'common/core/reducer' },
      { name: 'common/core/page' },
      { name: 'common/core/data-structure' },
      { name: 'common/infrastructure/controller' },
      { name: 'common/ui/aggregate/test' },
      { name: 'common/ui/aggregate/component' },
      { name: 'common/ui/aggregate/password-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer              = core.locate('core/schema/composer')
        passwordInputComposer = core.locate('ui/password-input/composer')
        done()
      })
    })
  })

  it('Can compose a password input', () =>
  {
    const passwordInput  = passwordInputComposer.compose({
      attribute : 'password',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Password input title',
      value     : 'value',
      name      : 'password',
      id        : 'password-input'
    })

    expect(() =>
    {
      composer.compose('entity/password-input', passwordInput)
    }).to.not.throw()
  })
})
