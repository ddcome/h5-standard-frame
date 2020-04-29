let records = [];

/**
 * 重组数据
 */
export function rebuildData (data) {
	records = [];
	data.forEach((c, i) => {
		let last_position = 'L';
		let even = getJO(c.list);
		if (i === 0) {
			c['START_POSITION'] = 'L';
			if (even) { // 偶数
				last_position = 'R';
			} else {
				last_position = 'L';
			}
			records.push(last_position);
		} else {
			// 记录
			if (records[i - 1] === 'L') {
				c['START_POSITION'] = 'R';
				if (even) {
					last_position = 'L';
				} else {
					last_position = 'R';
				}
			} else {
				c['START_POSITION'] = 'L';
				if (even) {
					last_position = 'R';
				} else {
					last_position = 'L';
				}
			}
			records.push(last_position);
		}
	});
	return data;
}

/**
 * 获取奇偶数.
 * @param data
 * @returns {boolean}
 */
function getJO (data) {
	return data.length % 2 === 0;
}