<template>
  <section class="newslist">
    <div class="gray-bg">
      <div class="container newscontainer">
        <div class="row">
          <div class="col-sm-12 left">
            <router-link :to="{name: 'news'}" class="more">
              {{ $route.query['language']==='ch' ? '< 返回' : '< back' }}
            </router-link>
            <section class="item" v-if="detail.hasOwnProperty('title')">
              <h1>{{ detail.title[$route.query['language']] }}</h1>
              <i v-if="$route.query['language']==='en'">news  |  Damaiv  |  {{ detail.createtime }} </i>
              <i v-else>新闻  |  大麦网  |  {{ detail.createtime }} </i>
              <p class='newspic'><img :src="detail.img" alt="" /></p>
              <div class="detail" v-html="detail.content[$route.query['language']]"></div>
            </section>
            <router-link :to="{name: 'news'}" class="more">
              {{ $route.query['language']==='ch' ? '< 返回' : '< back' }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script type="text/javascript">
  export default {
    data () {
      return {
        detail: {}
      }
    },
    created () {
      // get news list
      this.$http.get(
          '/api/news/detail',
          {
            params: {
                id: this.$route.params.id
            }
          }
        )
        .then(
          (res) => {
              this.detail = res.body
          },
          () => {
            this.detail = {}
          }
        )
    }
  }
</script>


<style lang="less">
  .gray-bg {
    padding-top: 50px;
    background-color: #f5f5f5;
    overflow: hidden;
  }
	.newscontainer {
	  margin-top: 20px;
	}
	.item {
	  background-color: #fff;
	  overflow: hidden;
	  padding: 20px;
	  border: 1px solid #edecec;
	  margin-bottom: 20px;
	  h1 {
	    font-size: 24px;
	    margin: 0;
	    padding: 20px 0;
	  }
	  h6 {
	    font-weight: bold;
	    font-size: 14px;
	    margin: 20px 0;
	  }
	  p {
	    line-height: 24px;
	  }
	  i {
	    font-style: normal;
	    color: #666;
	  }
	  .newspic {
	    margin: 10px 0;
	    img {
	      width: 100%;
	    }
	  }
	  .more {
	    color: #eead4d;
	    cursor: pointer;
      padding: 10px 0;
      font-size: 14px;
	  }
	  .detail {
	    /*display: none;*/
	  }
	}
	.aside {
	  display: none;
	  border: 1px solid #edecec;
	  background-color: #fff;
	  h1 {
	    font-size: 14px;
	    margin: 0;
	    padding: 0 0 0 1rem;
	    line-height: 50px;
	    background-color: #f0f0f0;
	  }
	  ul {
	    margin: 0;
	    padding: 0;
	    list-style: none;
	    li {
	      padding: 10px 10px 0 10px;
	      p {
	        padding: 0;
	        margin: 0;
	        position: relative;
	        img {
            width: 100%;
          }
          &:before {
            content: attr(alt);
            background-color: rgba(0,0,0,0.5);
            color: #FFF;
            position: absolute;
            bottom: 0;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
            line-height: 30px;
            text-indent: 1rem;
          }
	      }
	      &:last-child {
          padding-bottom: 10px;
	      }
	    }
	  }
	}


	@media (min-width: 768px) {
    .aside {
      display: block;
    }
  }

</style>
