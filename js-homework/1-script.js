let userAge = 20+1;
let bigInt = 151851850485185185047n;
let userName = "String";
let namefildedChecked = true;
let Null = null;
let height;
let user = {
    name: "vasya",
    age: 20,
};
let pass = Symbol("123");

console.log(Number(userAge), String(userAge), Boolean(userAge));
console.log(Number(bigInt), String(bigInt), Boolean(bigInt));
console.log(Number(userName), String(userName), Boolean(userName));
console.log(Number(namefildedChecked), String(namefildedChecked), Boolean(namefildedChecked));
console.log(Number(Null), String(Null), Boolean(Null));
console.log(Number(height), String(height), Boolean(height));
console.log(Number(user), String(user), Boolean(user));
console.log(pass.valueOf(), pass.toString());
console.log(Boolean(pass));