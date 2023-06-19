// //forEach loop on array?
// for (const element of theArray) {
//   // ...use `element`...
// }


// theArray.forEach(element => {
//   // ...use `element`...
// });


// for (let index = 0; index < theArray.length; ++index) {
//   const element = theArray[index];
//   // ...use `element`...
// }


// for (const propertyName in theArray) {
//   if (/*...is an array element property (see below)...*/) {
//     const element = theArray[propertyName];
//     // ...use `element`...
//   }
// }


// const a = ["a", "b", "c"];
// for (const element of a) { // You can use `let` instead of `const` if you like
//   console.log(element);
// }
// // a
// // b
// // c

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function showSlowly(messages) {
//   for (const message of messages) {
//     await delay(400);
//     console.log(message);
//   }
// }

// showSlowly([
//   "So", "long", "and", "thanks", "for", "all", "the", "fish!"
// ]);
// // `.catch` omitted because we know it never rejects

// const a = ["a", "b", "c"];
// a.forEach((element) => {
//   console.log(element);
// });

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function showSlowly(messages) {
//   // INCORRECT, doesn't wait before continuing,
//   // doesn't handle promise rejections
//   messages.forEach(async message => {
//     await delay(400);
//     console.log(message);
//   });
// }

// showSlowly([
//   "So", "long", "and", "thanks", "for", "all", "the", "fish!"
// ]);
// // `.catch` omitted because we know it never rejects

// const a = ["a", "b", "c"];
// for (let index = 0; index < a.length; ++index) {
//   const element = a[index];
//   console.log(element);
// }

// const a = ["a", "b", "c"];
// for (let index = 0, len = a.length; index < len; ++index) {
//   const element = a[index];
//   console.log(element);
// }

// const a = ["a", "b", "c"];
// for (let index = a.length - 1; index >= 0; --index) {
//   const element = a[index];
//   console.log(element);
// }

// // (The `NodeList` from `querySelectorAll` is array-like)
// const divs = document.querySelectorAll("div");
// for (let index = 0; index < divs.length; ++index) {
//   divs[index].addEventListener('click', e => {
//     console.log("Index is: " + index);
//   });
// }

// <div>zero</div>
// <div>one</div>
// <div>two</div>
// <div>three</div>
// <div>four</div>

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function showSlowly(messages) {
//   for (let i = 0; i < messages.length; ++i) {
//     const message = messages[i];
//     await delay(400);
//     console.log(message);
//   }
// }

// showSlowly([
//   "So", "long", "and", "thanks", "for", "all", "the", "fish!"
// ]);
// // `.catch` omitted because we know it never rejects

// // `a` is a sparse array
// const a = [];
// a[0] = "a";
// a[10] = "b";
// a[10000] = "c";
// for (const name in a) {
//   if (Object.hasOwn(a, name) &&       // These checks are
//     /^0$|^[1-9]\d*$/.test(name) &&  // explained
//     name <= 4294967294              // below
//   ) {
//     const element = a[name];
//     console.log(a[name]);
//   }
// }

// // Utility function for antiquated environments without `forEach`
// const hasOwn = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
// const rexNum = /^0$|^[1-9]\d*$/;
// function sparseEach(array, callback, thisArg) {
//   for (const name in array) {
//     const index = +name;
//     if (hasOwn(a, name) &&
//       rexNum.test(name) &&
//       index <= 4294967294
//     ) {
//       callback.call(thisArg, array[name], index, array);
//     }
//   }
// }

// const a = [];
// a[5] = "five";
// a[10] = "ten";
// a[100000] = "one hundred thousand";
// a.b = "bee";

// sparseEach(a, (value, index) => {
//   console.log("Value at " + index + " is " + value);
// });

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function showSlowly(messages) {
//   for (const name in messages) {
//     if (messages.hasOwnProperty(name)) { // Almost always this is the only check people do
//       const message = messages[name];
//       await delay(400);
//       console.log(message);
//     }
//   }
// }

// showSlowly([
//   "So", "long", "and", "thanks", "for", "all", "the", "fish!"
// ]);
// // `.catch` omitted because we know it never rejects

// const a = ["a", "b", "c"];
// const it = a.values(); // Or `const it = a[Symbol.iterator]();` if you like
// let entry;
// while (!(entry = it.next()).done) {
//   const element = entry.value;
//   console.log(element);
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }

// async function showSlowly(messages) {
//   const it = messages.values()
//   while (!(entry = it.next()).done) {
//     await delay(400);
//     const element = entry.value;
//     console.log(element);
//   }
// }

// showSlowly([
//   "So", "long", "and", "thanks", "for", "all", "the", "fish!"
// ]);
// // `.catch` omitted because we know it never rejects

// const divs = document.querySelectorAll("div");
// for (const div of divs) {
//   div.textContent = Math.random();
// }

// <div>zero</div>
// <div>one</div>
// <div>two</div>
// <div>three</div>
// <div>four</div>

// Array.prototype.forEach.call(node.childNodes, (child) => {
//   // Do something with `child`
// });


// // (This is all presumably in a module or some scoping function)
// const forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);

// // Then later...
// forEach(node.childNodes, (child) => {
//   // Do something with `child`
// });


// const divs = Array.from(document.querySelectorAll("div"));


// // Typical use (with an arrow function):
// const divs = Array.from(document.querySelectorAll(".some-class"), element => element.tagName);

// // Traditional function (since `Array.from` can be polyfilled):
// var divs = Array.from(document.querySelectorAll(".some-class"), function (element) {
//   return element.tagName;
// });


// const trueArray = [...iterableObject];


// const divs = [...document.querySelectorAll("div")];


// const trueArray = Array.prototype.slice.call(arrayLikeObject);


// const divs = Array.prototype.slice.call(document.querySelectorAll("div"));


