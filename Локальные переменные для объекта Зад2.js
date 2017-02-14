function makeBuffer() {
var text = '';

  return function(p) {
	  if (arguments.length == 0) {
		  return text;
	  }
	  text += p;
  }
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log( buffer() );

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() ); 