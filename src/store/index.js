import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
import createLogger from 'vuex/dist/logger';
import getters from './getters.js';

Vue.use(Vuex);
const debug = false;
/* eslint-disable */
export default new Vuex.Store({
	modules: {
		main
	},
	getters,
	plugins: debug ? [createLogger()] : []   // 是否开启vuex的debug模式
});
