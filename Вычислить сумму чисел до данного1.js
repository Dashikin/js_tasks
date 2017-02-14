<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		var n = prompt(' Figure? ', '');
		
		function sumTo(n) {
		var sum = 0;
		for (var i = 1; i <= n; i++) {
		sum += i;
		}
		return sum;
		}
		alert( sumTo(n) );
	</script>

</body>

</html>