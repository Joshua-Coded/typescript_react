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

// const numbers: number[] = [];

// numbers.push(1);
// numbers.push(2, 9, 4, 34, 24, 24, 454, 25, 87, 343, 8787, 25454);
// console.log(numbers[4]);

// for (let i in numbers) {
//     console.log(numbers[i]);
// }

// numbers.forEach(function (num) {
//     console.log(num);
// })

// const customer = {
//     name: "lamb LTD",
//     turnover: 2343,
//     active: true
// };

// let customer: object;
// customer = {
//     name: "lamp ltd",
//     turnover: 3454657,
//     active: true
// };

// interface Product {
//     name: String;
//     unitPrice: number;
// }

// const chair: Product = {
//     productName: "Tables",
//     price: 70
// }

// interface OrderDetails {
//     product: Product;
//     quantity: number;
// }

// const table: Product = {
//     name: "Tables",
//     unitPrice: 70
// }


// const tableOrder: OrderDetails = {
//     product: table,
//     quantity: 1
// }

// interface OrderDetails {
//     product: Product;
//     quantity: number;
//     dateAdded?: Date,
//     getTotal(discount: number): number;
// }

// interface Product {
//     readonly name: string;
//     unitPrice: number;
// }

// const table: Product = {
//     name: "Table",
//     unitPrice: 500
// }

// table.name = "Better place";



// interface Product {
//     name: string;
//     unitPrice: number;
// }

// interface DiscountCode {
//     code: string;
//     percentage: number;
// }

// interface ProductWithDiscount extends Product {
//     discountCode: DiscountCode[];
// }

// const table: ProductWithDiscount = {
//     name: "Table",
//     unitPrice: 500,
//     discountCode: [
//         {code: "Summer10", percentage: 0.1}
//     ]
// }

class Product {
    name: string;
    unitPrice: number;
}

// const table = new Product();
// table.name = "Better place";
// table.unitPrice = 600;


interface DiscountCode {
    code: string;
    percentage: number;
}

// class OrderDetail implements IOrderDetail {
//     product: Product;
//     quantity: number;
// }

class ProductWithDiscountCodes extends Product {
    discountCodes: DiscountCode[];
}
const table = new ProductWithDiscountCodes();
table.name = "Better place";
table.unitPrice = 600;
table.discountCodes = [
    { code: "SUMMER10", percentage: 0.1 },
    { code: "BFRI", percentage: 0.2 }
]