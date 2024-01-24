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


function printD(coord: Test): string {
	return coord.a + coord.b
}

console.log(printD({ a: 4, b: 'z' }))


// Каст типов
const c = (point: iPoint) => {
	const d: d3iPoint = point as d3iPoint // конвертация типов
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement  // Если мы не закастуем (не допишем as HTMLCanvasElement) то втунти переменной myCanvas будет либо HTMLElement либо null)