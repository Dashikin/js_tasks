var calculator = {
  read: function() {
	  this.x = +prompt( 'x?', '');
	  this.y = +prompt( 'y?', '');
  },
  
  sum: function() {
	  return this.x + this.y;
  },
  
  mul: function() {
	  return this.x * this.y;
  }
}

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );