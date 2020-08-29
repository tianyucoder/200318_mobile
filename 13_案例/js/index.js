/* 适配代码开始 */
function adapter(){
	//获取设备独立像素值
	const w = document.documentElement.clientWidth
	//计算根字体大小
	const rootFontSize = w/10;
	//设置根字体
	document.documentElement.style.fontSize = rootFontSize + 'px'
}
adapter()
window.onresize = adapter
/* 适配代码结束 */