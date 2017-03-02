<template>
	<section class="index">
		<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="container">
            <div class="carousel-caption">
              <div class="col-sm-6">
                <p class="logo-1"><img src="../../assets/image/lun-1-logo.png" alt="First slide" /></p>
                <h1>{{ language.banner.h1 }}</h1>
              </div>
              <div class="col-sm-6 pic-1">
                <img src="../../assets/image/lun-1.png" alt="First slide" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="container">
            <div class="carousel-caption pic-2">
              <p class="logo-2"><img src="../../assets/image/lun-2-logo.png" alt="First slide" /></p>
              <h1>{{ language.banner.h2 }}</h1>
              
              <div>
                <img src="../../assets/image/lun-2.png" alt="First slide" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="container">
            <div class="carousel-caption">
              <div class="col-sm-6">
                <p class="logo-1"><img src="../../assets/image/lun-3-logo.png" alt="First slide" /></p>
                <h1>{{ language.banner.h3 }}</h1>
              </div>
              <div class="col-sm-6 pic-1">
                <img src="../../assets/image/lun-3.png" alt="First slide" />
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
    
    <template v-if="$route.query['language'] === 'en'">
      <div class="full-width-container banner-1">
        <div class="inner">
          <div class="container">
            <img src="../../assets/image/pic-1-logo.png"/>
            <h1>Powerful&nbsp;&nbsp;&nbsp;Comfortable</h1>
            <ul class="info">
              <li>FOV 39 degrees</li>
              <li>Supports 2D/3D playback</li>
              <li>See through virtual screen size of 70”@3m</li>
              <li>1280x720P resolution</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="full-width-container banner-2">
        <div class="inner">
          <div class="container">
            <img src="../../assets/image/pic-2-logo.png"/>
            <h1>Hands Free&nbsp;&nbsp;&nbsp;Share</h1>
            <ul class="info">
              <li>720P video recording</li>
              <li>2.4G/5G WiFi</li>
              <li>Indoor and outdoor broadcasting</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="full-width-container banner-3">
        <div class="inner">
          <div class="container">
            <img src="../../assets/image/pic-3-logo.png"/>
            <h1>High Tech Light Weight</h1>
            <ul class="info">
              <li>Gesture control</li>
              <li>Head tracking system</li>
              <li>Virtual Environment Pet（VEP）</li>
              <li>Training Assistant</li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="full-width-container banner-1">
        <div class="inner">
          <div class="container">
            <img src="../../assets/image/pic-1-logo.png"/>
            <h1>随意走&nbsp;&nbsp;&nbsp;随时看</h1>
            <ul class="info">
            	<li>显示尺寸 70吋/100吋</li>
            	<li>分辨率 1280Px720p</li>
            	<li>视场角 35°/39°</li>
            	<li>双电池 续航>3小时</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="full-width-container banner-2">
        <div class="inner">
          <div class="container">
            <img src="../../assets/image/pic-2-logo.png"/>
            <h1>随眼拍&nbsp;&nbsp;&nbsp;随手播</h1>
            <ul class="info">
              <li>实景3D拍摄</li>
              <li>分辨率720p</li>
              <li>触摸控制</li>
              <li>2.4/5G双频WiFi</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="full-width-container banner-3">
        <div class="inner">
          <div class="container">
            <img src="../../assets/image/pic-3-logo.png"/>
            <h1>随处学&nbsp;&nbsp;&nbsp;随性玩</h1>
            <ul class="info">
              <li>语音控制</li>
              <li>手势识别</li>
              <li>空间定位</li>
              <li>重量125克</li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    
    <div class="homrow4">
      <div class="container index-items">
        <template v-if="$route.query['language'] === 'en'">
          <ul class="index-items-box">
            <li class='item-news'>
              <router-link :to="{name: 'news'}">
              <h5>News</h5>
              <p>AR official news of EST</p>
              <a href="javascript:void(0)">more</a>
              </router-link>
            </li>
            <li class='item-blog'>
              <h5>Community</h5>
              <p>Stay tuned for us</p>
              <a href="javascript:void(0)">more</a>
            </li>
            <li class='item-cloud'>
              <h5>Cloud Platforms</h5>
              <p>Stay tuned for us</p>
              <a href="javascript:void(0)">more</a>
            </li>
          </ul>
          <ul class="index-items-box">
            <li class='item-shop'>
              <h5>Mall</h5>
              <p>Stay tuned for us</p>
              <a href="javascript:void(0)">more</a>
            </li>
            <li class='item-helper'>
              <h5>Assistant</h5>
              <p>Stay tuned for us</p>
              <a href="javascript:void(0)">more</a>
            </li>
            <li class='item-product'>
              <router-link :to="{name: 'product'}">
              <h5>Product</h5>
              <p>AR, MR glasses</p>
              <a href="javascript:void(0)">more</a>
               </router-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="index-items-box">
            <li class='item-news'>
              <router-link :to="{name: 'news'}">
              <h5>新闻</h5>
              <p>异时空AR官方新闻动态</p>
              <a href="javascript:void(0)">查看更多</a>
              </router-link>
            </li>
            <li class='item-blog'>
              <h5>社区</h5>
              <p>暂未开放敬请期待</p>
              <a href="javascript:void(0)">查看更多</a>
            </li>
            <li class='item-cloud'>
              <h5>云平台</h5>
              <p>暂未开放敬请期待</p>
              <a href="javascript:void(0)">查看更多</a>
            </li>
          </ul>
          <ul class="index-items-box">
            <li class='item-shop'>
              <h5>商城</h5>
              <p>暂未开放敬请期待</p>
              <a href="javascript:void(0)">查看更多</a>
            </li>
            <li class='item-helper'>
              <h5>助手</h5>
              <p>暂未开放敬请期待</p>
              <a href="javascript:void(0)">查看更多</a>
            </li>
            <li class='item-product'>
              <router-link :to="{name: 'product'}">
                <h5>产品</h5>
                <p>AR、MR眼镜产品</p>
                <a href="javascript:void(0)">查看更多</a>
              </router-link>
            </li>
          </ul>
        </template>
      </div>
    </div>
    
    <div class="container p-relative">
      <div class="intro">
        <template v-if="$route.query['language'] === 'en'">
          <h1>Company Profile</h1>
          <p>Committed to the technology research and development of AR, MR glasses,  the technology development in the field of internet technology, the system of MR glasses hardware and auxiliary equipment design, development, production and sales, the MR augmented reality into people's life, the innovation and explore more depth of the fusion of virtual world and real life.</p>
        </template>
        <template v-else>
          <h1>公司简介</h1>
          <p>致力于AR、MR眼镜的技术研发，互联网科技领域内的技术开发，MR眼镜硬件及辅助设备的设计、开发、生产、销售一体系，将MR增强现实融入人们的生活当中，创新、探索更深度虚拟世界和现实生活的融合。</p>
        </template>
      </div>
      
    </div>
    
    <div class="map-container ui-tabs ui-corner-all ui-widget ui-widget-content">
      <div id="map-coordinates">
          <div class="coordinates-info tabs-Shanghai active">
            <template v-if="$route.query['language'] === 'en'">
              <p class="map-coordinates-city-zh">Shang Hai</p>
              <p class="map-coordinates-city-address-top">ZHANGJIANG-INNOPARK</p>
              <p class="map-coordinates-city-address-bottom">Room 1202-A, 12 / F, <br>NO.570 Shengxia RD</p>
            </template>
            <template v-else>
              <p class="map-coordinates-city-zh">上海</p>
              <p class="map-coordinates-city-address-top">张江高科技园区盛夏路</p>
              <p class="map-coordinates-city-address-bottom">570号12楼1202-A室</p>
            </template>
          </div>
          <img alt="坐标信息" src="../../assets/image/Ellipse_1.png">
      </div>
    <div id="map-SH" class="tabs ui-tabs-panel ui-corner-bottom ui-widget-content" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="false"></div>
