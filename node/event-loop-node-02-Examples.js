// 2 Extend the previous example to print out the following
// log lines, use `process.nextTick` and `setImmediate`

/*
start
end
setInterval 1
promise 1
promise 2
processNextTick 1
setImmediate 1
promise 3
promise 4
processNextTick 2
processNextTick 3
*/

console.log("start");

const interval = setInterval(() => {
  console.log("setInterval 1");
  Promise.resolve()
    .then(console.log("promise 1"))
    .then(() => {
      console.log("promise 2");

      setImmediate(() => {
        console.log("setImmediate 1");
        process.nextTick(() => console.log("processNextTick 2"));
        Promise.resolve()
          .then(console.log("promise 3"))
          .then(console.log("promise 4"));
        process.nextTick(() => console.log("processNextTick 3"));
      });

      process.nextTick(() => console.log("processNextTick 1"));

      clearInterval(interval);
    });
}, 0);

console.log("end");
