<template>
	<section class="production">
		<div class="full-width-container p1">
		  <div class="inner">
          <div class="container">
            <img src="../../assets/image/p-1.png"/>
          </div>
      </div>
		</div>

		<div class="full-width-container p2">
      <div class="inner">
          <div class="container">
            <template v-if="$route.query['language'] === 'en'">
            <div class="row">
              <div class="col-sm-6 left">
                <h2>Lightweight and convenient, beautiful and fashionable</h2>
                <p>The total mass of 145 grams, comfortable to wear, outdoor wear support；</p>

                <h2>large viewing angle, clear imaging</h2>
                <p>FOV39 degree perspective, 3 meters outside the 70 inch through virtual screen;<br />
1280x720 resolution, high saturation, high brightness distortion-free images;<br />
Supports 2D/3D video playback</p>

                <h2>Android integrated machine</h2>
                <p>Support for Android application running;<br />Support indoor and outdoor broadcast function and photos, video, can share the shooting to social app;<br />Upload images and videos to the mobile and cloud by 5GWIFI, Bluetooth system；<br />Simultaneously display multiple windows in 360 space;</p>
              </div>
              <div class="col-sm-6">
                <img src="../../assets/image/glass.png"/>
              </div>
            </div>
            </template>
            <template v-else>
              <div class="row">
              <div class="col-sm-6 left">
                <h2>轻巧便捷，美观时尚</h2>
                <p>总质量145克，佩戴舒适，支持户外穿戴</p>

                <h2>超大视角，清晰成像</h2>
                <p>拥有FOV39度视角，3米外100寸2D/3D穿透式虚拟屏幕；<br />
1280x720分辨率，高饱和度、高亮度无失真图像效果；<br />
完美支持2D/3D视频播放；</p>

                <h2>Android一体机</h2>
                <p>支持Android应用运行；<br />支持将拍摄的内容分享至微信、微博；<br />可以通过5GWIFI、蓝牙同云端（手机）连接传输照片和视频；<br />可实现在空间投放屏幕及素材，跟随视野的变化进行控制，可同时在360度空间中显示多个窗口。</p>
              </div>
              <div class="col-sm-6">
                <img src="../../assets/image/glass.png"/>
              </div>
            </div>
            </template>
          </div>
      </div>
    </div>


    <div class="full-width-container p3">
      <div class="inner">
        <template v-if="$route.query['language'] === 'en'">

          <div class="container">
            <h2>PERFORMANCE</h2>
            <p>EST Customized chip set；A1,64-bit 4-core； Cortex-A53 Chip Architecture；  CPU 2.0GHZ, GPU Mali-450； </p>
            <p>NADN+LPDDR3 32G+2G/64+4G Can be selected;</p>
<p>2.4G/5GDual band WiFi, Support IEEE 802.11a/b/g/n/ac；</p>
<p>Bluetooth V4.0 BLE+EDR The downward compatibility of wireless mouse and keyboard support；</p>

<p>TOF support 3D scanning;The spatial modeling and spatial localization; Support gesture recognition and 720P video recording；</p>
<p>PNI High precision 3 axis geomagnetic sensor +BOSCH 6 axis sensors; Head tracking function；</p>
<p>PNI High precision 3 axis geomagnetic sensor +BOSCH 6 axis sensors; Head tracking function；</p>
<p>Voice recognition input& Touch Pad input；</p>
<p>Opto-mechanical 1280x720@60HZ; FOV 39 degrees angle; See through ; 70 inches screen 3meters away; 2D/3D AR display.</p>

          </div>
          </template>
        <template v-else>
          <div class="container">
            <h2>性能</h2>
            <p>EST 定制芯片A1,64-bit 四核 Cortex-A53架构  </p>
            <p>主频2.0GHZ, GPU Mali-450；</p>
<p>2.4G/5G双频WIFI,支持IEEE 802.11a/b/g/n/ac；</p>
<p>Bluetooth V4.0 BLE+ED¬R 向下兼容,支持无线鼠标和键盘；</p>

