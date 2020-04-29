// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*eslint-disable*/
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import store from './store';
import router from './router';
import FastClick from 'fastclick';
import './plugins/flexible.js';
import './plugins/vant';   // 完整引入Vant组件
import 'echarts/map/js/world.js';// 显示世界地图
import H5Echart from './plugins/echarts';
import './components';
import './styles/index.less';
import './styles/public.scss';
import animated from 'animate.css'; // npm install animate.css --save安装，在引入
Vue.use(animated);
Vue.use(H5Echart);
import VueTouch from 'vue-touch';

Vue.use(VueTouch, {name: 'v-touch'});
VueTouch.config.swipe = {
	threshold: 100 //手指左右滑动距离
};

import AlloyFinger from 'alloyfinger';
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue';

Vue.use(AlloyFingerPlugin,{
	AlloyFinger
});
//引入阿里巴巴淘票票官方图标库
import './iconFont/iconfont.css';

Vue.use(Vuex);
Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
});
