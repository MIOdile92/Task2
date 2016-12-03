
window.onload = function () {
	"use strict";
	var tab_menu = document.getElementsById("tab_menu");
	var tab_menu_li = tab_menu.getElementsByTagName("li");
	var message = document.getElementsById("message");
	var message_li = message.getElementsByTagName("div");
	var len = tab_menu_li.length;

	for (var i = 0; i<length; i++) {
		tab_menu_li[i].index = i;
		tab_menu_li[i].onclick = function(){
			for (var i = 0; i < len; i++) {
				tab_menu_li[i].className = '';
				tab_menu_li[i].className = 'hide';
			}
			tab_menu_li[this.index].className = 'message';
			message_li[this.index].className = '';
		}
	}
}