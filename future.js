// primitives types
// string
// number
// boolean
// undefined
// null
// type annotations
// this helps us catch bug where our code is using the wrong type, much earlier than we would if we were writing our code in javscript.
// typescript let us declare variables with types using the :Type syntax.
// let unitPrice: number;
// unitPrice = 10
// var threeSqaured: number = 3 ** 4;
// console.log(threeSqaured);
// let flag = false;
// enum OrderStatus {
//     Paid,
//     Shipped,
//     Completed,
//     Cancelled
// }
// const customer = {
//     name: "lamb LTD",
//     turnover: 234242,
//     active: true
// };
var numbers = [];
numbers.push(1);
numbers.push(2, 9, 4, 34, 24, 24, 454, 25, 87, 343, 8787, 25454);
console.log(numbers[4]);
for (var i in numbers) {
    console.log(numbers[i]);
}
numbers.forEach(function (num) {
    console.log(num);
});
