<template>
    <div class="music">
        <van-image @click="changeOn" :class="isOff?'':'mRotate'" class="music-icon" width="30" height="30" :src="require('@/assets/h5-images/music.png')"/>
        <audio ref="oAudio" id="audio" preload controls autoplay hidden="true" loop :src="$store.getters.h5FrameData['首页设置']['背景音乐']">
        </audio>
    </div>
</template>

<script>
	export default {
		data () {
			return {
                isOff: false
            };
		},
        mounted() {
             // 自动播放音乐效果，解决微信自动播放问题
            document.addEventListener('touchstart',this.$refs.oAudio.audioAutoPlay,false);
            document.addEventListener('WeixinJSBridgeReady', this.$refs.oAudio.audioAutoPlay,false);
            this.$refs.oAudio.onended = function () {//播放完毕，重新循环播放
                this.$refs.oAudio.load();
                this.$refs.oAudio.play();
            };
            this.$refs.oAudio.addEventListener("playing", function(){//播放状态Doing
                this.isOff = false;
            });
        },
        methods: {
            changeOn: function () {
                if(this.isOff){
                    this.$refs.oAudio.play();//开始播放  
                }else{
                    this.$refs.oAudio.pause();//暂停播放 
                }
               this.isOff = !this.isOff;
            },
            audioAutoPlay() {
                this.isOff = false;
                this.$refs.oAudio.play();
                document.removeEventListener('touchstart',this.$refs.oAudio.audioAutoPlay);
            }
        }
	};
</script>

<style lang="less" scoped>
    .music {
        position: absolute;
        top: 20px;
        right: 20px;
        height: 30px;
        display: inline-block;
    }

    .music-icon {
        position: absolute;
        top: 10px;
        right: 15px;
        z-index: 999999;
    }
    .mRotate{
        -webkit-animation: imageIcon 1.5s infinite linear;
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
    }
    @-webkit-keyframes imageIcon {
        0% {
            transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
            -ms-transform: rotate(-360deg);
            -webkit-transform: rotate(-360deg);
        }
    }
</style>
