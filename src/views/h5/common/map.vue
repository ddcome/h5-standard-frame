<template>
    <div class="map">
        <div class="outer-cicle">
            <div class="dot dot1"></div>
            <div class="dot dot2"></div>
            <div class="dot dot3"></div>
            <div class="dot dot4"></div>
            <div class="dot dot5"></div>
            <div class="dot dot6"></div>
            <div class="dot dot7"></div>
            <div class="dot dot8"></div>
            <div class="dot dot9"></div>
            <div class="dot dot10"></div>
            <div class="dot dot11"></div>
            <div class="dot dot12"></div>
            <div class="dot dot13"></div>
        </div>

    </div>
</template>

<script>
	export default {
		data () {
			return {};
		}
	};
</script>

<style lang="less" scoped>
    .map {
        width: 410px;
        height: 200px;
        position: relative;
        background-image: url("~@/assets/h5-images/5map.png");
        background-size: 100% 100%;
        .dot {
            position: absolute;
            z-index: auto;
            display: inline-block;
            width: 13px;
            height: 13px;
            background-color: #fed81e;
            border-radius: 50%;
        }
        .dot1 {
            top: 46px;
            left: 18px;
            -webkit-animation: myAnimation 2s infinite;
            animation: myAnimation 2s infinite;
        }
        .dot2 {
            top: 51px;
            left: 72px;
        }
        .dot3 {
            top: 128px;
            left: 105px;
        }
        .dot4 {
            top: 52px;
            left: 163px;
        }
        .dot5 {
            top: 49px;
            left: 201px;
        }
        .dot6 {
            top: 45px;
            left: 196px;
        }
        .dot7 {
            top: 77px;
            left: 281px;
        }
        .dot8 {
            top: 49px;
            left: 321px;
            -webkit-animation: myAnimation 2s infinite;
            animation: myAnimation 2s infinite;
        }
        .dot9 {
            top: 55px;
            left: 343px;
        }
        .dot10 {
            top: 50px;
            left: 359px;
        }
        .dot11 {
            top: 87px;
            left: 343px;
        }
        .dot12 {
            top: 118px;
            left: 318px;
        }
        .dot13 {
            top: 146px;
            left: 365px;
        }
    }
    @keyframes myAnimation {
        0% {
            opacity: 0;
            filter: alpha(opacity=0)
        }
        100% {
            opacity: 1;
            filter: alpha(opacity=100)
        }
    }
</style>
