const Page = require('.')

class PageLocator
{
  constructor(locator)
  {
    this.locator = locator
  }
  locate()
  {
    const
    configuration        = this.locator.locate('core/configuration').find('core.view-model'),
    id                   = configuration['id'],
    initialViewModel     = configuration['state'],
    schema               = configuration['schema'],
    controllerRepository = this.locator.locate('infrastructure/controller/repository'),
    componentFactory     = this.locator.locate('ui/component/controller/factory'),
    treeFactory          = this.locator.locate('data-structure/tree'),
    jsonToTree           = this.locator.locate('data-structure/json-to-tree'),
    composer             = this.locator.locate(`ui/${id}/composer`),
    channel              = this.locator.locate('infrastructure/bus').createChannel('page'),
    object               = this.locator.locate('core/object')

    return new Page({
      controllerRepository,
      initialViewModel,
      componentFactory,
      treeFactory,
      jsonToTree,
      composer,
      channel,
      object,
      schema,
      id
    })
  }
}

module.exports = PageLocator
