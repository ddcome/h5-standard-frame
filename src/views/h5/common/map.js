let GeoCoordMap = {
	"西雅图": [-122.328013, 47.610766],
	"纽约": [-73.869714, 40.852422],
	"墨尔本": [144.954722, -37.791047],
	"北京": [116.334336, 39.906275],
	"古尔冈": [76.966832, 28.384251],
	"雅加达": [106.84344, -6.195915],
	"东京": [139.668589, 35.805591],
	"菲律宾": [121.895037, 12.595545],
	"首尔": [126.966183, 37.604282],
	"奥地利萨尔茨堡": [13.07082, 47.816657],
	"萨格勒布": [15.978757, 45.81963],
	"里斯本（葡萄牙）": [-9.150548, 38.777406],
	"圣保罗（巴西）": [-46.630722, -23.540714]
};

/**
 * 配置重点地区
 * @type {string[]}
 */
let LIGHTING = "西雅图";

/**
 * 配置发光地区
 * @type {string}
 */
let LIGHTING_ANIMATION = "北京";

function getLightingAnimationArea () {
	let res = {};
	Object.keys(GeoCoordMap).forEach((c) => {
		if (LIGHTING_ANIMATION.indexOf(c) >= 0) {
			res[c] = GeoCoordMap[c];
		}
	});
	return res;
}

function getLightingArea () {
	let res = {};
	Object.keys(GeoCoordMap).forEach((c) => {
		if (LIGHTING.indexOf(c) >= 0) {
			res[c] = GeoCoordMap[c];
		}
	});
	return res;
}

function getNotLightingArea () {
	let res = {};
	Object.keys(GeoCoordMap).forEach((c) => {
		if (LIGHTING.indexOf(c) < 0) {
			res[c] = GeoCoordMap[c];
		}
	});
	return res;
}

export function setLightingArea (areaName) {
	LIGHTING.push(areaName)
}

export let series = [];
let notLightingArea = getNotLightingArea();
series.push(
	{
		type: 'scatter',
		coordinateSystem: 'geo',
		zlevel: 2,
		// 括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
		// symbol: 'none',
		symbol: 'circle',
		symbolSize: function () {
			return 10; //圆环大小
		},
		itemStyle: {
			normal: {
				show: false,
				color: function () { //圆环显示文字
					return '#fed81e'
				},
				borderWidth: 0,
				opacity: 1
				// shadowColor: '#fed81e', //发光效果
				// shadowBlur: 4
			}
		},
		data: Object.keys(notLightingArea).map(function (key) {
			return {
				dataItem: key,
				name: key,
				value: notLightingArea[key]
			};
		})
	}
);

let lightingArea = getLightingArea();
series.push({
	type: 'scatter',
	coordinateSystem: 'geo',
	zlevel: 2,
	symbol: 'circle',
	symbolSize: function () {
		return 20; //圆环大小
	},
	itemStyle: {
		normal: {
			show: true,
			color: function () { //圆环显示文字
				return '#fed81e'
			},
			borderColor: '#fed81e',
			opacity: 1
		}
	},
	data: Object.keys(lightingArea).map(function (key) {
		return {
			dataItem: key,
			name: key,
			value: lightingArea[key]
		};
	})
});

let lightingAnimationArea = getLightingAnimationArea();
series.push({
	type: 'effectScatter',
	coordinateSystem: 'geo',
	zlevel: 2,
	rippleEffect: { //涟漪特效
		period: 3, //动画时间，值越小速度越快
		brushType: 'fill', //波纹绘制方式 stroke, fill
		scale: 4.2 //波纹圆环最大限制，值越大波纹越大
	},
	symbol: 'circle',
	symbolSize: function () {
		return 8; //圆环大小
	},
	itemStyle: {
		normal: {
			show: false,
			color: function () { //圆环显示文字
				return '#fed81e'
			},
			borderWidth: 0,
			shadowColor: '#fed81e', //发光效果
			shadowBlur: 4,
			opacity: 1
		}
	},
	data: Object.keys(lightingAnimationArea).map(function (key) {
		return {
			dataItem: key,
			name: key,
			value: lightingAnimationArea[key]
		};
	})
});
