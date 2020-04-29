<template>
    <div class="loading-outer">
        <div class="holder">
            <div class="preloader">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="loading">
            <van-image class="inner-icon" :src="require('@/assets/h5-images/logo.png')"/>
        </div>
    </div>
</template>

<script>
	export default {};
</script>

<style lang="less" scoped>
    .loading-outer {
        background: unset;
    }
    .loading {
        width: 200px;
        height: 200px;
        position: absolute;
        z-index: auto;
        top: 50%;
        left: 50%;
        margin-left: -100px;
        margin-top: -100px;
        .inner-icon {
            width: 140px;
            height: 30px;
            position: absolute;
            z-index: 9;
            top: 50%;
            left: 50%;
            margin-top: -15px;
            margin-left: -70px;
        }
    }
    .holder {
        position: absolute;
        z-index: 999;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        width: 100%;
        height: 100%;
    }
    .preloader {
        position: absolute;
        width: 200px;
        height: 0%;
        padding-bottom: 200px;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .preloader div {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;
        animation: animatePreloader 2s infinite linear;
        transform-origin: 50% 100%;
    }
    .preloader div:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        border: 5px solid #fff;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .preloader div:nth-child(2) {
        width: 80%;
        height: 80%;
        top: 10%;
        animation: animatePreloader 1.2s infinite linear;
    }
    @keyframes animatePreloader {
        0% {
            transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
        }
        100% {
            transform: translateX(-50%) translateY(-50%) rotateZ(360deg);
        }
    }
</style>
