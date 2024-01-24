// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "detect aut autem",
// 	"info": {
// 		"desk": "detectus aut autem",
// 		"isActive": true
// 	},
// 	"tags": [
// 		{
// 			"name": "my name",
// 			"value": 1000
// 		}
// 	]
// }

interface Info {
	desk: string;
	isActive: boolean;
}
interface Tag {
	name: string;
	value: number;
}
interface Reply {
	userId: number;
	id: number;
	title: string;
	info: Info;
	tags: Tag[];
}