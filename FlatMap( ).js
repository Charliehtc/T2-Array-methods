//El método flatMap() primero mapea cada elemento usando una función de mapeo, 
//luego aplana el resultado en una nueva matriz.

var arr1 = [1, 2, 3, 4];

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// solo un nivel es aplanado
arr1.flatMap(x => [[[x * 2]]]);
// [[2], [4], [6], [8]]