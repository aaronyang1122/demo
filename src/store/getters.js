const menuitems = state => state.menu.items

const defaultItem = state => state.menu.default

const componententry = state => {
  return state.menu.items.filter(c => c.meta && c.meta.label === 'Components')[0]
}

export {
  menuitems,
  componententry,
  defaultItem
}
