// 1 Sample custom async generator
const fs = require("fs");
const files = ["./files/demofile.txt", "./files/demofile.other.txt"];

function readFile(file, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function* readAllFiles2(files, encoding) {
  let promises = files.map(path => readFile(path, encoding));
  for (let promise of promises) yield promise;
}

(async () => {
  for await (let contents of readAllFiles2(files, "utf8")) {
    console.log(contents);
  }
})();
