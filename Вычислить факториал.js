<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		var n = prompt(' Figure? ', '');
		function factorial(n) {
		return (n != 1) ? n * factorial(n - 1) : 1;
		}
		alert( factorial(5) );
	</script>

</body>

</html>