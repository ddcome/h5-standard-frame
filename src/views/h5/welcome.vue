<template>
    <layout class="welcome">
        <template #content>
            <loading/>
        </template>
    </layout>
</template>
<script>
	import loading from './common/loading.vue'
	import {query} from '@/api/main.js';

	export default {
		name: 'welcome',
		components: {loading},
		data () {
			return {
				count: 0
			}
		},
		methods: {
			completion: function () {
				this.count--;
				if (this.count <= 0) {
					this.$router.togo('/companyIntroduce');
				}
			}
		},
		mounted () {
			query(this.$route.query).then((data) => {

				var needcachedata = JSON.parse(JSON.stringify(data));
				needcachedata['首页设置'] = {};//移除首页相关资源
				for (let solutiondetail of needcachedata['方案页设置']['方案列表']) {
					solutiondetail['详情列表'] = [];
				}
				var dataStr = JSON.stringify(needcachedata);
				var reg = /\/resources\/.*?.(jpg|png|gif)/g;
				var images = dataStr.match(reg);
				if (images) {
					images.push('/resources/3banner.png');
					images.push('/resources/5bg.png');
					this.count = images.length;
				
					for(var idx in images){
						var img = new Image();
						var v = this;
						img.onload= function() {
							v.completion();
						};
						img.onerror= function(){
							v.completion();
						}
						img.src = images[idx];
					}
				}
				
				this.$store.dispatch('setH5FrameData', data);
            });
		}
	};
</script>
<style lang="less" scoped>
</style>
