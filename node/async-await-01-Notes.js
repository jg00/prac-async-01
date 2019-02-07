// 1 Sample using a Promise
// Examples 1-3 uses doAsyncTask
const doAsyncTask = () => Promise.resolve("done");

doAsyncTask().then(val => console.log("val1 - third", val));
console.log("called - first");

// 2 Converting above using async/await.
async function asyncFunction() {
  let value = await doAsyncTask(); // instead of .then you await the function that returns a promise
  let value2 = await doAsyncTask();
  console.log("val2", value2);
  console.log("val", value); // waits before printed.
}

asyncFunction();

// 3 Written as anonymous function
// IIFE Immediately Invoked Function Expression
(async function() {
  let value = await doAsyncTask();
  console.log("val3 - fourth", value);
  console.log("val4 - fifth"); // async/await causes blocking within async function
})();

console.log("called - second");

// 4 Without await it will behave as Promises normally do
const doAsyncTask2 = () => Promise.resolve("without await - 1");
async function withoutAwaitTest() {
  doAsyncTask2().then(console.log);
  console.log("without await - 2"); // prints first before above line
}
withoutAwaitTest();

// 5 Async function returns itself a promise.
const doAsyncTask3 = () => Promise.resolve("1");
let asyncFunction3 = async function() {
  let value = await doAsyncTask3();
  console.log(value); // value = done
  console.log("2");
  return "3"; // Whatever we return is like a resolve.
};

asyncFunction3().then(value => console.log(value));

// 6 Handling errors using try..catch
// Within async function we now have kind of synchronous blocking code that allows
// us to use try..cath unlike in callbacks
const doAsyncTask4 = () => Promise.reject("error");
const asyncFunction4 = async function asyncFunction4() {
  try {
    const value = await doAsyncTask4();
  } catch (e) {
    console.error("try catch", e);
    return;
  }
};

asyncFunction4();
