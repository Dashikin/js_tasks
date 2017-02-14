var obj = {
  className: 'open menu'
}

function addClass(obj, cls) {
	var classes = obj.className ? obj.className.split(' ') : [];
	for (var i = 0; i < classes.lenght; i++) {
		if (classes[i] == сды) return;
	}
	
	classes.push(cls);
	
	obj.className = classes.join(' ');
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className)