// 1 setImmediate() - Any function passed as the setImmediate() argument
// is a callback that’s executed in the next iteration of the event loop.
// or process.nextTick()

// Callbacks are not async by default.

function doAsyncTask(cb) {
  setImmediate(() => {
    console.log("Using setImmediate()");
    cb();
  });

  process.nextTick(() => {
    console.log("Using process.nextTick()");
    cb();
  });
}

doAsyncTask(_ => console.log(message));

// message defined here intentionally
let message = "Callback Called";
