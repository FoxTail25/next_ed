// // Кортеж
// interface tup {
//    [number, string, number]
// }
var a = [0, 'a', 1];
var c = a.map(function (e) {
    if (typeof e === 'number') {
        console.log('it is number ', e);
        return e + 2;
    }
    else {
        console.log('it is string ', e);
        return e + '!';
    }
});
console.log(c);
var b = c[0], rest = c.slice(1);
console.log(b);
console.log(rest);
