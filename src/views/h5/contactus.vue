<template>
    <layout class="contactus">
        <template #content>
            <van-image fit="cover" class="header-img" :src="topImg"/>
            <div class="title">联系我们</div>
            <van-image fit="cover" class="wx-img" :src="DRcode"/>
            <div class="cagzwm">长按关注我们</div>
            <div class="info">
                <p>联系电话：{{contactData.phone}}</p>
                <p>网址：{{contactData.network}}</p>
                <p>邮箱：{{contactData.email}}</p>
                <p>电话：{{contactData.adress}}</p>
            </div>
            <div class="tj" :style="{display: showTJ?'unset':'none' }" @click="showTJ=false">
                <van-image fit="fill" class="tj-img" :src="require('@/assets/h5-images/8fxyd.png')"/>
            </div>
            <next/>
        </template>
    </layout>
</template>
<script>
	export default {
		data() {
			return {
				showTJ: false,
                id: 0,
                contactData:{},
                topImg:"",
                DRcode:""
            }
        },
        mounted() {
			this.id = setTimeout(() => {
				this.showTJ = true;
				clearTimeout(this.id);
            }, 3000);
			this.init();
        },
        methods: {
			init () {
                let temp = this.$store.getters.h5FrameData['联系我们'];
                this.topImg = temp['顶图'];
                this.DRcode = temp["二维码"]
                Object.keys(temp).forEach(() => {
                    this.contactData.phone = temp['电话'];
                    this.contactData.network = temp['网址'];
                    this.contactData.email = temp['邮箱'];
                    this.contactData.adress = temp['地址'];
				});
		
			}
		},
        beforeDestroy() {
			clearTimeout(this.id);
        }
    };
</script>
<style lang="less" scoped>
    .contactus {
        text-align: center;
        color: #fff;
        .header-img {
            height: 240px;
        }
        .title {
            line-height: 50px;
            font-size: 20px;
            font-weight: bolder;
        }
        .cagzwm {
            padding: 10px 0 0 0;
        }
        .wx-img {
            width: 200px;
            height: 200px;
            margin: 0 auto;
        }
        .info {
            padding: 20px 40px;
            p {
                text-align: left;
                line-height: 20px;
            }
        }
        .tj {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(1, 1, 1, .7);
            .tj-img {

                width: 70%;
                height: 70%;
            }
        }
    }
</style>
