<!DOCTYPE HTML>
<html>

<body>

	<script>
		'use strict';
		function isInteger(num) {
			return (num ^ 0) === num;
		}
		
		alert( isInteger(1) ); 
		alert( isInteger(1.5) ); 
		alert( isInteger(-0.5) );
	
	</script>
	
</body>

</html>