// enum используется для ограничения области значений той или иной переменной!

// По умолчанию енамы являются числовыми и их значения начинаются с нуля.
// Если в нижеследующем примере навести курсор мыши на значение "up" то мы увидим числовое представление енама равное нулю
// Пример 1:
enum direction {
    up,
    down,
    left,
    right
};

// Числовые значения енамов можно изменять. В нижеследующем примере изменено первое числовое значение. Нижеследующие значения изменились автоматически.
// Пример 2:
enum direction2 {
    up = 3,
    down,
    left,
    right
}
// Пример 3:
enum direction3 {
    up = 4,
    down = 2,
    left,
    right
}