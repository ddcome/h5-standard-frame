<template>
    <layout class="global" backgroundType="none">
        <template #content>
            <div class="title">
                为全球不同区域<br>
                提供支持与服务
            </div>
            <div class="map" id="mapId"></div>
            <next />
        </template>
    </layout>
</template>
<script>
    // import Map from './common/map.vue';
    import {series} from './common/map.js';
	export default {
		// components: {Map},
        methods: {
			init() {
				let options = {
					type: 'map',
					mapType: 'world',
					tooltip: {
						formatter: function(e) {
							if (typeof(e.value)[2] == "undefined" || e.name == "") {
								return e.name;
							} else {
								return 'IP<br>' + e.name + ':' + e.value[2];
							}
						}
					},
					geo: {
						map: 'world',
                        top: 'auto',
                        bottom: 10,
						zoom: 1.2,
						label: {
							emphasis: {
								show: false,
								color:'white'
							}
						},
						roam: false, //是否允许缩放
						itemStyle: {
							normal: {
								color: "#8bd8f4", //地图背景色
								borderColor: '#8bd8f4', //省市边界线
								borderWidth: 1
							},
							emphasis: {
								// color: '#fed81e' //悬浮背景
							}
						},
					},
					series: series
				};

				this.$echart.instance('mapId', options);
            }
        },
        mounted() {
			this.init();
        }
    };
</script>
<style lang="less" scoped>
    /deep/ .layout {
        background-image: unset !important;
    }
    /deep/ .layout-outer {
        overflow-y: hidden !important;
    }
    .global {
        height: 100%;
        background-color: unset;
        background-image: url("/resources/5bg.png") !important;
        background-size: 100% 100%;

        .title {
            text-align: center;
            width: 200px;
            height: 60px;
            color: #fff;
            font-weight: bolder;
            font-size: 24px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -30px;
            margin-left: -100px;
        }
        .map {
            position: absolute;
            bottom: 10%;
            height: 400px;
            width: 100%;
        }
    }
</style>
