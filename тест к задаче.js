describe('любое число, кроме нуля, в нулевой степени равно 1', function() {
  function makeTest(x) {
    it('При возведении ' + x + ' в степень 0 результат - 1', function() {
	assert.equal(pow(x, 0), 1);
	});
	}
	for (var x = -5; x ,<= 5; x += 2) {
	makeTest(x);
	}
	
	});
	
	it('0 в нулевой степени равно NaN', function() {
	  assert( isNan(pow(0, 0)), '0 в степени 0 не NaN');
	});
	

	