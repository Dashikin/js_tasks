<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		Prime: for (var i = 2; i < 10; i++) {
			for (var j = 2; j < i; j++) {
				if (i % j == 0) continue Prime;
			}
			alert( i );
		}
	</script>
</body>

</html>