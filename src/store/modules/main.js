/**
 * home.js
 * 用于home模块的状态管理
 */

let h5FrameData = localStorage.getItem('h5FrameData');
try {
	h5FrameData = JSON.parse(h5FrameData);
	// eslint-disable-next-line no-empty
} catch (e) {
}

/* eslint-disable */
const main = {
	state: {
		h5FrameData: h5FrameData || {},
		allowPre: false,
		allowNext: false,
		cookieFirstLogin: "",
		cookieSolutionDetail:"",
	},
	actions: {
		setH5FrameData (context, h5FrameData) {
			context.commit('setH5FrameData', h5FrameData);
		},
		setAllowPre (context, allowPre) {
			context.commit('setAllowPre', allowPre);
		},
		setAllowNext (context, allowNext) {
			context.commit('setAllowNext', allowNext);
		},
		setcookieFirstLogin (context, isFirstLogin) {
			context.commit('setcookieFirstLogin', isFirstLogin);
		},
		setcookieSlution (context, isFirstLogin) {
			context.commit('setcookieSlution', isFirstLogin);
		}
	},
	mutations: {
		setH5FrameData (state, h5FrameData) {
			state.h5FrameData = h5FrameData;
			localStorage.setItem('h5FrameData', JSON.stringify(h5FrameData));
		},
		setAllowPre (state, allowPre) {
			state.allowPre = allowPre;
		},
		setAllowNext (state, allowNext) {
			state.allowNext = allowNext;
		},
		setcookieFirstLogin (state, isFirstLogin) {
			state.cookieFirstLogin = isFirstLogin;
			document.cookie = "cookieFirstLogin =" + isFirstLogin;
		},
		setcookieSlution (state, isFirstLogin) {
			state.cookieSolutionDetail = isFirstLogin;
			document.cookie = "cookieSolutionDetail =" + isFirstLogin;
		}
	}
};
export default main;
