function makeBuffer() {
var text = '';

  return function(p) {
	  if (arguments.length == 0) {
		  return text;
	  }
	  text += p;
  }
  buffer.clear = function() {
	  text = '';
  }
  return buffer;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); 

buffer.clear();

alert( buffer() ); 