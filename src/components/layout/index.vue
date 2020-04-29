<template>
    <div :id="layoutId"
         class="layout-outer"
         :ref="refId"
         :class="backgroundType==='color'?'layout-1':backgroundType==='none'?'':'layout'"
         v-finger:swipe="swipeHandler">
        <slot name="content"></slot>
    </div>
</template>

<script>
	import {routes} from '@/router/index';
	import {deleteNotPageData} from '@/utils/tool';

	export default {
		data () {
			return {
				canEmitLeftAndRight: true,
				down: 0,
				up: 0,
				nextClickTimes: 0,
				preClickTimes: 0,
				hasScroll: false
			};
		},
		props: {
			backgroundType: {
				type: String,
				default: 'color' // color || image
			},
			forbid: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			layoutId () {
				return 'LayoutId' + this.$route.name;
			},
			refId () {
				return 'layoutRef' + this.$route.name;
			}
		},
		methods: {
			swipeHandler (e) {
				if (this.forbid) {
					return;
				}
				switch (e.direction) {
					case 'Up':
						if (this.hasScroll === false) {
							this.next();
						} else {
							if (this.down) {
								this.nextClickTimes++;
								if (this.nextClickTimes >= 2) {
									this.$store.dispatch('setAllowNext', true);
								}
							}
							if (this.$store.getters.allowNext) {
								this.next();
							}
						}
						break;
					case 'Down':
						if (this.hasScroll === false) {
							this.pre();
						} else {
							if (this.up) {
								this.preClickTimes++;
								if (this.preClickTimes >= 2) {
									this.$store.dispatch('setAllowPre', true);
								}
							}
							if (this.$store.getters.allowPre) {
								this.pre();
							}
						}
						break;
					case 'Left':
						if (this.canEmitLeftAndRight) {
							this.$emit('swipe', e)
						}
						break;
					case 'Right':
						if (this.canEmitLeftAndRight) {
							this.$emit('swipe', e)
						}
						break;
				}
			},
			next () {
				let currentPath = this.$route.path;
				if (currentPath === '/solution-detail') {
					this.$emit('swipeDown');
					return;
				}
				let temp = deleteNotPageData(routes);
				// temp.pop();
				let index = 0;
				temp.forEach((c, i) => {
					if (currentPath === c.path) {
						index = (i + 1) >= temp.length ? 0 : (i + 1);
					}
				});
				this.$router.togo(temp[index].path);
			},
			pre () {
				let currentPath = this.$route.path;
				if (currentPath === '/solution-detail') {
					this.$emit('swipeUp');
					return;
				}
				let temp = deleteNotPageData(routes);
				// temp.pop();
				let index = 0;
				temp.forEach((c, i) => {
					if (currentPath === c.path) {
						index = (i - 1) >= 0 ? (i - 1) : (temp.length - 1);
					}
				});
				this.$router.togo(temp[index].path);
			},
			action () {
				this.hasScroll = true; // 有滚动条
				this.initScrollData();
				let doc = this.$refs[this.refId];
				let top = doc.scrollTop;
				let h = doc.clientHeight;
				let total = top + h;
				let scrollH = doc.scrollHeight;

				if (top === 0) {
					this.$store.dispatch('setAllowPre', true);
					this.$store.dispatch('setAllowNext', false);
					this.up = true;
				} else if (top > 0 && (scrollH < total)) {
					this.$store.dispatch('setAllowPre', false);
					this.$store.dispatch('setAllowNext', false);
				} else if (top >= 0 && scrollH === total) {
					this.$store.dispatch('setAllowPre', false);
					this.$store.dispatch('setAllowNext', false);
					this.down = true;
				}
			},
			addListener () {
				this.hasScroll = false;
				document.getElementById(this.layoutId).addEventListener('scroll', this.action)
			},
			clear () {
				document.getElementById(this.layoutId).removeEventListener('scroll', this.action);
			},
			initScrollData () {
				this.$store.dispatch('setAllowPre', false);
				this.$store.dispatch('setAllowNext', false);
				this.canEmitLeftAndRight = true;
			},
			init () {
				this.preClickTimes = 0;
				this.nextClickTimes = 0;
				this.action();
				this.addListener();
			}
		},
		mounted () {
			this.init();
		},
		destroyed () {
			this.clear();
		}
	};
</script>

<style lang="less" scoped>
    .layout-outer {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    .layout {
        background-image: url('~@/assets/h5-images/bg.png');
        background-size: 100% 100%;
    }

    .layout-1 {
        background-color: #00abff;
    }
</style>

