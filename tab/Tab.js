
window.onload = function () {
	var tab_menu = document.getElementById("tab_menu");
	var tab_menu_li = tab_menu.getElementsByTagName("li");
	var message = document.getElementById("message");
	var message_li = message.getElementsByTagName("div");
	var len = tab_menu_li.length;

	for (var i = 0; i<len; i++) {
		tab_menu_li[i].index = i;
		tab_menu_li[i].onclick = function(){
			for (var j = 0; j < len; j++) {
				tab_menu_li[j].className = '';
				message_li[j].style.display= 'none';
			}
			tab_menu_li[this.index].className = 'selected';
			tab_menu_li[this.index].className = 'selected';
			message_li[this.index].style.display = 'block';
		};
	}
};