describe('src/common/ui/composer/fieldset', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  fieldsetComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/fieldset/composer' }
    ])

    core.load().then(() =>
    {
      composer         = core.locate('core/schema/composer')
      fieldsetComposer = core.locate('ui/fieldset/composer')
      done()
    })
  })

  it('Can compose a fieldset', () =>
  {
    const fieldset = fieldsetComposer.compose({
      template : 'my-fieldset',
      formId   : 'form-id',
      legend   : 'Fieldset',
      name     : 'fieldset',
      id       : 'fieldset'
    })

    expect(() =>
    {
      composer.compose('entity/fieldset', fieldset)
    }).to.not.throw()
  })
})
