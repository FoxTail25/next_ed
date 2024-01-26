// enum используется для ограничения области значений той или иной переменной!
// По умолчанию енамы являются числовыми и их значения начинаются с нуля.
// Если в нижеследующем примере навести курсор мыши на значение "up" то мы увидим числовое представление енама равное нулю
// Пример 1:
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
;
// Числовые значения енамов можно изменять. В нижеследующем примере изменено первое числовое значение. Нижеследующие значения изменились автоматически.
// Пример 2:
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 3] = "up";
    Direction2[Direction2["down"] = 4] = "down";
    Direction2[Direction2["left"] = 5] = "left";
    Direction2[Direction2["right"] = 6] = "right";
})(Direction2 || (Direction2 = {}));
// Пример 3:
// В примере 2 и 3 приведены числовые енамы. В примере 3 значение up и значение right будут равны 4
var Direction3;
(function (Direction3) {
    Direction3[Direction3["up"] = 4] = "up";
    Direction3[Direction3["down"] = 2] = "down";
    Direction3[Direction3["left"] = 3] = "left";
    Direction3[Direction3["right"] = 4] = "right";
})(Direction3 || (Direction3 = {}));
// так же помимо числовых енамов бывают строковые.
// Пример 4 строковый енам (в строковых енамах автоматическое назначени значений не работает)
var Direction4;
(function (Direction4) {
    Direction4["up"] = "UP";
    Direction4["down"] = "DOWN";
    Direction4["left"] = "LEFT";
    Direction4["right"] = "RIGHT";
})(Direction4 || (Direction4 = {}));
// В гетерогенных енамах дествует тот же набор правил которые используются для строковых и числовыъ енамов
// Пример 5: Гетерогенный енам (строковый и числовой)
var Direction5;
(function (Direction5) {
    Direction5["up"] = "UP";
    Direction5[Direction5["down"] = 1] = "down";
    Direction5[Direction5["left"] = 2] = "left";
    Direction5["right"] = "RIGHT";
})(Direction5 || (Direction5 = {}));
// Значения енамов могут быть вычисляемыми
// Пример 6: Расчётные енамы
var Direction6;
(function (Direction6) {
    Direction6["up"] = "up";
    Direction6[Direction6["down"] = getEnumValue()] = "down";
    Direction6[Direction6["left"] = 3] = "left";
    Direction6[Direction6["right"] = 4] = "right";
})(Direction6 || (Direction6 = {}));
function getEnumValue() {
    return 2;
}
// Даже если расчётный енам возвращает число, автозаполнение нижеследующих значений енама работать не будет!
// Расчитываемые енамы могут быть только числовыми.
//-----------------------------------------------------------------------------------
// Так же енамы можно использоважть как объекты
// Пример:
function runEnum(obj) {
    console.log(obj.up);
}
// runEnum(Direction3) // выведет 3
// runEnum(Direction4) // выведет 'UP'
//------------------------------------------------------------------------------------
// Обратный маппинг
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
var test = Test.A;
//console.log('маппинг', test); // выведет 0
var nameA = Test[test];
var c = 5 /* ConstEnum.A */;
// let nameC = ConstEnum[c] // Если енам является константой, то в отличии от обысного енама доступ к его переменным невозможен по числовому значению
console.log(c); // выведет 5
// console.log(ConstEnum[c]) // Если енам является константой, то это работать не будет!!
