function getLastDayOfMonth(year, month) {
	var date = ne Date(year, month + 1, 0);
	return date.getDate();
}

console.log( getLastDayOfMonth(2012, 1) );
