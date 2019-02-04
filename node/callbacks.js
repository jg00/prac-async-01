// 1 setImmediate() - Any function passed as the setImmediate() argument
// is a callback that’s executed in the next iteration of the event loop.
// or process.nextTick()

// Callbacks are not necessarily async by default.

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

// 2 Handling callback errors by passing the error up the chain
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", { encoding: "utf8" }, (err, data) => {
    next(err, data);
  });
}

readFileThenDo((err, data) => {
  if (err) console.error("Error at readFileThenDo(err, data): \n" + err);
  else console.log(data);
});

/*
// 3 try..catch does not work with asynchronous code
const fs = require("fs");

function readFileThenDo(next) {
  fs.readFile("./blah.nofile", (err, data) => {
    if (err) throw err;

    next(null, data);
  });
}

try {
  readFileThenDo(data => {
    console.log(data);
  });
} catch (err) {
  console.log(
    "Never runs as this is run immediately before async code above! " + err
  );
}
*/
