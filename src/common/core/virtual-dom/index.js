class VirtualDOM
{
  constructor({
    controllerRepository,
    initialViewModel,
    componentFactory,
    eventComposer,
    treeFactory,
    jsonToTree,
    composer,
    deepfind,
    channel,
    object,
    schema,
    store,
    id
  })
  {
    this.initialViewModel       = initialViewModel
    this.componentFactory       = componentFactory
    this.eventComposer          = eventComposer
    this.treeFactory            = treeFactory
    this.controllers            = controllerRepository
    this.jsonToTree             = jsonToTree
    this.composer               = composer
    this.deepfind               = deepfind
    this.channel                = channel
    this.object                 = object
    this.store                  = store

    this[Symbol.for('schema')]  = schema
    this[Symbol.for('id')]      = id
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.jsonToTree.convert(context)
    return this.treeFactory.create(this[Symbol.for('id')], nodes, edges, root)
  }

  update(previous, current)
  {
    const previousTree = this.createTreeFromContext(previous)
    this.tree          = this.createTreeFromContext(current)

    const
    path = this.tree.bfs(this.tree.root)
    // page = path.shift()

    path.shift()

    let exclude = []
    for(const componentId of path)
    {
      const
      previous = previousTree.nodes.getItem(componentId),
      current  = this.tree.nodes.getItem(componentId)

      if(!this.object.isEqual(previous, current) && exclude.indexOf(componentId) === -1)
        exclude = [...exclude,  ...this.onComponentChange(componentId, previous, current)]
    }
  }

  onComponentChange(componentId, previous, current)
  {
    const data = this.getData(componentId)

    let subtreePath = []

    const
    component = this.getController(componentId)

    component.emit('component.changed', { previous, current })

    if(data.renderonchange)
    {
      component.render()

      subtreePath = this.tree.bfs(componentId)

      for(const componentId of subtreePath.reverse())
      {
        const subtreeComponent = this.getController(componentId)
        subtreeComponent.bind()
      }
    }

    return subtreePath
  }

  bootstrap()
  {
    this.tree = this.createTreeFromContext(this.initialViewModel)

    const
    root = this.tree.root,
    path = this.tree.bfs(root)

    if(path)
    {
      for(const componentId of path.reverse())
      {
        const
        data      = this.getData(componentId),
        component = this.componentFactory.create(data)(this)

        this.controllers.setController(componentId, component)
      }
    }
  }

  getController(componentId)
  {
    let controller = this.controllers.getController(componentId)

    if(!controller)
    {
      const data = this.getData(componentId)

      controller = this.componentFactory.create(data)(this)

      this.controllers.setController(componentId, controller)
    }


    return controller
  }

  setData(component)
  {
    this.tree.addNode(component)
  }

  getData(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }

  setContext(context)
  {
    const { nodes, edges } = this.jsonToTree.convert(context)

    for(const node of nodes)
    {
      this.tree.edges.removeItem(node.id)
      this.tree.addNode(node)
    }

    for(const edge of edges)
      this.tree.addEdge(edge)
  }

  getContext(componentId)
  {
    const { schema } = this.getData(componentId)
    return this.store.getEntityContext(schema, componentId)
  }

  emit(event)
  {
    this.channel.emit(event)
  }
}

module.exports = VirtualDOM
