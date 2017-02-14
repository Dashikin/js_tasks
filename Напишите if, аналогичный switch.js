<!DOCTYPE html>
<html>

<body>
	<script>    
		'use strict';
		var browser = prompt ( 'Какой у Вас браузер?', '' );
			if (browser == 'IE') {
			alert( 'О, да у Вас IE!' );
			}
			else if (browser == 'Chrome'
			|| browser == 'Firefox' 
			|| browser == 'Safari'
			|| browser == 'Opera') {
			alert( 'Да, эти браузеры мы поддерживаем' );
			}
			else {
			alert( 'Мы надеемся, что в Вашем браузере все ок!' );
			}
	</script>

</body>

</html>
	