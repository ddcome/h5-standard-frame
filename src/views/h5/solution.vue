<template>
    <layout class="solution" @swipe="swipe">
        <template #content>
            <van-image class="header-img" :src="url"/>
            <div class="remindMsg">
                <div  class="animated bounceIn">点击查看详情</div>
                <img class="animated fadeInRight" src="@/assets/h5-images/6finger.png" alt="">
            </div>
            <div class="list" ref="list">
                <van-image  v-for="(item, index) in data" :key="index" class="list-item" :src="item.img" @click.stop="itemClick(item)"/>
            </div>
            <next position="relative"/>
        </template>
    </layout>
</template>
<script>
	export default {
		data () {
			return {
				data: [],
                url: '',
                
			};
		},
		methods: {
			itemClick(item) {
				this.$router.togo('/solution-detail', {id: item.id});
            },
			swipe (e) {
				switch (e.direction) {
					case 'Left':
						break;
					case 'Right':
						break;
				}
			},
            init() {
				let temp = this.$store.getters.h5FrameData['方案页设置']['方案列表'];
				this.url = this.$store.getters.h5FrameData['方案页设置']['方案顶图'];
				this.data = [];
				temp.forEach((c) => {
					this.data.push(
                        {
							id: c['编号'],
							img: c['详情入口图']
                        }
                    );
                });
            }
		},
        mounted () {
			this.init();
        }
	};
</script>
<style lang="less" scoped>
    .solution {
        .remindMsg{
            color: #fff;
            font-size: 20px;
            text-align: right;
            padding-right: 13%;
            margin-top: 15px;
            img{
                vertical-align:middle;
                width: 40px;
                // animate-duration: 2s;    //动画持续时间
                -webkit-animation-delay:1s;
                animate-delay: 1s;    //动画延迟时间
                // animate-iteration-count: 2;    //动画执行次数
            }
        }
        .list {
            padding: 0px 20px 20px;
            text-align: center;
            .list-item {
                display: block;
                height: 65px;
                width: 90%;
                margin: 10px auto;
                align: left;
            }
        }
    }
</style>
