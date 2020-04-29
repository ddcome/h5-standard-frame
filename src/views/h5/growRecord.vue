<template>
    <layout class="grow-record" backgroundType="image">
        <template #content>
            <van-image class="header-img" :src="$store.getters.h5FrameData['成长历程设置']['顶图']"/>
            <timeline :data="list"/>
            <next position="relative"/>
        </template>
    </layout>
</template>
<script>
    import {rebuildData} from "@/components/timeline/extra";

	export default {
		data () {
			return {
				list: []
			}
		},
		methods: {
			init () {
				let years = this.$store.getters.h5FrameData['成长历程设置']['成长历程'];
				let temp = [];
				Object.keys(years).forEach((c) => {
					let one = {
						year: '',
						list: []
					};
					one.year = c;
					let position = years[c]['位置'];
					years[c]['事件列表'].forEach((current) => {
						/*
                        描述: (...)
                        标题: (...)
                        样式: (...)
                        编号: (...)
                         */
						one.list.push({
							img: current['标题'],
							title: '',
                            model: position==='顶部对齐'?'row':position==='疏松交错'?'cross':'',
							style: current['样式']==='下划线'?'underline':'border',
							content: current['描述']
						});
					});
					temp.push(one);
				});
				this.list = rebuildData(temp);
				console.log('> list > ', this.list);
			}
		},
		mounted () {
			this.init();
		}
	};
</script>
<style lang="less" scoped>
</style>
