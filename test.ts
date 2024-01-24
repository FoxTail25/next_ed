// Тип
// Типы полезны когда мы точно знаем что используем "string" или "number", а так же для литеральных типов.
type Point = {
	x: number,
	y: number
}
// добавление переменных в типы возможно с помощью "интерсептион"
type i3Dpoint = Point & {
	z: string
}
// У типа i3DPoint будут 3 аргумента: x - число, y - число, z - строка.


// В тайпСкрипте рекомендуется максимально использовать интерфейсы.
//Интерфейс
interface iPoint {
	x: number,
	y: string
}
// Интерфейсы могу наследовать(экстендить) другие интерфейсы - это их основное отличие от функций.
interface d3iPoint extends iPoint {
	z: number
}
// У интерфейса d3iPoint будут 3 аргумента: x - число, y - число, z - число.


interface Test {
	a: number
}
interface Test {
	b: string
}


function printD(coord: d3iPoint): string {
	return coord.x + coord.y
}

console.log(printD({ x: 4, y: 'z', z: 5 }))