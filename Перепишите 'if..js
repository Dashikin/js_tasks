<!DOCTYPE HTML>
<html>

<body>

	<script>
		'use strict';
		var login = prompt (' Кто Вы? ', '');
		var message = (login == 'Вася') ? 'Привет' :
		(login == 'Директор') ? 'Здравствуйте' :
		(login == ' ') ? 'Нет логина' :
		' ';
		alert( message );
		</script>
	
</body>

</html>