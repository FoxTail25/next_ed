// Tuple === Кортеж
// Кортеж можно задавать как через type так и сразу в переменной. В обоих случаях это будет валидный код.


type tup = [number, string, number];
const a: tup = [0,'a',1];

// const a:[number, string, number] = [0,'a',1];

let c = a.map(e => {
    if(typeof e === 'number') {
        console.log('it is number ', e);
        return e + 2;
    } else {
        console.log('it is string ', e);
        return e + '!';
    }
})
console.log(c)

let [b, ...rest] = c;
console.log(b)
console.log(rest)

