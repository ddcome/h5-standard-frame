<template>
    <layout class="company-introduce" :forbid="showGuide">
        <template #content>
            <div class="title">
                <strong>real</strong>networks.
            </div>
            <van-image class="header-img" :src="topImg"/>
            <div class="content-title">
                <div class="title1">RealNetworks</div>
                <div class="title2">流媒体类别的发明者</div>
            </div>
            <div class="content-text">
                RealNetworks是流媒体类别的发明者，并改变了音频和视频内容在各种设备和全世界消费的方式。
                RealNetworks以数字媒体专业知识和创新为基础，创造了新一代产品，采用世界一流的人工智能和机器学习来增强和保护我们的日常生活。
            </div>
            <div class="gloalGuide" :style="{display: showGuide?'unset':'none' }" @click="showGuide=false">
                <van-image class="down-img animated bounceInDown" width="46" height="180"
                           :src="require('@/assets/h5-images/2arrow-down.png')"/>
                <van-image class="up-img animated bounceInUp" width="46" height="180"
                           :src="require('@/assets/h5-images/2arrow-up.png')"/>
                <van-image class="dot-img animated flash" width="40" height="40"
                           :src="require('@/assets/h5-images/2circle.png')"/>
                <div class="guideFont">上下滑动切换内容</div>
            </div>
            <next position="relative"/>
        </template>
    </layout>
</template>
<script>
	export default {
		data () {
			return {
				showGuide: false,
				topImg: ""
			}
		},
		mounted () {
            this.init();
            this.firstInvent();
		},
		methods: {
			init () {
				try {
					this.topImg = "/resources/3banner.png";

					let needcachedata = this.$store.getters.h5FrameData["方案页设置"];
					needcachedata["方案顶图"] = "";
					for (let solutiondetail of needcachedata['方案列表']) {
						solutiondetail['详情入口图'] = "";
						solutiondetail['详情页顶图'] = "";
					}
					let dataStr = JSON.stringify(needcachedata);
					let reg = /\/resources\/.*?.(jpg|png|gif)/g;
					let images = dataStr.match(reg);

					if (images) {
						for (let idx in images) {
							let img = new Image();
							img.src = images[idx];
						}
					}
				} catch (e) {
					console.info('[e]', e);
				}
			},
			getCookie: function (c_name) {
				if (document.cookie.length > 0) {
					let c_start = document.cookie.indexOf(c_name + "=")
					if (c_start != -1) {
						c_start = c_start + c_name.length + 1
						let c_end = document.cookie.indexOf(";", c_start)
						if (c_end == -1) c_end = document.cookie.length
						return document.cookie.substring(c_start, c_end)
					} else {
						return ""
					}
				}
				return ""
			},
			firstInvent: function () {
				let getCookieRes = this.getCookie('cookieFirstLogin')
				if (getCookieRes == "true") {
					this.showGuide = false;
					this.$store.dispatch('setcookieFirstLogin', "false");
				} else if (getCookieRes == "false") {
					this.showGuide = false;
				} else {
					this.showGuide = true;
					this.$store.dispatch('setcookieFirstLogin', "true");
				}
			}
		}
	};
</script>
<style lang="less" scoped>
    .company-introduce {
        color: #fff;
    }

    .header-img {
        // height: 280px;
    }

    .title {
        height: 50px;
        padding-top: 20px;
        padding-left: 20px;
        font-size: 30px;
        font-style: italic;
        strong {
            font-weight: 900;
        }
    }

    .content-title {
        text-align: center;
        font-weight: bolder;
        font-size: 30px;
        .title1 {

        }
        .title2 {
            font-size: 20px;
        }
    }

    .content-text {
        padding: 20px;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 20px;
    }

    .gloalGuide {
        background-color: rgba(0, 0, 0, .8) !important;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .dot-img {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -20px;
            margin-top: -100px;
        }
        .up-img {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -23px;
            margin-top: -280px;
        }
        .down-img {
            position: absolute;
            bottom: 50%;
            left: 50%;
            margin-left: -23px;
            margin-bottom: -120px;
        }
        .guideFont {
            border: 1px solid #fff;
            font-size: 20px;
            padding: 10px;
            position: absolute;
            top: 78%;
            left: 50%;
            margin-left: -90px;
        }
    }
</style>
