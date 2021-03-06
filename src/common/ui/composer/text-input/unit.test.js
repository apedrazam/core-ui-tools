describe('src/common/ui/composer/text-input', () =>
{
  const
  expect      = require('chai').expect,
  CoreFactory = require('node/core/factory')

  let
  core,
  composer,
  textInputComposer

  before((done) =>
  {
    const coreFactory = new CoreFactory()

    core        = coreFactory.create([
      { name: 'common/core/schema' },
      { name: 'common/ui/aggregate/component/composer' },
      { name: 'common/ui/aggregate/text-input/composer' }
    ])

    core.load().then(() =>
    {
      composer          = core.locate('core/schema/composer')
      textInputComposer = core.locate('ui/text-input/composer')
      done()
    })
  })

  it('Can compose a text input', () =>
  {
    const textInput = textInputComposer.compose({
      attribute : 'text',
      disabled  : true,
      readonly  : true,
      required  : true,
      title     : 'Text input title',
      value     : 'value',
      name      : 'text',
      id        : 'text-input'
    })

    expect(() =>
    {
      composer.compose('entity/text-input', textInput)
    }).to.not.throw()
  })
})
