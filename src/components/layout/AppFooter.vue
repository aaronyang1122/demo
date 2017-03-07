<template>
  <!--<div class="container marketing">-->
    <div>
      <footer class="main-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-2">
                    <div class="widget">
                      <template v-if="$route.query['language'] === 'en'">
                        <h4 class="title">Service Support</h4>
                        <div class="content tag-cloud">
                          <a href="javascript:void(0)" class="post-title">Buying Guide</a>
                          <a href="javascript:void(0)" class="post-title">After-sales Service</a>
                          <a href="javascript:void(0)" class="post-title">Common Problem</a>
                        </div>
                      </template>
                      <template v-else>
                        <h4 class="title">服务支持</h4>
                        <div class="content tag-cloud">
                          <a href="javascript:void(0)" class="post-title">购买指南</a>
                          <a href="javascript:void(0)" class="post-title">售后服务</a>
                          <a href="javascript:void(0)" class="post-title">常见问题</a>
                        </div>
                      </template>
                    </div>
                </div>

                <div class="col-sm-2">
                    <div class="widget">
                      <template v-if="$route.query['language'] === 'en'">
                        <h4 class="title">About Us</h4>
                        <div class="content tag-cloud">
                          <a href="javascript:void(0)" class="post-title">Company Profile</a>
                          <a href="javascript:void(0)" class="post-title">Join Us</a>
                          <a href="javascript:void(0)" class="post-title">Legal Notices</a>
                        </div>
                      </template>
                      <template v-else>
                        <h4 class="title">关于我们</h4>
                        <div class="content tag-cloud">
                          <a href="javascript:void(0)" class="post-title">公司简介</a>
                          <a href="javascript:void(0)" class="post-title">加入我们</a>
                          <a href="javascript:void(0)" class="post-title">法律声明</a>
                        </div>
                      </template>
                    </div>
                </div>

                <div class="col-sm-2">
                    <div class="widget">
                      <template v-if="$route.query['language'] === 'en'">
                        <h4 class="title">Something Else</h4>
                        <div class="content tag-cloud">
                          <a href="javascript:void(0)" class="post-title">Sina Weibo</a>
                          <a href="javascript:void(0)" class="post-title">Official Wechat</a>
                          <a href="javascript:void(0)" class="post-title">News</a>
                        </div>
                      </template>
                      <template v-else>
                        <h4 class="title">其他</h4>
                        <div class="content tag-cloud">
                          <a href="javascript:void(0)" class="post-title">新浪微博</a>
                          <a href="javascript:void(0)" class="post-title">官方微信</a>
                          <router-link :to="{name: 'news'}">新闻</router-link>
                        </div>
                      </template>
                    </div>
                </div>

                <div class="col-sm-3" v-if="companyinfo.hasOwnProperty('intro')">
                  <div class="widget">
                        <h4 class="title" v-if="$route.query['language']==='ch'">联系我们</h4>
                        <h4 class="title" v-else>Contact Us</h4>
                        <div class="content tag-cloud" v-if="$route.query['language']==='ch'">
                          <p>地址: {{ companyinfo.address[$route.query['language']] }}</p>
                          <p>电话: {{ companyinfo.tel }}</p>
                          <p>邮箱: {{ companyinfo.email }}</p>
                        </div>
                        <div class="content tag-cloud" v-else>
                          <p>Address: {{ companyinfo.address[$route.query['language']] }}</p>
                          <p>Tel: {{ companyinfo.tel }}</p>
                          <p>E-mail: {{ companyinfo.email }}</p>
                        </div>
                  </div>
                </div>

                <div class="col-sm-3" v-if="companyinfo.hasOwnProperty('intro')">
                    <div class="widget">
                        <h4 class="title" v-if="$route.query['language']==='en'">Subscribe the Wechat public number</h4>
                        <h4 class="title" v-else>关注微信公众号</h4>
                        <div class="content tag-cloud friend-links">
                           <img :src="companyinfo.qrcode">
                        </div>
                </div>
                </div>
            </div>
        </div>
    </footer>

      <!--copyright-->
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <span>Copyright © E Speace Time</span> |
              <span><a href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备17000115号</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>

  <!-- </div>-->
</template>

<script type="text/javascript">
  export default {
    data () {
        return {
          companyinfo: {}
        }
    },
    created () {
      // get companyinfo
      this.$http.get('/static/data/companyinfo.json')
        .then(
          (res) => {
            this.companyinfo = res.body
            console.log(this.companyinfo)
          },
          () => {
            this.companyinfo = {}
          }
        )
    }
  }
</script>

<style>
.copyright {
    background: #111;
    font-size: 13px;
    text-align: center;
    color: #555555;
    padding-top: 28px;
    padding-bottom: 28px;
    border-top: 1px solid #303030;
}
.widget {
    margin-bottom: 35px;
}
.widget .title {
    margin-top: 0;
    padding-bottom: 7px;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 21px;
    position: relative;
}
.main-footer {
    background: #202020;
    padding: 35px 0 0;
    color: #959595;
}
.main-footer .widget {
    padding: 0px 0px;
}

.main-footer .widget .title {
    color: #ffffff;
    border-bottom: 1px solid #303030;
}
.widget .recent-post .recent-single-post {
    border-bottom: 1px dashed #ebebeb;
    padding-bottom: 14px;
    margin-bottom: 14px;
}
.main-footer .widget .recent-post .recent-single-post {
    border-bottom: 1px dashed #303030;
}
a {
    color: #f8b62c;
    outline: none;
}
.widget .recent-post .recent-single-post .post-title {
    color: #505050;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
.main-footer .widget .recent-post .recent-single-post .post-title {
    color: #959595;
}
.widget .tag-cloud a {
    border: 1px solid #ebebeb;
    padding: 2px 7px;
    color: #959595;
    line-height: 1.5em;
    display: inline-block;
    margin: 0 7px 7px 0;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
.widget .tag-cloud a:hover {
    color: #ffffff;
    background: #f8b62c;
    border: 1px solid #f8b62c;
    text-decoration: none;
}
.main-footer .widget .tag-cloud a {
    border: 1px solid #303030;
}
.main-footer .widget .tag-cloud a:hover {
    border: 1px solid #f8b62c;
}
.main-footer .widget .friend-links hr {
    margin: 1em 0;
    border-top: 1px dashed #303030;
}

.copyright span {
    margin: 0 .5em;
}
.copyright a {
    color: #555555;
}
</style>
