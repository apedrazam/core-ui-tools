describe('src/common/domain/schema/composer/toggable-fieldset', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('../../../../../node/core/factory')

  let
  core,
  composer,
  toggableFieldsetComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'core/bootstrap',                      path: 'common/core/bootstrap' },
      { name: 'core/object',                         path: 'common/core/object' },
      { name: 'core/schema',                         path: 'common/core/schema' },
      { name: 'domain/schema',                       path: 'common/domain/schema' },
      { name: 'core/schema/bootstrap',               path: 'node/core/schema/bootstrap' },
      { name: 'core/data-structure',                 path: 'common/core/data-structure' },
      { name: 'core/component/composer',             path: 'common/domain/schema/composer/component' },
      { name: 'core/component/checkbox-input',       path: 'common/domain/schema/composer/checkbox-input' },
      { name: 'core/component/checkbox-input-group', path: 'common/domain/schema/composer/checkbox-input-group' },
      { name: 'core/component/toggable-fieldset',    path: 'common/domain/schema/composer/toggable-fieldset' }
    ])

    core.load().then(() =>
    {
      core.locate('core/bootstrap').bootstrap().then(() =>
      {
        composer         = core.locate('core/schema/composer')
        toggableFieldsetComposer = core.locate('core/toggable-fieldset/composer')
        done()
      })
    })
  })

  it('Can compose a fieldset', () =>
  {
    const { nodes: [toggeableFieldset] } = toggableFieldsetComposer.compose({
      parentId : null,
      template : 'my-fieldset',
      formId   : 'form-id',
      legend   : 'Fieldset',
      name     : 'fieldset',
      id       : 'fieldset'
    })

    expect(() =>
    {
      composer.compose('entity/toggable-fieldset', toggeableFieldset)
    }).to.not.throw()
  })
})
