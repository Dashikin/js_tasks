function Calculator () {
	this.read = function() {
		this.x = +prompt('x?', '');
		this.y = +prompt('y?', '');
	};
	
	this.sum = function() {
		return this.x + this.y;
	};
	
	this.mul = function() {
		return this.x * this.y;
	};
}

var calculator = new Calculator();
calculator.read();

console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );