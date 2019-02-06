// 1 Sample generator that is a function that can be paused at some point and then started back from that point
function* demo() {
  console.log(1);
  yield;
  console.log(2);
}

console.log("before iteration");
const it = demo(); // Does not execute
console.log(it.next()); // runs 1 and yield returns { value: undefined, done: false }
console.log(it.next()); // runs after yield, prints out 2 and yield returns { value: undefined, done: true }
console.log("after iteration");

// 2 Example to return data from yield
function* range() {
  for (let i = 0; i < 4; i++) {
    yield i; // return data from yield
  }
  yield "end loop";
  return "done";
}

const it2 = range();
console.log(it2.next()); // { value: 0, done: false }
console.log(it2.next()); // { value: 1, done: false }
console.log(it2.next()); // { value: 2, done: false }
console.log(it2.next("hello")); // { value: 3, done: false }
console.log(it2.next()); // { value: 'end loop', done: false }
console.log(it2.next()); // { value: 'done', done: true }
console.log(it2.next()); // { value: undefined, done: true }
console.log(it2.next()); // { value: undefined, done: true }

// 3 Sample async generator using yield
function* range3() {
  for (let i = 0; i < 4; i++) {
    yield Promise.resolve(i);
  }
}

const it3 = range3();
console.log("Before it3");
console.log(it3.next()); // { value: Promise { 0 }, done: false }
console.log(it3.next()); // { value: Promise { 1 }, done: false }
console.log(it3.next()); // { value: Promise { 2 }, done: false }
console.log(it3.next()); // { value: Promise { 3 }, done: false }
console.log(it3.next()); // { value: undefined, done: true }
console.log(it3.next()); // { value: undefined, done: true }
