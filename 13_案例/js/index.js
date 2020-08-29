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

/* 底部导航切换逻辑 */
//所有的底部导航项
const footerItems = document.querySelectorAll('#footer .footer_item')
//所有的底部导航图标
const footerIcons = document.querySelectorAll('#footer .footer_item .footer_icon')
//所有的底部导航文字
const footerTexts = document.querySelectorAll('#footer .footer_item .footer_text')
//所有的屏
const contentItems = document.querySelectorAll('#content .content_item')

for (let i = 0; i < footerItems.length; i++) {
	footerItems[i].addEventListener('touchstart',function(){
		//1.清除所有高亮
		for (let j = 0; j < footerItems.length; j++) {
			footerIcons[j].className = 'footer_icon'
			footerTexts[j].className = 'footer_text'
			contentItems[j].className = 'content_item'
		}
		//2.点谁谁高亮
		footerIcons[i].className = 'footer_icon active'
		footerTexts[i].className = 'footer_text active'
		//3.切换每一屏
		contentItems[i].className = 'content_item active'
	})
}

