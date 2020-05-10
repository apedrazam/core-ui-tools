const AssociativeArray  = require('../../../common/core/data-structure/associative-array')

class UI
{
  constructor(initialViewModel, treeFactory, viewModelToTree, object, locator, configuration, componentFactory)
  {
    this.treeFactory      = treeFactory
    this.viewModelToTree  = viewModelToTree
    this.object           = object
    this.locator          = locator
    this.configuration    = configuration
    this.componentFactory = componentFactory
    this.components       = new AssociativeArray()
    this.tree             = this.createTreeFromContext(initialViewModel)

    const { nodes, edges, root } = this.viewModelToTree.map(initialViewModel)
    this.tree = this.treeFactory.create(nodes, edges, root)

    this[Symbol.for('id')] = `${new URL(window.location.href).pathname.slice(1)}-page`
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.viewModelToTree.map(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  update(viewModel)
  {
    const previousTree = this.tree

    this.tree = this.createTreeFromContext(viewModel)

    const path = this.tree.bfs(this.tree.root)

    path.shift()

    let exclude = []
    for(const componentId of path)
    {
      const
      previousComponentData = previousTree.nodes.getItem(componentId),
      newComponentData      = this.tree.nodes.getItem(componentId)
      // previousComponentContext  = previousTree.getJSON(componentId, false)[previousComponentData.name],
      // newComponentContext       = this.tree.getJSON(componentId, false)[newComponentData.name]

      if(!this.object.isEqual(previousComponentData, newComponentData) && exclude.indexOf(componentId) === -1)
        exclude = [...exclude,  this.onComponentChange(componentId, previousComponentData, newComponentData)]
    }
  }

  onComponentChange(componentId, previousComponentData, newComponentData)
  {
    const componentData = this.getComponentData(componentId)

    let subtreePath = []

    const component = this.getComponent(componentId)

    component.emit('component.changed', {
      previous : previousComponentData,
      current  : newComponentData
    })

    if(componentData.renderOnChange)
    {
      component.render()

      subtreePath = this.tree.bfs(componentId)
      for(const subtreePathId of subtreePath)
      {
        const subtreePathComponent = this.getComponent(subtreePathId)
        subtreePathComponent.bind()
      }
    }

    return subtreePath
  }

  bootstrap()
  {
    const
    root = this.tree.root,
    path = this.tree.bfs(root)

    for(const componentId of path.reverse())
    {
      const
      componentData = this.getComponentData(componentId),
      component     = this.componentFactory.create(componentData)(this)

      this.components.setItem(componentId, component)
    }
  }

  getComponent(componentId)
  {
    return this.components.getItem(componentId)
  }

  setComponentData(component)
  {
    this.tree.addNode(component)
  }

  getComponentData(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }

  getParentComponentData(componentId)
  {
    const parent = this.tree.getParent(componentId)

    if(parent)
      return this.tree.nodes.getItem(parent)
  }

  setComponentContext(context)
  {
    const { nodes, edges } = this.viewModelToTree.map(context)

    for(const node of nodes)
      this.tree.addNode(node)

    for(const edge of edges)
      this.tree.addEdge(edge)

    this.onComponentChange(context.id)
  }

  getComponentContext(componentId)
  {
    const
    { name } = this.getComponentData(componentId),
    json     = this.tree.getJSON(componentId, false)

    return json[name]
  }
}

module.exports = UI
