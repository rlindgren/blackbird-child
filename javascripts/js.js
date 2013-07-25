(function ResponsiveNavMenuFix () {
	
	function $ (identifier) {
		if (identifier[0] === '#') {
			return document.querySelector(identifier);
		} else {
			return document.querySelectorAll(identifier);
		}
	} 

	function toggle_search () {
		var child1 = $('.grid_5.omega')[0],
				child2 = $('.grid_19.alpha');
		if (window.innerWidth < 976 && child2.length > 0) {
			child1.style.width = (755 - parseInt(child2[0].style.width, 10)).toString() + "px";
			child1.style.height = "1px";
			child2[0].className = "grid_24";
		} else if (window.innerWidth > 974 && child2.length < 1) {
			$('.menu_wrapper > .grid_24')[0].className = "grid_19 alpha";
			child1.style.width = "190px";
			child1.style.height = "40px";
		}
	}

	toggle_search();
	window.onresize = toggle_search;

}());