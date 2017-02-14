function getSecondsToday() {
	var now = new Date ();
	var today = newDate(now.getFullYear(), now.getMonth(), now.getDate());
	var diff = now - today;
	return Math.floor(diff / 100);
}
console.log (getSecondsToday() );