<template>
	<section class="index">
		<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" v-for="(item, index) in sliders" data-slide-to="index" :class="{ 'active': index===0 }" ></li>
      </ol>
      <div class="carousel-inner" role="listbox">

        <!--<div class="item">
          <div class="container">
            <div class="carousel-caption pic-2">
              <p class="logo-2">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAcCAMAAAD/XGWDAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAABj1BMVEUAAABYVVRYVVQjGBVYVVTokhNYVVQjGBVYVVQjGBUjGBVYVVRYVVRYVVRYVVRYVVRYVVQjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVYVVQjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVYVVTokhPokhPokhPokhMjGBUjGBVYVVQjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVYVVQjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVYVVQjGBVkZGSrZHgqAAAAgnRSTlMA8KBgQMAQcIDAIDAgwOBg0P2ACl2dVhrIsE208WkI0++IOf73UL6pSwYRxXAMC+1MA/OBBDv04DcsHDqScuPSqr8XduzcqHffkLfC+TKMdJB80JwdEFMf4bC4zzQJj7GUkW5ORfDJUkgV6SgBInpazufRlby2LQYWHkCsk+uicd516Lcq7AAAAsZJREFUWMPNmGV72zAUhWVPs9XaTpwlZUhx0HaFQQftunXcMTMzM/Ok/fDJEINsxUqjejtfkih6bl6dXN0rGYD/TVDRUka1UYRQ0YyNlSsHD5cIq+GtkSlfvn4n6dL9GXPDhK8pUWgLoySyij1ZMBjbsms/OdB2SGfVtzGYMvOWLHz7qafpzkV/zmSfztcFUaMxTlhtKDhQ0R/r6CQ9QxmxbpPBj7lkh+PpRJJZWYIQLikB9c5tm9qzQh0nt/LJaNNxsxDPjQLGXZ75Whf91kns/t292zNjzR87D3IzOswBVxMY20HC2Bir9GWQdGfHOjqen9EWYzU1Otx+Bs0UAPaO7BEIduZyPtCIAms4Sgm0+BroEgDYR3YIBLva0/Dvj7U3zqwpTmrQFLFi5USNVUQKvVgViXal2jDAKnJuWUZ7ORJabSIEWacH2kSivRD6Pxjo1uUZ7e5GlTOF5rQNANksEu5xb2d55aGLfmMx/MKWIlrzaMMka4TiPSy9Glpx6AL2W7jFs9pfVg16w7rVjNauj05/9JpcamF188a9Z/Kgi0EHhxyrDb+Gi0KD65WzR1jo8QHy4Lk06MBo12qUwqz4/4BgenA083LqSWuj0H8YhbUNq8iTlXJscvep1xvFNiJfT++3SHLawnGxVmt20M/FSl4d6eSaFGjIMDPHJpdZMbz3i9UmoTvISSnQ1GgLhVKYY1OUmbbxD01SkxMyoJ02aCSaYzqz4IGpLvQpGdDxA4e360bDjzFmwaNpHU2S0xKg4+cN32oruqQos9gloI7ukmkJ0KzRntUwcjUwYt+KXLf4Kr9Z6G8emkkGZh0qe5kRvNjy9OldaVpCnUaJCudljFljtiOFBQo+QphLfy7w+8fsSEVCG9eUpJXBCVXFnK6T9bDmffoTmNKv+c88kO7ZsaaMrlmNMM5olf9IBoRm+rAGYELmX7wYCngDTNKEAAAAAElFTkSuQmCC" alt="First slide"></p>
              <h1>开启AR异时空</h1>
              <div><img src="/static/img/lun-2.85f1984.png" alt="First slide"></div>
            </div>
          </div>
        </div>-->

        <!--<div class="item">
          <div class="container">
            <div class="carousel-caption">
              <div class="col-sm-6">
                <p class="logo-1">
                  <img src="data:image/png;base64,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" alt="First slide"></p>
                <h1>解放双手大开眼界</h1>
              </div>
              <div class="col-sm-6 pic-1">
                <img src="/static/img/lun-1.8fafc2b.png" alt="First slide">
              </div>
            </div>
          </div>
        </div>-->

        <div class="item" v-for="(item, index) in sliders" :class="{ 'active': index===0 }">
          <div class="container">

            <div class="carousel-caption pic-2" v-if="item.textposition==='top' || item.textposition==='bottom'">
              <p class="logo-2"><img :src="item.logo" alt="First slide" /></p>
              <h1>{{ item.title[$route.query['language']] }}</h1>
              <div>
                <img :src="item.prdpic" alt="First slide" />
              </div>
            </div>

            <div class="carousel-caption" v-if="item.textposition==='left' || item.textposition==='right'">
              <div class="col-sm-6">
                <p class="logo-1"><img :src="item.logo" alt="First slide" /></p>
                <h1>{{ item.title[$route.query['language']] }}</h1>
              </div>
              <div class="col-sm-6 pic-1">
                <img :src="item.prdpic" alt="First slide" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- /.carousel -->

      <div class="full-width-container banner-1" v-for="(item, index) in sections" :style="{background: 'url(' + item.bg + ') no-repeat', backgroundPosition: 'center 0', backgroundSize: 'cover'}">
        <div class="inner">
          <div class="container">
            <img :src="item.logo"/>
            <h1>{{ item.title[$route.query['language']] }}</h1>
            <ul class="info">
              <li v-for="li in item.description[$route.query['language']].split(/\\s+|[，,]/g)">
                {{ li }}
              </li>
            </ul>
          </div>
        </div>
      </div>

    <div class="homrow4">
      <div class="container index-items">
        <ul class="index-items-box">
          <li class='item-news' v-for="(item, index) in expressway" :style="{background: 'url(' + item.icon + ') no-repeat 20px 10px', backgroundSize: '90px', backgroundColor: 'white'}" v-if="index<3">
            <router-link :to="{name: item.more === '' ? 'building' : item.more}">
            <h5>{{ item.title[$route.query['language']] }}</h5>
            <p>{{ item.description[$route.query['language']] }}</p>
            <a href="javascript:void(0)">more</a>
            </router-link>
          </li>
        </ul>
        <ul class="index-items-box">
          <li class='item-news' v-for="(item, index) in expressway" :style="{background: 'url(' + item.icon + ') no-repeat 20px 10px', backgroundSize: '90px', backgroundColor: 'white'}" v-if="index>2&&index<6">
            <router-link :to="{name: item.more === '' ? 'building' : item.more}">
              <h5>{{ item.title[$route.query['language']] }}</h5>
              <p>{{ item.description[$route.query['language']] }}</p>
              <a href="javascript:void(0)">more</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="container p-relative" v-if="companyinfo.hasOwnProperty('intro')">
      <div class="intro">
        <h1 v-if="$route.query['language']==='ch'">公司简介</h1>
        <h1 v-else>Company Introduction</h1>
        <p>{{ companyinfo.intro[$route.query['language']] }}</p>
      </div>
    </div>

    <div class="map-container ui-tabs ui-corner-all ui-widget ui-widget-content" v-if="companyinfo.hasOwnProperty('intro')">
      <div id="map-coordinates">
          <div class="coordinates-info tabs-Shanghai active">
            <p class="map-coordinates-city-zh" v-if="$route.query['language']==='ch'">上 海</p>
            <p class="map-coordinates-city-zh" v-else>Shang Hai</p>
            <p class="map-coordinates-city-address-top">{{ companyinfo.address[$route.query['language']].slice(0, companyinfo.address[$route.query['language']].indexOf(' ')) }}</p>
            <p class="map-coordinates-city-address-bottom">{{ companyinfo.address[$route.query['language']].slice(companyinfo.address[$route.query['language']].indexOf(' ') + 1) }}</p>
          </div>
          <img alt="坐标信息" src="../../assets/image/Ellipse_1.png">
      </div>
    <div id="map-SH" class="tabs ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="false"></div>
