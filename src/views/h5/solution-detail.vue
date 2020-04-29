<template>
    <layout class="solution-detail" @swipe="swipe" @swipeDown="swipeDownHandle" @swipeUp="swipeUpHandle" :forbid="showDetGuide">
        <template #content>
            <van-image class="header-img" :src="url"/>

            <div class="list">
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item :title="item.title" :name="item.name" v-for="(item, index) in data" :key="index">
                        {{item.content}}
                        <template #icon>
                            <van-image class="icon-img" :src="item.iconImg"/>
                        </template>
                    </van-collapse-item>
                </van-collapse>
            </div>
            <div class="gloalGuide" :style="{ display: showDetGuide?'unset':'none' }" @click="showDetGuide=false">
                <van-image class="left-img" width="140" height="30" :src="require('@/assets/h5-images/6guild-l.png')"/>
                <van-image class="dot-Limg animated flash" width="30" height="30"
                           :src="require('@/assets/h5-images/2circle.png')"/>
                <div class="guideLF">向左翻页进入方案详情</div>
                <van-image class="down-img animated bounceInDown" width="30" height="140"
                           :src="require('@/assets/h5-images/2arrow-down.png')"/>
                <van-image class="up-img animated bounceInUp" width="30" height="140"
                           :src="require('@/assets/h5-images/2arrow-up.png')"/>
                <van-image class="dot-img animated flash" width="30" height="30"
                           :src="require('@/assets/h5-images/2circle.png')"/>
                <div class="guideFont">上下滑动查看其它方案详情</div>
            </div>
            <next position="relative" :forbid="true" @next="nextHandle"/>
        </template>
    </layout>
</template>
<script>
	export default {
		data () {
			return {
                showDetGuide: true,
				activeName: '1',
				colors: [
					'#66b9ff',
					'#7ed2fc',
					'#9bddc6',
					'#b6db9c',
					'#dbbc36',
					'#fab691',
				],
				url: '',
				data: [
					{
						iconImg: require('@/assets/h5-images/6-1icon1.png'),
						title: '标题1',
						name: 1,
						content: '内容内容内容内容内容内容内容内容内容内容内容内容内容'
					}
				],
				ids: []
			}
		},
		methods: {
			swipe (e) {
				switch (e.direction) {
					case 'Left':
						this.$router.togo('/solution');
						break;
					case 'Right':
						break;
				}
			},
			setIds (data) {
				data.forEach((c) => {
					this.ids.push(c['编号']);
				});
			},
			init () {
				let temp = this.$store.getters.h5FrameData['方案页设置']['方案列表'];
				this.setIds(temp);
				let temp1 = temp.filter(c => this.$route.query.id === c['编号']);
				let temp2 = temp1[0]['详情列表'];
				this.url = temp1[0]['详情页顶图'];
				this.data = [];
				temp2.forEach((c, i) => {
					/*
					标题: "快速编码"
                    标题图标: "http://localhost:8080/data/imgs/6-1icon1.png"
                    标题背景颜色: "#66b9ff"
                    编号: 1
                    详情内容:
					 */
					if (i === 0) {
						this.activeName = c['编号'];
					}
					this.data.push({
						iconImg: c['标题图标'],
						title: c['标题'],
						name: c['编号'],
						content: c['详情内容']
					});
				})

			},
			nextHandle() {
				this.swipeDownHandle();
            },
            getIndex() {
				let index = 0;
				this.ids.forEach((c, i) => {
					if (parseInt(c) === parseInt(this.$route.query.id)) {
						index = i;
					}
				});
				return index;
            },
			swipeDownHandle () {
				let temp = this.getIndex() + 1;
				if (temp <= (this.ids.length - 1)) {
					this.$router.togo('/solution-detail', {id: this.ids[temp]});
					this.init();
				} else {
					this.$router.togo('/contactus');
				}
			},
			swipeUpHandle () {
				let temp = this.getIndex() - 1;
				if (temp >= 0) {
					this.$router.togo('/solution-detail', {id: this.ids[temp]});
					this.init();
				} else {
					this.$router.togo('/solution');
				}
            },
            //判断是否展示引导图
            getCookie: function(c_name) {
                if (document.cookie.length>0){
                    var  c_start=document.cookie.indexOf(c_name + "=")
                    if (c_start!=-1){
                        c_start=c_start + c_name.length+1
                        var c_end=document.cookie.indexOf(";",c_start)
                        if (c_end==-1) c_end=document.cookie.length
                        return document.cookie.substring(c_start,c_end)
                    }else{
                        return ""
                    }
                }
                return ""
            },
            firstDetInvent: function(){
                var getCookieRes = this.getCookie('cookieSolutionDetail')
                if (getCookieRes == "true"){
                    this.showDetGuide = false;
                    this.$store.dispatch('setcookieSlution', "false");
                } else if (getCookieRes == "false") {
                    this.showDetGuide = false;
                } else {
                    this.showDetGuide = true;
                    this.$store.dispatch('setcookieSlution', "true");
                }
            }
		},
		mounted () {
            this.init();
            this.firstDetInvent();
		}
	};
