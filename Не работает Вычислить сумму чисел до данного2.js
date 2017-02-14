<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		var n = prompt(' Figure? ', '');
		
		function sumTo(n) {
		if (n == 1) return 1;
		return n + sumTo(n - 1);
		}
		
		alert( sumTo(n) );
	</script>

</body>

</html>