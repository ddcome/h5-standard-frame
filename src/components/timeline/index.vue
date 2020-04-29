<template>
    <div class="timeline">
        <template v-for="(item, index) in data">
            <div class="time-dot" :key="'time-dot' + index">
                <div class="time-dot-inner">
                    <span class="time-label">{{item.year}}</span>
                </div>
            </div>
            <div :key="'bg-block' + index" class="bg-block">
                <div class="line"></div>
                <div class="content">
                    <template v-for="(one, i) in item.list">
                        <RowBox
                                :key="'RowBox-' + index+ '-' + i"
                                :type="one.model"
                                :id="index+ '-' + i"
                                :className="whichClassName(item, i)"
                                :padding="config.padding"
                                :img="one.img"
                                :title="one.title"
                                :contentStyle="one.style"
                                :content="one.content"
                                :hasJT="config.hasJT"
                        ></RowBox>
                    </template>

                </div>
            </div>
        </template>
    </div>
</template>

<script>
	import RowBox from './row-box.vue';

	/**
	 * 最小单元
	 * {
     *       year: '',
     *       list: [
     *           {
     *               img: require('@/assets/h5-images/logo.png'),
     *               model: 'cross',
     *               title: 'Real Producuter HD发布',
     *               style: 'underline', // border
     *               content: '为用户提供多种使用彩铃的方式,为用户提供多种使用彩铃的方式为用户提供多种使用彩铃的方式'
     *           }
     *       ]
     * }
	 */
	export default {
		props: {
			config: {
				type: Object,
				default: () => {
					return {
						model: 'cross', // cross 交错模式; row 并排左右
						padding: '10px',
						hasJT: true, // 是否有箭头
					};
				}
			},
			data: {
				type: Array,
				default: () => {
					return [];
				}
			},
		},
		components: {RowBox},
		methods: {
			whichClassName (c, i) {
				if (c.START_POSITION) {
					return i % 2 === (c.START_POSITION === 'L' ? 0 : 1) ? 'left-box' : 'right-box';
				} else {
					return i % 2 === 0 ? 'left-box' : 'right-box';
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
    .timeline {
        margin-top: 50px;
        .bg-block {
            /*height: 100px;*/
            position: relative;
            .line {
                width: 2px;
                background-color: #fff;
                height: 100%;
                position: absolute;
                left: 50%;
                margin-left: -1px;
            }
            .content {
                color: #fff;
                font-size: 0;
            }
        }
        .time-dot {
            margin: 0 auto;
            position: relative;
            width: 55px;
            height: 55px;
            border: 2px solid #fff;
            border-radius: 45px;
            .time-dot-inner {
                position: absolute;
                top: 3px;
                left: 3px;
                right: 3px;
                bottom: 3px;
                width: 45px;
                height: 45px;
                background-color: #fff;
                border-radius: 45px;
                text-align: center;
                .time-label {
                    font-size: 16px;
                    font-weight: bolder;
                    line-height: 45px;
                    color: #00abff;
                }
            }
        }
        .time-dot.small {
            position: absolute;
            top: 10px;
            right: -6px;
            border: 1px solid #fff;
            width: 12px;
            height: 12px;
            .time-dot-inner {
                width: 8px;
                height: 8px;
                top: 1px;
                left: 1px;
                bottom: 1px;
                right: 2px;
            }
        }
        .time-dot.small.time-dot-right {
            right: unset;
            left: -6px;
        }
    }
</style>
