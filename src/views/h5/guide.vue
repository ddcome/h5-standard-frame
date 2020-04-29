<template>
    <layout class="guide">
        <template #content>
            <div @click="clickHandle">
                <van-image class="down-img animated bounceInDown" width="46" height="180"
                           :src="require('@/assets/h5-images/2arrow-down.png')"/>
                <van-image class="up-img animated bounceInUp" width="46" height="180"
                           :src="require('@/assets/h5-images/2arrow-up.png')"/>
                <van-image class="dot-img animated flash" width="40" height="40"
                           :src="require('@/assets/h5-images/2circle2.png')"/>
            </div>
        </template>
    </layout>
</template>
<script>
	export default {
		methods: {
			clickHandle () {
				this.$router.togo('/companyIntroduce');
			}
		}
	};
</script>
<style lang="less" scoped>
    .guide {
        background-color: rgba(0, 0, 0, .7) !important;
    }

    .guide {
        .dot-img {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -20px;
            margin-top: -20px;
        }
        .up-img {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -23px;
            margin-top: -200px;
        }
        .down-img {
            position: absolute;
            bottom: 50%;
            left: 50%;
            margin-left: -23px;
            margin-bottom: -200px;
        }
    }
</style>