</script>
<style lang="less" scoped>
    /deep/ .van-cell {
        .van-icon {
            color: #fff;
        }
    }

    /deep/ .van-collapse-item {
        border-radius: 10px;
        margin-bottom: 24px;

        .van-cell {
            background-color: #dbbc36;
        }

        &:nth-child(1) {
            .van-cell {
                background-color: #66b9ff;
            }
        }
        &:nth-child(2) {
            .van-cell {
                background-color: #7ed2fc;
            }
        }
        &:nth-child(3) {
            .van-cell {
                background-color: #9bddc6;
            }
        }
        &:nth-child(4) {
            .van-cell {
                background-color: #dbbc36;
            }
        }
        &:nth-child(5) {
            .van-cell {
                background-color: #fab691;
            }
        }
        &:nth-child(6) {
            .van-cell {
                background-color: #66b9ff;
            }
        }
        &:nth-child(8) {
            .van-cell {
                background-color: #7ed2fc;
            }
        }
        &:nth-child(9) {
            .van-cell {
                background-color: #dbbc36;
            }
        }
        &:nth-child(10) {
            .van-cell {
                background-color: #fab691;
            }
        }
        &:nth-child(11) {
            .van-cell {
                background-color: #9bddc6;
            }
        }
        .van-cell {
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        .van-collapse-item__wrapper {
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        .van-collapse-item__title--expanded {
            border-bottom-right-radius: 0px;
            border-bottom-left-radius: 0px;
        }
    }

    /deep/ .van-collapse-item__content {
        color: #444;
    }

    /deep/ .van-hairline--top::after {
        border-top-width: 0px;
    }

    /deep/ .van-hairline--top-bottom::after,
    /deep/ .van-hairline-unset--top-bottom::after {
        border-width: 0px 0;
    }

    /deep/ .van-cell__title {
        span {
            color: #fff;
        }
    }

    /deep/ .van-icon-arrow {
        color: #fff;
        font-size: 30px;
    }

    .icon-img {
        width: 18px;
        height: 20px;
        margin-right: 20px;
    }

    .list {
        position: relative;
        top: -20px;
        padding: 0 20px 0px 20px;
    }
</style>
<style lang="less" scoped>
    .gloalGuide {
        background-color: rgba(0, 0, 0, .8) !important;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .left-img{
            position: absolute;
            left: 20px;
            top: 20px;
        }
        .dot-Limg{
            position: absolute;
            top: 20px;
            left: 160px;
        }
        .guideLF{
            position: absolute;
            border: 1px solid #fff;
            font-size: 16px;
            padding: 10px;
            top: 65px;
            margin: auto;
            left: 50%;
            margin-left: -90px;
            color: #FFF;
        }
        .dot-img {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -15px;
            margin-top: -50px;
        }
        .up-img {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -15px;
            margin-top: -200px;
        }
        .down-img {
            position: absolute;
            bottom: 50%;
            left: 50%;
            margin-left: -15px;
            margin-bottom: -130px;
        }
        .guideFont{
            border: 1px solid #fff;
            font-size: 20px;
            padding: 10px;
            position: absolute;
            top: 78%;
            left: 50%;
            margin-left: -95px;
            color: #FFF;
            width: 190px;
            line-height: 1.3;
        }
    }
</style>