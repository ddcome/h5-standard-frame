<template>
    <div class="row-box" :key="'row-box-' + id" :style="{width: type==='cross'?'100%':'50%'}">
        <div
                :key="'row-box-left-' + id"
                class="left-box"
                v-if="(type==='cross') && (className==='right-box')">
        </div>
        <div :key="'row-box-' + className + id"
             :class="className"
             :style="{marginBottom: padding, width: type==='row'?'100%':'50%'}">
            <div
                    class="time-dot small"
                    :class="className==='right-box'?' time-dot-right':''"
            >
                <div class="time-dot-inner"></div>
            </div>
            <van-image class="content-title-img" v-if="img" :src="img"/>
            <div class="content-title">{{title}}</div>
            <div :class="contentStyle?(contentStyle==='underline'?'content-description-no-border': 'content-description'):'content-description'">
                <span :class="contentStyle==='underline'?'text-style':''">{{content}}</span>
                <i v-if="typeof hasJT !== 'undefined'?hasJT:true" class="icon-jt"></i>
            </div>
        </div>
        <div
                :key="'row-box-right-' + id"
                class="right-box"
                v-if="('cross' === type) && (className==='left-box')">
        </div>
    </div>
</template>

<script>
	export default {
		data () {
			return {};
		},
		props: {
			type: {
				type: String, // row, cross
				required: true
            },
			id: {
				type: String,
				required: true
			},
			className: {
				type: String,
				required: true,
				default: 'left-box' // right-box
			},
			padding: {
				type: String,
				default: '10px'
			},
			img: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			contentStyle: {
				type: String,
				default: 'underline'
			},
			content: {
				type: String,
				default: ''
			},
			hasJT: {
				type: Boolean
			}
		}
	};
</script>

<style lang="less" scoped>
    .row-box {
        display: inline-block;
        margin: 0;
        padding: 0;
    }
    .left-box {
        display: inline-block;
        width: 50%;
        vertical-align: top;
        position: relative;
    }

    .right-box {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        position: relative;
    }

    .left-box .content-title,
    .right-box .content-title {
        color: orange;
        font-weight: bolder;
        font-size: 14px;
        margin-left: 20px;
    }

    .left-box .content-title {
        margin-left: 30px;
    }

    .left-box .content-title-img,
    .right-box .content-title-img {
        width: 120px;
    }

    .left-box .content-title-img {
        margin-left: 30px;
    }

    .right-box .content-title-img {
        margin-left: 20px;
    }

    .left-box .content-description,
    .right-box .content-description {
        margin: 10px 0;
        font-size: 12px;
        border: 1px solid #fff;
        padding: 5px 10px;
        line-height: 18px;
        width: calc(100% - 50px);
        border-radius: 10px;
        position: relative;
        .icon-jt {
            position: absolute;
            top: 20px;
            right: -15px;
            transform: rotate(180deg);
        }
        .icon-jt:before, .icon-jt:after {
            position: absolute;
            content: '';
            border-top: 5px transparent dashed;
            border-left: 7px transparent dashed;
            border-bottom: 5px transparent dashed;
            border-right: 7px #fff solid;
        }
        .icon-jt:before {
            border-right: 7px #fff solid;
        }
        .icon-jt:after {
            left: 2px; /*覆盖并错开1px*/
            border-right: 7px #00abff solid;
        }
    }

    .left-box .content-description-no-border,
    .right-box .content-description-no-border {
        margin: 10px 0;
        font-size: 12px;
        padding: 5px 5px;
        line-height: 19px;
        width: calc(100% - 50px);
        position: relative;
        .icon-jt {
            display: none;
        }
    }

    .left-box .content-description,
    .left-box .content-description-no-border {
        left: 30px;
    }

    .right-box .content-description,
    .right-box .content-description-no-border {
        left: 20px;
        .icon-jt {
            position: absolute;
            left: -15px;
            top: 10px;
            transform: rotate(360deg);
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

    .text-style {
        border-bottom: 1px solid #fff;
    }
</style>
