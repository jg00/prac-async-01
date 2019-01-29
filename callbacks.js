// 1 setImmediate() - Any function passed as the setImmediate() argument
// is a callback that’s executed in the next iteration of the event loop.
// or process.nextTick()

// Callbacks are not async by default.

function doAsyncTask(cb) {
  // Using setImmediate()
  setImmediate(() => {
    console.log("Async task");
    cb();
  });

  // Or process.nextTick()
  //   process.nextTick(() => {
  //     console.log("Async task");
  //     cb();
  //   });
}

doAsyncTask(_ => console.log(message));

let message = "Callback Called";
