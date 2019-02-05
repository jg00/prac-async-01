// 1 Unlike callbacks, promises are always asynchronous
function doAsyncTask() {
  return Promise.resolve();
}

doAsyncTask().then(() => console.log(message));

// message intentionally placed here to show doAsyncTask() async code completes first before .then is called
let message = "Promise Resolved";

// 2 Example: Chaining
const prom = Promise.resolve("done"); // Calling the resolve() directly
prom
  .then(val => {
    console.log(val);
    return "done2";
  })
  .then(val => console.log(val));

// 3 Example: Forking - Separate from above
prom.then(val => {
  console.log("forked", val);
});
