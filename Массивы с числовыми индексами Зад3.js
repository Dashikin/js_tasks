var styles = ['Jazz', 'Blues'];
styles.push('Rock');
styles[styles.length - 2] = 'Clasic';
alert ( styles.shift() );
styles.unshift('Rap', 'Reggae');
console.log( styles );