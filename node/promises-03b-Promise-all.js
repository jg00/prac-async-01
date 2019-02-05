// Example: Promise.all - If you pass a series of promises to Promise.all, it will wait
// until all promises have resolved before calling .then handler.

const fs = require("fs");
const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

let promises = files.map(path => {
  return readFile(path, "utf8");
});

Promise.all(promises)
  .then(data => console.log("All Promises Complete:", data))
  .catch(err => console.error(err));

// Function returns a promise
function readFile(fileName, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
