// Object Property Shorthand

const name = 'Caleb';
const userAge = 31;

const user = {
    name, //shorthand for the property that grabs a value from a variable with the same name
    age: userAge,
    location: 'Hermosillo'
};

console.log(user);

// Object destructuring
const product = {
    label: 'Blue notebook',
    price: 4,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
};

// const { label:productLabel, price, rating=5 } = product;
// console.log(productLabel);
// console.log(price);
// console.log(rating);

//Destructuring an object as parameters in function
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);