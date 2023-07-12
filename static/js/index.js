function overviewBg() {
	$('#overview').backstretch([
		'static/images/overview/1.jpg',
		'static/images/overview/2.jpg',
		'static/images/overview/3.jpg',
		'static/images/overview/4.jpg',
		'static/images/overview/5.jpg',
		'static/images/overview/6.jpg'
	], {
		fade: 1500, // 动画时长
		duration: 2500 // 切换延时
	});
	$('#overview').backstretch("pause");
}

overviewBg()
$("#overview").show();
$('#overview').backstretch("show", 0);
$('#overview').backstretch("resume");

function clearMusk() {
	$("#overviewMusk").fadeOut();
}