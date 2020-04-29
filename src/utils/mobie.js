//阻止左右翻页
var xStart, xEnd, yStart, yEnd;

document.addEventListener("touchstart", function (evt) {
	xStart = evt.touches[0].pageX;
	yStart = evt.touches[0].pageY;
}, false);

document.addEventListener('touchmove', function (evt) {
	xEnd = evt.touches[0].pageX;
	yEnd = evt.touches[0].pageY;
	//左右滑动
	if (Math.abs(xStart - xEnd) > Math.abs(yStart - yEnd)) {
		evt.preventDefault();
	}
}, false);