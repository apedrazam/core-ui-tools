const ComponentComposer = require('common/ui/composer/component')

/**
 * Pagination composer
 * @class
 */
class PaginationComposer extends ComponentComposer
{
  getTotalPages(totalItems, pageSize)
  {
    return Math.max(1, Math.ceil(totalItems / pageSize))
  }

  getLeftPages(pages, selected, offset)
  {
    let rightOffset = offset

    for(let leftOffset = offset; leftOffset > 0; leftOffset--)
    {
      const number = selected - leftOffset
      if(number <= 1)
        rightOffset += 1
      else
        pages.push(number)
    }

    return rightOffset
  }

  getRightPages(pages, selected, offset, totalPages)
  {
    let number = selected

    for(let r = 0; (r <= offset && number < totalPages); r++)
    {
      number = selected + r
      if(number < totalPages && number > 1)
        pages.push(number)
    }
  }

  completePages(pages, offset)
  {
    const missingPages =  1 + (2 * offset) - pages.length

    for(let l = 0; l < missingPages; l++)
    {
      const number = pages[0].pageNumber - 1
      if(number > 1)
        pages.unshift(number)
    }
  }

  getPages(offset, selected, totalPages)
  {
    let pages = []

    const rightOffset = this.getLeftPages(pages, selected, offset, totalPages)

    this.getRightPages(pages, selected, rightOffset, totalPages)

    if(pages.length > 0)
      this.completePages(pages, offset)

    return pages
  }

  hasLeftOverflow(pages)
  {
    let hasOverflow = false

    if(pages.length)
    {
      const
      pageNumber          = pages[0],
      previousPageNumber  = pageNumber - 1

      hasOverflow         = previousPageNumber > 1
    }

    return hasOverflow
  }

  hasRightOverflow(pages, totalPages)
  {
    let hasOverflow = false

    if(pages.length)
    {
      const
      pageNumber     = pages[pages.length - 1],
      nextPageNumber = pageNumber + 1

      hasOverflow    = nextPageNumber < totalPages
    }

    return hasOverflow
  }

  compose({
    renderonchange,
    totalElements,
    selectedPage,
    parentId,
    classes,
    offset,
    limit,
    name,
    id
  })
  {
    const
    totalPages    = this.getTotalPages(totalElements, limit),
    pages         = this.getPages(offset, selectedPage, totalPages),
    leftOverflow  = this.hasLeftOverflow(pages),
    rightOverflow = this.hasRightOverflow(pages, totalPages),
    lastPage      = totalPages > 1 ? totalPages : 1

    return super.compose({
      schema   : 'entity/pagination',
      template : 'pagination',
      renderonchange,
      rightOverflow,
      totalElements,
      leftOverflow,
      selectedPage,
      totalPages,
      lastPage,
      parentId,
      classes,
      offset,
      limit,
      pages,
      name,
      id
    })
  }
}

module.exports = PaginationComposer
