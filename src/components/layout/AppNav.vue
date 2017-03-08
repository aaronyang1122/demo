<template>
    <div class="navbar-wrapper">
    <div class="container">
        <nav class="navbar navbar-inverse navbar-static-top" role="navigation">

            <div class="navbar-header">
              <button type="button" id="btnClose" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <!--<a class="navbar-brand" href="#"><img src="../../assets/image/logo.png"></a>-->
              <div class="logo"><img src="../../assets/image/logo.png"></div>
            </div>

            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><router-link :to="{name: 'index'}" v-current="$route.name" name="index">{{ language.nav.home }}</router-link></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" v-current="$route.name" name="product">{{ language.nav.product }}<span class="caret"></span></a>
                  <!--<router-link :to="{name: 'product'}" v-current="$route.name" name="product">{{ language.nav.product }}</router-link>-->
                  <ul class="dropdown-menu" role="menu">
                    <template v-for="(item, index) in productList">
                      <li v-uncolsp="$route.name"><router-link :to="{name: 'product', params: { id: item._id }}">{{ item.name[$route.query['language']] }}</router-link></li>
                      <li class="divider"></li>
                    </template>
                  </ul>
                </li>
                <li><router-link :to="{name: 'news'}" v-current="$route.name" name="news&detail">{{ language.nav.news }}</router-link></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" v-current="$route.name" name="blog">{{ language.nav.blog }}<span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu">
                    <li v-uncolsp="$route.name"><router-link :to="{name: 'building'}">{{ language.nav.community }}</router-link></li>
                    <li class="divider"></li>
                    <li v-uncolsp="$route.name"><router-link :to="{name: 'building'}">{{ language.nav.forum }}</router-link></li>
                  </ul>
                </li>
                <li><router-link :to="{name: 'building'}" v-current="$route.name" name="yun">{{ language.nav.cloud }}</router-link></li>
                <li><router-link :to="{name: 'building'}" v-current="$route.name" name="shop">{{ language.nav.shop }}</router-link></li>
                <li><router-link :to="{name: 'building'}" v-current="$route.name" name="helper">{{ language.nav.helper }}</router-link></li>
                <li @click="changeLanguage">
                  <template v-if="currentLanguage === 'en'">
                    <span class="language">English</span>
                  </template>
                  <template v-else>
                    <span class="language">中文</span>
                  </template>
                </li>

              </ul>
            </div>
        </nav>

    </div>
    </div>
</template>

<script type="text/javascript">
  import { ch, en } from '../../language/'

	export default {
	  data () {
	    return {
        productList: []
	    }
	  },
	  computed: {
	    btn () {
	      return document.getElementById('btnClose')
	    },
	    language () {
	      return this.$route.query['language'] === 'en' ? en : ch
	    },
	    currentLanguage () {
	      return this.$route.query['language'] === 'en' ? 'ch' : 'en'
	    }
	  },
	  methods: {
	    changeLanguage () {
        if (!window.matchMedia("(min-width: 768px)").matches) {
          this.btn.click()
        }
	      if (this.$route.query['language'] === 'en') {
	        this.$router.push({query: { language: 'ch' }})
	      } else {
	        this.$router.push({query: { language: 'en' }})
	      }
	    }
	  },
    directives: {
      uncolsp: {
        bind (el, binding, vnode) {
          el.addEventListener('click', function () {
            if (!window.matchMedia("(min-width: 768px)").matches && el.getAttribute('class')!=='dropdown-toggle') {
              vnode.context.btn.click()
            }
          })
        }
      },
      current: {
        bind (el, binding, vnode) {
          el.addEventListener('click', function () {
            if (!window.matchMedia("(min-width: 768px)").matches && el.getAttribute('class')!=='dropdown-toggle') {
              vnode.context.btn.click()
            }
          })
        },
        update (el, binding, vnode) {
          var _current = new RegExp(binding.value)
          if (_current.test(el.name)) {
            el.parentNode.className = 'active'
          } else {
            el.parentNode.className = ''
          }
        }
      }
    },
    watch: {
      '$route' (val, oldVal) {
        if (oldVal.query.language === 'en' && val.query.language !== 'ch') {
          this.$router.push({
            name: val.name,
            query: {language: 'en'}
          })
        } else if (oldVal.query.language === 'ch' && val.query.language !== 'en') {
          this.$router.push({
            name: val.name,
            query: {language: 'ch'}
          })
        }
      }
    },
    created () {
      this.$router.push({query: { language: 'ch' }})

      this.$http.get('/api/product/list')
        .then(
          (res) => {
            this.productList = res.body.content
          },
          () => {
            this.productList = []
          }
        )
    }
	}
</script>

<style>
.language{
  margin: 12px 0;
  padding-left: 12px;
  display: block;
  color: #eee;
  cursor: pointer;
  border-left: 1px solid #666;
}
  @media (min-width: 768px) {
    .navbar-nav {
        float: right;
        margin: 0;
    }
    .navbar-wrapper .navbar {
      border-radius: 0;
    }
    .navbar-wrapper {
      margin-top: 0;
    }
  }
.navbar-inverse {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin-bottom: 0;
}
.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:hover, .navbar-inverse .navbar-nav>.active>a:focus {
    color: #fff;
    background-color: #f8b62c;
}
.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {
    border: 0;
}
.navbar-wrapper{
  background-color: rgba(0, 0, 0, 0.7);
}
.logo {
  height: 30px;
  width: 100px;
  padding: 12px;
}
.logo img {
  width: 100%;
  height: auto;
}
</style>
