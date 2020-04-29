
export function deleteNotPageData (data) {
	let temp = JSON.parse(JSON.stringify(data));
	let deleteRecords = [];
	temp.forEach((c, i) => {
		if (c.meta && c.meta.hasOwnProperty('notNormalPage') && c.meta.notNormalPage) {
			deleteRecords.push(i);
		}
	});
	// 仅限逐一删除
	if (deleteRecords.length > 1) {
		for (let i = 1; i < deleteRecords; i++) {
			deleteRecords[i] = deleteRecords[i] - i;
		}
	}
	deleteRecords.forEach((c) => {
		temp.splice(c, 1);
	});
	return temp;
}
