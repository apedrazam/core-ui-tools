describe('src/common/domain/schema/composer/text-input-group', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  textInputGroupComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                  path: 'common/core/bootstrap' },
      { name: 'core/object',                     path: 'common/core/object' },
      { name: 'core/schema',                     path: 'common/core/schema' },
      { name: 'domain/schema',                   path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',           path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',             path: 'common/core/data-structure' },
      { name: 'core/component/composer',         path: 'common/domain/schema/composer/component' },
      { name: 'core/component/text-input',       path: 'common/domain/schema/composer/text-input' },
      { name: 'core/component/text-input-group', path: 'common/domain/schema/composer/text-input-group' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer               = core.locate('core/schema/composer')
        textInputGroupComposer = core.locate('core/text-input-group/composer')
        done()
      })
    })
  })

  it('Can compose a text input group', () =>
  {
    const
    textInputGroup = textInputGroupComposer.compose({
      attribute : 'text',
      disabled  : true,
      parentId  : null,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : 'My text value',
      name      : 'text',
      id        : 'text-input-group'
    })

    expect(() =>
    {
      composer.compose('entity/text-input-group', textInputGroup)
    }).to.not.throw()
  })
})