import Vue from 'vue';
import Router from 'vue-router';
import companyIntroduce from '@/views/h5/companyIntroduce';
import welcome from '@/views/h5/welcome';
import contactus from '@/views/h5/contactus';
import growRecord from '@/views/h5/growRecord';
import global from '@/views/h5/global';
// import guide from '@/views/h5/guide';
import solution from '@/views/h5/solution';
import solutionDetail from '@/views/h5/solution-detail';

export const routes = [
	{
		path: '/',
		name: 'welcome',
		component: welcome
	},
	// {
	// 	path: '/guide',
	// 	name: 'guide',
	// 	component: guide
	// },
	{
		path: '/companyIntroduce',
		name: 'companyIntroduce',
		component: companyIntroduce
	},
	{
		path: '/growRecord',
		name: 'growRecord',
		component: growRecord
	},
	{
		path: '/global',
		name: 'global',
		component: global
	},
	{
		path: '/solution',
		name: 'solution',
		component: solution
	},
	{
		path: '/solution-detail',
		name: 'solutionDetail',
		component: solutionDetail,
		meta: {
			notNormalPage: true
		},
		afterEach: () => {
			window.scrollTo(0, 0);
		}
	},
	{
		path: '/contactus',
		name: 'contactus',
		component: contactus
	}
];

Vue.use(Router);

// 需要左方向动画的路由用this.$router.togo('****')
Router.prototype.togo = function (path, data) {
	this.isleft = true;
	this.isright = false;
	this.push({
		path: path,
		query: data
	});
	setTimeout(() => {
		this.isleft = false;
		this.isright = true;
	});
};
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
	this.isright = true;
	this.isleft = false;
	this.go(-1);
};

export default new Router({
	routes
});
