import Mock from 'mockjs'

Mock.mock('/fsfdsf', 'get', () => {
	// 返回模拟数据
	return {
		data: '423424'
	}
});
