function truncate(str, maxlength) {
  var maxlength = prompt( 'maxlength?', '');
  var str = 'Вот, что мне хотелось бы сказать на эту тему';

  
    if ( str.length > maxlength ) {
    return str = str.substr(0, maxlength) + '...');
    }
    return str;
}
console.log( truncate(str, maxlength);
