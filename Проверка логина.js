<!DOCTYPE HTML>
<html>

<body>

	<script>
		'use strict';
		var userName = prompt(' Кто пришел? ', '');
		if (userName == 'Админ') {
			var password = prompt(' Пароль? ', '');
			if (password == 'Черный Властелин') {
			alert(' Добро пожаловать! ');
			} else if (password == null) {
			alert(' Вход отменён ');
			} else {
			alert( 'Пароль неверен!' );
			}
		
		} else if (userName == null) {
		alert(' Вход отменён ');
		} else {
		alert(' Я Вас не знаю ');
		}
	</script>
	
</body>

</html>
			