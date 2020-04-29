<template>
    <a @click="next" class="animated bounce" :class="position==='absolute'?'next':'next-relative'">
        <van-image width="30" height="30" :src="require('@/assets/h5-images/pagedown.png')"/>
    </a>
</template>

<script>
	import {routes} from '@/router/index';
    import {deleteNotPageData} from '@/utils/tool';
	export default {
		data () {
			return {};
		},
		props: {
			forbid: {
				type: Boolean,
                default: false
            },
			position: {
				type: String,
				default: 'absolute' // absolute || relative
			}
		},
		methods: {
			next () {
				if (this.forbid) {
					this.$emit('next');
					return;
                }
				let currentPath = this.$route.path;
				let temp = deleteNotPageData(routes);
				// temp.pop();
				let index = 0;
				temp.forEach((c, i) => {
					if (currentPath === c.path) {
						index = (i + 1) >= temp.length ? 0 : (i + 1);
						this.$router.togo(temp[index].path);
						return
					}
				});
			}
		}
	};
</script>

<style lang="less" scoped>
    .next {
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -15px;
        z-index: 9999;
        img {
            color: #fff;
        }
    }

    .next-relative {
        position: relative;
        left: 50%;
        top: 30px;
        padding-bottom: 30px;
        margin-left: -15px;
        z-index: 9999;
        img {
            color: #fff;
        }
    }
</style>

