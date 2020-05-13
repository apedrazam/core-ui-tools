describe('src/common/domain/schema/composer/checkbox-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  checkboxInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                path: 'common/core/bootstrap' },
      { name: 'core/object',                   path: 'common/core/object' },
      { name: 'core/schema',                   path: 'common/core/schema' },
      { name: 'domain/schema',                 path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',         path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',           path: 'common/core/data-structure' },
      { name: 'core/component/composer',       path: 'common/domain/schema/composer/component' },
      { name: 'core/component/checkbox-input', path: 'common/domain/schema/composer/checkbox-input' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer              = core.locate('core/schema/composer')
        checkboxInputComposer = core.locate('core/checkbox-input/composer')
        done()
      })
    })
  })

  it('Can compose a checkbox input', () =>
  {
    const checkboxInput = checkboxInputComposer.compose({
      attribute : 'checkbox',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Checkbox input title',
      value     : true,
      name      : 'checkbox',
      id        : 'checkbox-input'
    })

    expect(() =>
    {
      composer.compose('entity/checkbox-input', checkboxInput)
    }).to.not.throw()
  })
})
