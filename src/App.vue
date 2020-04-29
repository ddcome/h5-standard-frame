<template>
    <div class="full-height">
        <!--@touchmove.prevent-->
        <transition>
            <keep-alive :include="['/']">
                <router-view class="Router"></router-view>
            </keep-alive>
        </transition>
        <music/>
    </div>
</template>

<script>

	export default {
		name: 'App',
		data () {
			return {
				initState: false,
				transitionName: ''
			};
		},
		methods: {}
	};

</script>

<style lang="less" scoped>
    @import "~styles/variable.less";

    .slideleft-enter,
    .slideright-leave-active {
        opacity: 1;
        transform: translate(100%, 0);
    }

    .slideleft-leave-active,
    .slideright-enter {
        opacity: 1;
        transform: translate(-100%, 0);
    }
</style>
