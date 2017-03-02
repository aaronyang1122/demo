const lazyLoading = (name, index=false) => {
	return resolve => {
	  require.ensure([], () => {
	    resolve(require('../components/views/' + name + (index ? '/index' : '') + '.vue'))
	  })
	}
}

const init = {
	// type: String ep: route's name
	indexRoute: '',
	skipLogin: true // if value = true is require system skip login authention 
}

const pointerMenuObj = (menu, value) => {
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === value) {
      return menu[i]
    } else {
      if (menu[i].hasOwnProperty('children')) {
        return pointerMenuObj(menu[i].children, value)
      }
    }
  }
}

export {
	lazyLoading,
	init,
	pointerMenuObj
}