<p>TOF 支持3D扫描,实现空间建模和空间定位;支持手势识别和720P视频录制；</p>
<p>PNI 3轴高精度地磁传感器+BOSCH 6轴传感器,实现头部跟踪功能；</p>
<p>双电池1000mAH+600mAH,支持长达3小时的视频播放和应用；</p>
<p>支持语音识别输入和TP（触摸板）触摸控制；</p>
<p>光机 1280x720@60HZ,FOV 39度视角,3米100寸穿透式2D/3D虚拟显示。</p>

      </div>
          </template>
      </div>
    </div>

    <div class="full-width-container p4">
      <div class="inner">
          <div class="container">
            <template v-if="$route.query['language'] === 'en'">
            <div class="row">
              <div class="col-sm-6">
                <img src="../../assets/image/p-4.jpg"/>
              </div>
              <div class="col-sm-6 left">
                <h2>Hands Free</h2>
                <p>Important information in outdoor activities can be displayed at any time;</p>
<p>keep the information communication between the team members;</p>
<p>Picture or video directly view other members by shooting glasses；（2D/3D）</p>
<p>Navigation information while driving directly in the line of sight, the best experience of the implementation of auxiliary information;</p>
<p>Navigation information while driving directly in the line of sight, the best experience of the implementation of auxiliary information;</p>

              </div>

            </div>
            </template>
            <template v-else>

            <div class="row">
              <div class="col-sm-6">
                <img src="../../assets/image/p-4.jpg"/>
              </div>
              <div class="col-sm-6 left">
                <h2>解放双手</h2>
                <p>户外活动中重要的信息可以随时在眼前显示；</p>
<p>保持团队间的信息交流；</p>
<p>直接查看其他成员眼镜所拍摄的画面或视频；</p>
<p>驾车时的导航信息直接在视线中显示，实现最佳体验的信息辅助；</p>
<p>同时支持语音输入的功能，避免在开车时用手机输入导致的危险。</p>

              </div>

            </div>


            </template>
          </div>
      </div>
    </div>


    <div class="full-width-container p5">
      <div class="inner">
        <template v-if="$route.query['language'] === 'en'">

          <div class="container">
            <h2>Holographic Display</h2>
            <p>Getting common information in holographic way, more intuitive and more interesting; </p>
            <p>can simulate the effect of objects placed in a real environment, such as furniture shopping, online shopping and measurement;</p>
<p>Support AR Game & AR education APPs；</p>
<p>Virtual pets, decorations and Realization of intelligent virtual Secretary.</p>

          </div>

          </template>
        <template v-else>



          <div class="container">
            <h2>全息展示</h2>
            <p>将常用信息以全息的方式展现，更直观更有趣； </p>
            <p>可模拟物体在真实环境下摆放的效果，如家具选购，网络购物及测量；</p>
<p>各类AR教育及游戏应用的运行；</p>
<p>虚拟宠物，装饰品以及智能虚拟秘书的实现（需人工智能及应用开发的配合）。</p>

          </div>

          </template>
      </div>
    </div>

	</section>
</template>
<script>
	export default {
	  created () {
//	    document.body.scrollTop=0;
	  }
	}
</script>

<style lang="less">
  .production {
    overflow: hidden;
  }
	.full-width-container {
	  margin-bottom: 20px;
	  &:first-child {
	    margin-top: 50px;
	  }
	  .container {

	  }
	}
	.p1 {
	  background-color: #eaa949;
	  .container {
      text-align: center;
      padding: 80px 0;
      img {
        width: 50%;
      }
    }
	}

	.p2 {
    background-color: #ecedf1;
    .container {
      padding: 80px 0;
      text-align: center;
      img {
        width: 80%;
        margin-top: 120px;
      }
      .left {
        text-align: left;
        padding: 0 60px;
      }
      h2 {
        color: #eaa949;
        font-size: 24px;
      }
    }
  }

  .p4 {
    background-color: #ecedf1;
    .container {
      padding: 0;
      text-align: center;
      .row {
        margin-bottom: 0;
        img {
          width: 100%;
          display: block;
        }
        .left {
          text-align: left;
          padding: 40px 40px;
        }
        h2 {
          color: #eaa949;
          font-size: 24px;
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
    .p3 {
      padding-top: 50%;
      height: 0;
    overflow: hidden;
    .inner {
      position: absolute;
      .container {
        p {
          text-align: center;
        }
      }
    }
    }

    .p4 {
    .container {
      .row {
        .left {
          padding: 0 40px;
          margin-top: 100px;
      }
      }
    }
  }


    .p5 {
      padding-top: 50%;
      height: 0;
    overflow: hidden;
    .inner {
      top: 50%;
      position: absolute;
      .container {
        p {
          text-align: center;
        }
      }
    }
    }
  }

  @media (min-width: 1400px) {
    .p3 .p5{
      padding-top: 800px;
    }
  }
</style>
