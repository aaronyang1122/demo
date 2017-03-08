<template>
  <section class="newslist">
    <div class="gray-bg">
      <div class="container newscontainer">
        <div class="row">
          <div class="col-sm-9 left">
            <section class="item" v-for="(item, index) in news" v-if="index<1">
              <h1>{{ item.title[$route.query['language']] }}</h1>
              <i v-if="$route.query['language']==='en'">news  |  Damaiv  |  {{ item.createtime }} </i>
              <i v-else>新闻  |  大麦网  |  {{ item.createtime }} </i>
              <p class='newspic'>
                <router-link :to="{name: 'detail', params: { id: item._id }}">
                  <img :src="item.img" alt="" />
                </router-link>
              </p>
              <p>
                <router-link :to="{name: 'detail', params: { id: item._id }}" class="more">
                  {{ $route.query['language']==='ch' ? '更多...' : 'more...' }}
                </router-link>
              </p>
            </section>

            <section class="item" v-for="(item, index) in news" v-if="index>0&&showMore">
              <h1>{{ item.title[$route.query['language']] }}</h1>
              <i v-if="$route.query['language']==='en'">news  |  Damaiv  |  {{ item.createtime }} </i>
              <i v-else>新闻  |  大麦网  |  {{ item.createtime }} </i>
              <p class='newspic'>
                <router-link :to="{name: 'detail', params: { id: item._id }}">
                  <img :src="item.img" alt="" />
                </router-link>
              </p>
              <p>
                <router-link :to="{name: 'detail', params: { id: item._id }}" class="more">
                  {{ $route.query['language']==='ch' ? '更多...' : 'more...' }}
                </router-link>
              </p>
            </section>

            <a href="#" @click.prevent="moreNews" v-if="news.length>1 && !showMore" class="load-more">{{ $route.query['language']==='ch' ? '加载更多新闻' : 'Show all news' }}</a>

          </div>
          <div class="col-sm-3 left">
            <div class="aside">
              <h1 v-if="$route.query['language']==='ch'">热门新闻推荐</h1>
              <h1 v-else>Hot news</h1>
              <ul class="hot-news">
              	<li v-for="(item, index) in news" v-if="index<5">
                  <router-link :to="{name: 'detail', params: { id: item._id }}">
                    <p :alt="item.title[$route.query['language']]">
                      <img :src="item.img" />
                    </p>
                  </router-link>
              	</li>
              </ul>
            </div>
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
        news: [],
        showMore: false
      }
    },
    methods: {
      moreNews () {
          this.showMore = true
      }
    },
    created () {
      // get news list
      this.$http.get('/api/news/list')
        .then(
          (res) => {
            this.news = res.body.content
          },
          () => {
            this.news = []
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
	  }
	  .detail {
	    /*display: none;*/
	  }
	}
  .load-more {
    color: #FFF;
    font-size: 14px;
    display: block;
    background: #eead4d;
    border: 1px solid #edecec;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
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
