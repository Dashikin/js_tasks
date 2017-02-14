<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		function pow(x,n) {
		var result = x;
		for (var i = 1, i < n; i++) {
		result *= x;
		}
		return result;
		}
		
		var x = prompt(' Введите число! ', '');
		var n = prompt(' Введите степень (натуральное значение)! ', '');
		
		if (n <= 1) {
		alert(' Степень ' + n + ' не верна ' );
		} else {
		alert( pow(x,n) );
		}
		
			
	</script>

</body>

</html>
			