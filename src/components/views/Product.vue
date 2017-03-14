<template>
	<section class="production">

		<div class="full-width-container" :class="{ 'layout-vertical': item.textposition === 'top' || item.textposition === 'bottom',  'layout-horizontal': item.textposition === 'left' || item.textposition === 'right'}" :style="{background: item.bgcolor}" v-for="(item, index) in detail.sections">
		  <div class="inner">
          <div class="container" v-if="item.textposition === 'top' || item.textposition === 'bottom'">
            <h2 :style="{color: item.titlecolor}">{{ item.title[$route.query['language']] }}</h2>
            <p v-for="p in item.content[$route.query['language']].split(/\\s+|[;；]/g)">
              {{ p }}
            </p>
            <img :src="$route.query['language'] === 'ch' ? item.img : item.imgExtended" v-if="item.img !== '/' && item.imgExtended" style="margin-top:20px;"/>
            <img :src="item.img" v-else style="margin-top:20px;"/>
          </div>

          <div class="container" v-if="item.textposition === 'right'">
            <div class="row">
              <div class="col-sm-6 pic">
                <img :src="item.img"/>
              </div>
              <div class="col-sm-6 text">
                <h2 :style="{color: item.titlecolor}">{{ item.title[$route.query['language']] }}</h2>
                <p v-for="p in item.content[$route.query['language']].split(/\\s+|[;；]/g)">
                  {{ p }}
                </p>
              </div>
            </div>
          </div>

          <div class="container" v-if="item.textposition === 'left'">
            <div class="row">

              <div class="col-sm-6 text">
                <h2 :style="{color: item.titlecolor}">{{ item.title[$route.query['language']] }}</h2>
                <p v-for="p in item.content[$route.query['language']].split(/\\s+|[;；]/g)">
                  {{ p }}
                </p>
              </div>

              <div class="col-sm-6 pic">
                <img :src="item.img"/>
              </div>

            </div>
          </div>

      </div>
		</div>

   <!-- <div class="full-width-container layout-horizontal">
      <div class="inner">
          <div class="container">
            <template v-if="$route.query['language'] === 'en'">
            <div class="row">

              <div class="col-sm-6 left">
                <h2>Hands Free</h2>
                <p>Important information in outdoor activities can be displayed at any time;</p>
                <p>keep the information communication between the team members;</p>
                <p>Picture or video directly view other members by shooting glasses；（2D/3D）</p>
                <p>Navigation information while driving directly in the line of sight, the best experience of the implementation of auxiliary information;</p>
                <p>Navigation information while driving directly in the line of sight, the best experience of the implementation of auxiliary information;</p>
              </div>

              <div class="col-sm-6">
                <img src="../../assets/image/p-4.jpg"/>
              </div>

            </div>
            </template>
            <template v-else>

            <div class="row">

              <div class="col-sm-6 text">
                <h2>解放双手</h2>
                <p>户外活动中重要的信息可以随时在眼前显示；</p>
                <p>保持团队间的信息交流；</p>
                <p>直接查看其他成员眼镜所拍摄的画面或视频；</p>
                <p>驾车时的导航信息直接在视线中显示，实现最佳体验的信息辅助；</p>
                <p>同时支持语音输入的功能，避免在开车时用手机输入导致的危险。</p>

              </div>

              <div class="col-sm-6 pic">
                <img src="../../assets/image/p-4.jpg"/>
              </div>

            </div>


            </template>
          </div>
      </div>
    </div>

    <div class="full-width-container layout-horizontal ">
      <div class="inner">
        <div class="container">


            <div class="row">

              <div class="col-sm-6 pic">
                <img src="../../assets/image/p-4.jpg"/>
              </div>

              <div class="col-sm-6 text">
                <h2>解放双手</h2>
                <p>户外活动中重要的信息可以随时在眼前显示；</p>
                <p>保持团队间的信息交流；</p>
                <p>直接查看其他成员眼镜所拍摄的画面或视频；</p>
                <p>驾车时的导航信息直接在视线中显示，实现最佳体验的信息辅助；</p>
                <p>同时支持语音输入的功能，避免在开车时用手机输入导致的危险。</p>
              </div>



            </div>


        </div>
      </div>
    </div>-->

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
//	    document.body.scrollTop=0;
      this.$http.get(
          '/api/product/detail',
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
  .production {
    overflow: hidden;
  }
	.full-width-container {
	  &:first-child {
	    margin-top: 50px;
	  }
	  .container {
      color: #333;
	  }
	}
	.layout-vertical {
	  .container {
      text-align: center;
      padding: 60px 0;
      img {
        width: 80%;
      }
      h2 {
        font-size: 36px;
        margin-bottom: 24px;
        padding: 0 20px;
      }
      p {
        padding: 0 20px;
      }
    }
	}

  .layout-horizontal {
    .container {
      padding: 0;
      text-align: center;
      .row {
        margin-bottom: 0;
        .pic {
          padding: 0;
          img {
            width: 100%;
            display: block;
          }
        }
        .text {
          text-align: center;
          padding: 0 40px;
        }
        h2 {
          color: #eaa949;
          font-size: 36px;
          margin: 30px 0;
        }
        p {
          margin-bottom: 3px;
          &:last-of-type {
            margin-bottom: 20px;
          }
        }
      }

    }
  }

  .p3 {
    background: url(../../assets/image/p-3.jpg) no-repeat;
    /*height: 0;
    overflow: hidden;
    padding-top: 90%;*/
    background-position: center 0;
    background-size:  cover;
    position: relative;
    .inner {
      /*position: absolute;*/
      top: 30px;
      width: 100%;
      .container {
        margin: 0 auto;
        padding: 10px 40px;
        text-align: center;
        img {
          width: 80%;
        }
        .left {
          text-align: left;
          padding: 0 60px;
        }
        h2 {
          color: #eaa949;
          font-size: 24px;
          margin-bottom: 40px;
        }
        p {
          color: #fff;
          text-align: left;
        }
      }
    }

  }

  .p5 {
    background: url(../../assets/image/p-5.jpg) no-repeat;
    /*height: 0;
    overflow: hidden;
    padding-top: 90%;*/
    background-position: center 0;
    background-size:  cover;
    position: relative;
    .inner {
      /*position: absolute;*/
      top: 30px;
      width: 100%;
      .container {
        margin: 0 auto;
        padding: 10px 40px;
        text-align: center;
        img {
          width: 80%;
        }
        .left {
          text-align: left;
          padding: 0 60px;
        }
        h2 {
          color: #eaa949;
          font-size: 24px;
          margin-bottom: 40px;
        }
        p {
          color: #fff;
          text-align: left;
        }
      }
    }

  }

  @media (min-width: 768px) {
    .layout-vertical {
      .container {
        text-align: center;
        padding: 60px 0;
        img {
          width: 50%;
        }
        h2 {
          font-size: 36px;
          margin-bottom: 24px;
        }
      }
    }

    .layout-horizontal {
      .container {
        padding: 0;
        text-align: center;
        .row {
          display: flex;
          align-items: center;
          margin-bottom: 0;
          .pic {
            padding: 0;
            img {
              width: 100%;
              display: block;
            }
          }
          .text {
            text-align: left;
            padding: 0;
          }
          h2 {
            color: #eaa949;
            font-size: 36px;
            margin-bottom: 30px;
            padding-left: 40px;
          }
          p {
            margin-bottom: 6px;
            padding-left: 40px;
          }
        }

      }
    }

  }


</style>