</div>
    
    <!--<section class="container">
      <div class="row">
        <div class="col-md-4 image-fit">
          <a class="hidden-print" href="/int/support/dealer-search.html">
            <div class="card">
              <img alt="händlersuche" src="//s3.kaercher-media.com/asset/22016/1467719466/haendlersuche.jpg?bp=lg">
              <div class="card-overlay" style="display: none; opacity: 0.98;">
                <div class="card-text" style="margin-top: 207.5px; opacity: 0;">
                  Quickly find your Kärcher Dealer.
                </div>
              </div>
            </div>
          </a>
          <h3 class="mobileheadline headlinebottom">
                    <a href="/int/support/dealer-search.html">
                    Dealer and Service Search
                    </a>
                </h3>
          <p>Quickly find your Kärcher Dealer.</p>
          <div class="visible-xs">
            <hr>
          </div>
        </div>
        <div class="col-md-4 image-fit">
          <a class="hidden-print" href="/int/support/register-and-win.html">
            <div class="card">
              <img alt="register and win" src="//s3.kaercher-media.com/asset/22051/1467790775/register_and_win.jpg?bp=lg">
              <div class="card-overlay" style="opacity: 0.98; display: none;">
                <div class="card-text" style="margin-top: 84.6574px; opacity: 0;">
                  Register and Win
                </div>
              </div>
            </div>
          </a>
          <h3 class="mobileheadline headlinebottom">
                    <a href="/int/support/register-and-win.html">
                    Register and Win
                    </a>
                </h3>
          <p>Register your new purchase here and benefit from interesting information about Kärcher products and accessories.</p>
          <div class="visible-xs">
            <hr>
          </div>
        </div>
        <div class="col-md-4 image-fit">
          <a class="hidden-print" href="/int/inside-kaercher/careers.html">
            <div class="card">
              <img alt="Karriere Kärcher" src="//s3.kaercher-media.com/asset/2473/1413198097/karriere_kaercher.jpg?bp=lg">
              <div class="card-overlay" style="opacity: 0.98; display: none;">
                <div class="card-text" style="margin-top: 87px; opacity: 0;">
                  Find out more about Kärcher as an employer
                </div>
              </div>
            </div>
          </a>
          <h3 class="mobileheadline headlinebottom">
                    <a href="/int/inside-kaercher/careers.html">
                    Careers at Kärcher
                    </a>
                </h3>
          <p>At Kärcher, skilled workers and managers have various opportunities to develop and contribute their own ideas.</p>
        </div>
      </div>
      <div class="hidden-xs">
        <hr>
      </div>
    </section>-->
    
    <!--<div class="container text-center">
        <div class="clearfix">
            <div class="col-sm-3 step">
                <span class="circle-icon"><i class="ion-android-list"></i></span>
                <h4 class="text-uppercase"><strong>Build</strong></h4>
                <p class="lead">Create your newsletter signup form in 10 seconds.</p>
                <br>
            </div>
            <div class="col-sm-3 step">
                <span class="circle-icon"><i class="ion-android-share-alt"></i></span>
                <h4 class="text-uppercase"><strong>Share &amp; Embed</strong></h4>
                <p class="lead">Embed your form on Medium and share to facebook, twitter, etc.</p>
                <br>
            </div>
            <div class="col-sm-3 step">
                <span class="circle-icon"><i class="ion-android-download"></i></span>
                <h4 class="text-uppercase"><strong>Easy Export</strong></h4>
                <p class="lead">Easily export all your signups with one click!</p>
                <br>
            </div>
            <div class="col-sm-3 step">
                <span class="circle-icon"><i class="ion-ios-people"></i></span>
                <h4 class="text-uppercase"><strong>Grow</strong></h4>
                <p class="lead">Grow your loyal following.</p>
                <p><a id="bld" class="btn btn-basic" href="javascript:void(0);">Start now</a></p>
                <br>
            </div>
        </div>
    </div>-->
    
    
    <!--<div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <img alt="How It Works" class="img-responsive section-header" src="assets/images/hiw.svg">
        </div>
          <div class="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
              <div class="clearfix"></div>
              <h2 class="section-heading">Licensed Clinicians Only</h2>
              <p class="lead">You wouldn’t trust just anyone with your secrets. That’s why we ensure all clinicians are officially licensed.</p>
          </div>
          <div class="col-lg-5 col-lg-offset-1 col-sm-pull-6 col-sm-6">
              <img alt="Licensed Clinicians Only" class="img-responsive" src="assets/images/home-ill-1.png">
          </div>
      </div>
    </div>-->
    
    <!--<div class="homrow4">
  <div class="container">
    <div class="tab">
      <h3 class="ht">商用网络</h3>
      
    </div>
    <div class="row subrow4">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <a hidefocus="true" target="_blank" href="http://smb.tenda.com.cn/solution.html" id="traqiyezhinengwuxian" onclick="_hmt.push(['_trackEvent', '首页_企业智能无线通网络解决方案', 'click', 'traqiyezhinengwuxian'])">
          <div class="thumbnail"><img src="http://www.tenda.com.cn/2016/images/ee2.jpg" class="lazy" data-original="/2016/images/ee2.jpg" alt="解决方案" style="display: block;"></div>
          <div class="caption" style="border:solid 1px #ececec;border-top:none;">
            <div class="hsbcaptitle"><strong>无线通解决方案</strong>推出基于场景化的无线解决方案，大幅度降低客户部署和维护成本</div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <a hidefocus="true" target="_blank" href="http://smb.tenda.com.cn/solutioncases.html" title="应用案例" id="trawuxainfugaigogncheng" onclick="_hmt.push(['_trackEvent', '首页_无线覆盖工程应用案例', 'click', 'trawuxainfugaigogncheng'])">
          <div class="thumbnail"><img src="http://www.tenda.com.cn/2016/images/ee2.jpg" class="lazy" data-original="/2016/images/dd2.jpg" alt="应用案例" style="display: block;"></div>
          <div class="caption" style="border:solid 1px #ececec ;border-top:none;">
            <div class="hsbcaptitle"><strong>无线应用案例</strong>丰富的产品和方案，全方位的技术支持，为众多客户创造了无限价值</div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <a hidefocus="true" target="_blank" href="http://smb.tenda.com.cn/binguan.html" title="智能推荐" id="trazhinengtuijianxitong" onclick="_hmt.push(['_trackEvent', '首页_无线方案智能推荐系统', 'click', 'trazhinengtuijianxitong'])">
          <div class="thumbnail"><img src="http://www.tenda.com.cn/2016/images/ee2.jpg" class="lazy" data-original="/2016/images/cc2.jpg" alt="智能推荐" style="display: block;"></div>
          <div class="caption" style="border:solid 1px #ececec ;border-top:none;">
            <div class="hsbcaptitle"><strong>无线智能推荐</strong>依据场景和条件，智能生成属于您的无线方案，并向您推荐设备清单</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>-->
    
	</section>
</template>
<script>
  import { ch, en } from '../../language/'
  
	export default {
	  computed: {
      language () {
        return this.$route.query['language'] === 'en' ? en : ch
      }
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
    background: url(../../assets/image/pic-1-bg.jpg) no-repeat;
    background-position: center 0;
    background-size:  cover;
  }
  .banner-2 {
    background: url(../../assets/image/pic-2-bg.jpg) no-repeat;
    background-position: 92% 0;
    background-size:  cover;
  }
  .banner-3 {
    background: url(../../assets/image/pic-3-bg.jpg) no-repeat;
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