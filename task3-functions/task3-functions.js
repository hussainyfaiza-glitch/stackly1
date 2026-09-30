// ==========================================
// Task 3 - JavaScript Functions & Async/Await
// ==========================================

// 1. Function Declaration
function addNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addNumbers(10, 20);
console.log("1. Sum =", sum);

console.log("----------------------");

// 2. Function with Parameters & Return Value
function calculateArea(length, width) {
    return length * width;
}

const length = 10;
const width = 5;
const area = calculateArea(length, width);

console.log("2. Length =", length);
console.log("Width =", width);
console.log("Area =", area);

console.log("----------------------");

// 3. Function Expression
const greetUser = function(name) {
    return "Welcome " + name + "!";
};

console.log("3.", greetUser("John"));

console.log("----------------------");

// 4. Arrow Function - Basic
const multiplyNumbers = (num1, num2) => {
    return num1 * num2;
};

console.log("4. Result =", multiplyNumbers(4, 5));

console.log("----------------------");

// 5. Arrow Function - Multiple Parameters
const getUserInfo = (name, age) => {
    return `${name} is ${age} years old`;
};

console.log("5.", getUserInfo("John", 25));

console.log("----------------------");

// 6. Arrow Function with Array
const numbers = [10, 20, 30, 40, 50];

const getTotal = (arr) => {
    return arr.reduce((total, num) => total + num, 0);
};

console.log("6. Total =", getTotal(numbers));

console.log("----------------------");

// 7. map() with Arrow Function
const users = [
    { name: "John", age: 25 },
    { name: "David", age: 30 },
    { name: "Sam", age: 20 }
];

const userNames = users.map(user => user.name);

console.log("7.", userNames);

console.log("----------------------");

// 8. filter() with Arrow Function
const filteredUsers = users.filter(user => user.age > 25);

console.log("8.", filteredUsers);

console.log("----------------------");

// 9. find() with Arrow Function
const foundUser = users.find(user => user.name === "David");

console.log("9.", foundUser);

console.log("----------------------");

// 10. forEach() with Arrow Function
console.log("10.");
users.forEach(user => {
    console.log(`${user.name} - ${user.age}`);
});

console.log("----------------------");

// 11. Callback Function
function processUser(name, callback) {
    callback(name);
}

processUser("John", (userName) => {
    console.log("11. Processing user:", userName);
});

console.log("----------------------");

// 12. Promise
const getUserData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User data received successfully");
    }, 2000);
});

getUserData.then((message) => {
    console.log("12.", message);
});

// 13. Async/Await
const getUser = async () => {
    try {
        console.log("13. Fetching user data...");

        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("User data received successfully");
            }, 2000);
        });

        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
};

getUser();