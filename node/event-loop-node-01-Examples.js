// 1 Create a program which prints out the below. If the log line
// mentions a `setInterval` it must be printed inside a `setInterval` etc..

/*
start
end
setInterval 1
promise 1
promise 2
*/

console.log("start");
const interval = setInterval(() => {
  console.log("setInterval 1");
  Promise.resolve().then(console.log("promise 1"));
  Promise.resolve().then(console.log("promise 2"));
  clearInterval(interval);
}, 0);

console.log("end");
