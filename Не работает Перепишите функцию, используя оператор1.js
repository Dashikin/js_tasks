<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		var age = prompt('Ваш возраст?', '');
		
		function checkAge(age) {
		return (age > 18) ? true : confirm(' Родители разрешили? ');
		}
		
		alert( checkAge(age) );
	
	</script>

</body>

</html>
		