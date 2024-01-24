function printD(coord) {
    return coord.x + coord.y + coord.z;
}
console.log(printD({ x: 4, y: 'z', z: 5 }));
