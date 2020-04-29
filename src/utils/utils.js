const utils =  {
	//用于生成uuid
	S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	},
	getUuid() {
		return (this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4() + this.S4());
	},

	dateFtt(date, fmt) { //author: meizz
		try {
			if (date == null) {
				return '';
			}
			let dateTime;
			if (typeof date === 'string') {
				dateTime = new Date(date);
				if (JSON.stringify(dateTime) === 'null') {
					return date;
				}
			} else if(typeof date === 'number'){
				dateTime = new Date(date);
			}else{
        dateTime = date;
      }

			var o = {
				"M+": dateTime.getMonth() + 1, //月份
				"d+": dateTime.getDate(), //日
				"h+": dateTime.getHours(), //小时
				"m+": dateTime.getMinutes(), //分
				"s+": dateTime.getSeconds(), //秒
				"q+": Math.floor((dateTime.getMonth() + 3) / 3), //季度
				"S": dateTime.getMilliseconds() //毫秒
			};
			if (/(y+)/.test(fmt))
				fmt = fmt.replace(RegExp.$1, (dateTime.getFullYear() + "").substr(4 - RegExp.$1.length));
			for (var k in o)
				if (new RegExp("(" + k + ")").test(fmt))
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return fmt;
		} catch (e) {
			return dateTime;
		}
	}
}

export default utils