</div>


	</section>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        sliders: [],
        sections: [],
        expressway: [],
        companyinfo: {}
      }
    },
    computed: {},
    created () {
      // get sliders
      this.$http.get('/api/slider/list')
        .then(
          (res) => {
            this.sliders = res.body.content
          },
          () => {
            this.sliders = []
          }
        )

      // get sections
      this.$http.get('/static/data/section.json')
        .then(
          (res) => {
            this.sections = res.body.items
          },
          () => {
            this.sections = []
          }
        )

      // get expressway
      this.$http.get('/static/data/expressway.json')
        .then(
          (res) => {
            this.expressway = res.body.items
          },
          () => {
            this.expressway = []
          }
        )

      // get companyinfo1111
      this.$http.get('/static/data/companyinfo.json')
        .then(
          (res) => {
            this.companyinfo = res.body
          },
          () => {
            this.companyinfo = {}
          }
        )
    }
  }
</script>

<style lang="less">
  h1, h2, h3, h4, h5, h6 {
      font-weight: normal;
      color: #000;
  }
  .p-relative {
    position: relative;
  }
  .intro {
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
    position: absolute;
    z-index: 1;
    top: -150px;
    left: 50%;
    margin-left: -45%;
    width: 90%;
  }
  .intro h1 {
    color: #f8b62c;
    font-size: 24px;
  }
  .intro p{
    padding: 5px 20px;
  }
  .map-container {
    position: relative;
}
.coordinates-info{
  color: #f8b62c;
}
.coordinates-info .map-coordinates-city-zh {
    font-size: 22px;
    line-height: 22px;
    margin-top: 42px;
}
.coordinates-info .map-coordinates-city-letter {
    font-size: 20px;
    line-height: 36px;
    padding-bottom: 0;
    margin-bottom: 0;
}
.coordinates-info .map-coordinates-city-address-top, .coordinates-info .map-coordinates-city-address-bottom {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 2px;
}
#map-coordinates {
    width: 172px;
    height: 160px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    bottom: 140px;
}
.map-container > div.tabs {
    width: 100%;
    height: 400px;
}
#map-SH {
    background: url(../../assets/image/map_sh.jpg) no-repeat center center #fff;
}
.coordinates-info {
    display: none;
    width: 160px;
    height: 160px;
    top: 0;
    left: 0;
    text-align: center;
    position: absolute;
}
.coordinates-info.active {
    display: block;
}
	.row {
    margin-left: -15px;
    margin-right: -15px;
  }
  .row {
    margin-bottom: 20px;
  }
  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #ddd;
  }
  .image-fit img {
    width: 100%;
  }
  .circle-icon {
    margin-bottom: 10px;
    padding: 1em;
    height: 6.5em;
    width: 6.5em;
    border-radius: 50%;
    background: #ffddd0;
    color: #fff;
    display: inline-block;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  .home .step h4 {
    font-weight: 400;
  }
  .home .step p.lead {
    color: #555;
    font-size: 18px;
  }
  .btn {
    font-weight: 400!important;
    color: #303030;
    border-radius: 45px!important;
    padding-left: 1.5em!important;
    padding-right: 1.5em!important;
  }
  .btn.btn-basic {
    background: #eee;
    border-color: #eee;
    color: #ff4500;
    padding: 5px 8px;
  }
  .circle-icon {
    margin-bottom: 10px;
    padding: 1em;
    height: 6.5em;
    width: 6.5em;
    border-radius: 50%;
    background: #ffddd0;
    color: #fff;
    display: inline-block;
  }
  .circle-icon i {
      color: #ff4500;
  }
  .home .step i {
    font-size: 3em;
  }
  .homrow4,  .homrow3{
    background-color: #f2f2f2;
    margin-top: 0em;
    padding-bottom: 4em;
    padding-top: 1em;
  }
  .homrow3{
    background-color: #FFF;
  }
  .tab .ht {
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    text-align: center;
  }
  .tab p {
    font-size: 16px;
    text-align: center;
    color: #999;
  }
  .thumbnail {
    display: block;
    padding: 4px;
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: border .2s ease-in-out;
    -o-transition: border .2s ease-in-out;
    transition: border .2s ease-in-out;
  }
  .subrow4 .thumbnail {
    border: none;
    padding: 0px;
    margin-bottom: 0px;
  }
  .subrow4 .caption {
    line-height: 25px;
    padding-top: 1em;
    background-color: #fff;
    color: #000;
  }
  .homrow4 a:hover{
    text-decoration: none;
  }
  .hsbcaptitle {
    line-height: 30px;
    margin: 0px 15px;
    overflow: hidden;
    padding-bottom: 15px;
    font-size: 1em;
  }
  .hsbcaptitle strong {
    font-size: 1em;
    padding-bottom: 5px;
    display: block;
  }
  .carousel{
    height: 500px;
  }
  .carousel .item {
    height: 500px;
    width: 100%;
  }
  .carousel-inner > .item > img {
    height: 500px;
  }
  .carousel-caption h1 {
    color: #f8b62c;
    font-size: 24px;
    text-shadow: none;
    margin-bottom: 30px;
  }
  .carousel-caption p {
    color: #4a4b46;
    font-size: 18px;
    text-shadow: none;
  }
  section.container img {
    width: 100%;
  }
  .carousel-caption {
    bottom: 100px;
  }
  .carousel-caption img {
    display: block;
    width: 100%;
    margin: 0 auto 10px;
  }
  @media (min-width: 768px) {
    .carousel-caption {
      bottom: 50px;
    }
    .carousel-caption img {
      width: 480px;
    }
    .intro {
      padding: 30px 60px;
    }
    .intro h1 {
      font-size: 24px;
    }
    .intro p{
      padding: 10px 30px;
    }
  }
  .full-width-container {
    width: 100%;
  }
  .full-width-container img{
    /*width: 100%;*/
  }
  .index-items-box{
    list-style: none;
    margin-left: 0;
    padding: 0;
    text-align: right;
  }
  .index-items-box h5 {
    font-size: 18px;
    padding-top: 10px;
  }
  .index-items-box li {
    padding-left: 120px;
    padding-right: 20px;
    background-color: #FFF;
    padding-bottom: 10px;
    border: 1px solid #ddd;
    margin: 10px;
    a {
      p {
        color: #000;
      }
      &:hover {
        color: #f8b62c;
      }
    }
  }
  .item-news {
    background: url(../../assets/image/icon-tv.png) no-repeat 20px 10px;
    background-size: 90px;
  }
  .item-blog {
    background: url(../../assets/image/icon-blog.png) no-repeat 20px 10px;
    background-size: 90px;
  }
  .item-cloud {
    background: url(../../assets/image/icon-cloud.png) no-repeat 20px 10px;
    background-size: 90px;
  }
  .item-shop {
    background: url(../../assets/image/icon-shop.png) no-repeat 20px 10px;
    background-size: 90px;
  }
  .item-helper {
    background: url(../../assets/image/icon-helper.png) no-repeat 20px 10px;
    background-size: 90px;
  }
  .item-product {
    background: url(../../assets/image/icon-product.png) no-repeat 20px 10px;
    background-size: 90px;
  }
  .index-items {
      padding: 0 0 100px;
    }

  .banner-1, .banner-2, .banner-3, .banner-1-en, .banner-2-en, .banner-3-en {
    height: 0;
    overflow: hidden;
    padding-top: 80%;
    background-position: center 0;
    background-size:  cover;
    position: relative;
  }
  .banner-1 .inner, .banner-2 .inner, .banner-3 .inner {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    img {
      width: 30%;

    }
    .container {
      text-align: center;
      h1 {
        font-style: italic;
        font-weight: bold;
        color: #FFF;
        font-size: 36px;
        text-shadow: 1px 2px 2px rgba(0,0,0,0.2);
      }
      ul {
        padding-left: 0;
        margin-top: 40px;
        li {
          display: inline-block;
          color: #fff;
          /*width: 180px;*/
          padding: 0 10px;
          text-align: left;
          &:before {
            content: '●' ;
            padding-right: 10px;
          }
        }
      }
    }
  }

  .banner-2 .inner, .banner-3 .inner {
    .container {
      h1 {
        color: #37393b;
      }
      ul {
        li {
          color: #37393b;
        }
      }
    }
  }

  .banner-2 .inner {
    .container {
      ul {
        margin-top: 70px;
      }
    }
  }

  .banner-3 .inner {
    .container {
      h1 {
        color: #37393b;
        -webkit-text-stroke: 1.5px rgba(255,255,255,0.8);
        text-shadow: none;
      }
      ul {
        li {
          color: #37393b;
          /*width: 130px;*/
        }
      }
    }
  }

  .banner-1 {
    /*background: url(../../assets/image/pic-1-bg.jpg) no-repeat;*/
    background-position: center 0;
    background-size:  cover;
  }
  .banner-2 {
    /*background: url(../../assets/image/pic-2-bg.jpg) no-repeat;*/
    background-position: 92% 0;
    background-size:  cover;
  }
  .banner-3 {
    /*background: url(../../assets/image/pic-3-bg.jpg) no-repeat;*/
    background-position: center 0;
    background-size:  cover;
  }

  @media (min-width: 320px) {
    .banner-1 .inner, .banner-2 .inner, .banner-3 .inner {
      .container {
        ul {
          /*margin-top: 60px;*/
          li{
            font-size: 8px;
            /*width: 160px;*/
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .banner-1 .inner, .banner-2 .inner, .banner-3 .inner {
      top: 20%;
      img {
        width: 200px;
        margin-bottom: 40px;
      }
      .container {
        h1 {
          font-size: 60px;
        }
        ul {
          margin-top: 400px;
          li {
            font-size: 13px;
            width: auto;
          }
        }
      }
    }
    .index-items {
      padding: 100px 0 150px;
    }
    .index-items-box{
      display: flex;
    }
    .index-items-box li {
      flex: 1;
    }
    .banner-1, .banner-2, .banner-3, .banner-1-en, .banner-2-en, .banner-3-en {
      padding-top: 45%;
      background-position: 50% 0;
    }
  }
  @media (min-width: 1400px) {
    .banner-1, .banner-2, .banner-3, .banner-1-en, .banner-2-en, .banner-3-en {
      padding-top: 800px;
      background-position: 50% 100%;
    }
  }
  .carousel-control{
    color: rgba(0,0,0,0.2);
    text-shadow: none;
    &:hover, &:focus{
      color: rgba(0,0,0,0.4);
    }
  }

.carousel-indicators li{
  border: none;
  background-color: rgba(0,0,0,0.5);
}

.carousel-indicators .active {
  background-color: #f8b62c;
}

  .carousel .item {
    background-color: #fff;
  }
  .carousel-control.left, .carousel-control.right{
    background-image: none;
  }

  .carousel-caption {
    .logo-1 img{
      width: 120px;
      margin-top: 80px;
    }
    .pic-1 {
      img {
        /*width: 80%;*/
      }
    }
  }

  @media (min-width: 768px) {
    .carousel-caption h1 {
      color: #f8b62c;
      font-size: 36px;
      text-shadow: none;
    }

    .carousel-caption {
      bottom: 60px;
      text-align: left;
    }

    .carousel-caption img {
      margin: 0;
    }
    .text-right {
      .logo-1, h1 {
        padding-left: 100px;
        text-align: left;
      }
    }


  }

  .pic-2 {
    text-align: center;
    .logo-2{
      img {
        width: 100px;
      }
    }
    img {
      display: block;
      margin: 0 auto;
    }
  }
</style>
