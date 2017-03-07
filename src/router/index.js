import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/'
import { lazyLoading, init } from '../common/common'

Vue.use(Router)

//let _menuitems = Store.getters.menuitems

// get menuItems[0].name || menuItems[0].children[0].name
//let _indexName = _menuitems[0].children ? _menuitems[0].children[0].name : _menuitems[0].name

// common.js => init.index 如果为空（字符串类型） 则不指定初始菜单默认打开项，系统将选择导入的menuItems[0] 为默认项
//Store.dispatch('setDefaultItem', init.indexRoute === '' ? _indexName : init.indexRoute)

// parent obj
//var _parentObj = Array.prototype.find.call(Store.getters.menuitems, (e) => {
//	let _has = false
//  if (e.children) {
//  	let _a = Array.prototype.find.call(e.children, (sub) => {
//  		return sub.name === Store.getters.defaultItem
//  	})
//  	if (_a) {
//  		_has = true
//  	}
//  }
//return _has
//})

const router = new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
//linkActiveClass: 'is-active',
  routes: [
    {
      name: 'index',
      path: '/index',
      component: lazyLoading('Index')
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      name: 'product',
      path: '/product',
      component: lazyLoading('Product')
    },
    {
      name: 'building',
      path: '/building',
      component: lazyLoading('Building')
    },
    {
      name: 'news',
      path: '/news',
      component: lazyLoading('News')
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: lazyLoading('Detail')
    },
    {
      path: '*',
      redirect: '/building'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router

// Menu should have 2 levels.
//function generateRoutesFromMenu (menu = [], routes = []) {
//for (let i = 0, l = menu.length; i < l; i++) {
//  let item = menu[i]
//  if (item.path) {
//    routes.push(item)
//  }
//  if (!item.component) {
//    generateRoutesFromMenu(item.children, routes)
//  }
//}
//return routes
//}

// require Authention
//function requireAuth (to, from, next) {
//	let isAuth = false;
//if (isAuth) {
//  next({ name: 'signin' });
//} else {
//	if (to.path === '/') {
//		next({ name: 'home' });
//	} else {
//		next();
//	}
//}
//}

// Authention global
router.beforeEach((to, from, next) => {
//	if (to.name === 'signin') {
  document.body.scrollTop=0;
		next()
//	} else {
//		if (init.skipLogin) {
//			if (to.name === 'index' || to.name === (_parentObj ? _parentObj.name : 'index')) {
//				next({name: Store.getters.defaultItem})
//			} else {
//				next()
//			}
//		} else {
//			next({name: 'signin'})
//		}
//	}
})
