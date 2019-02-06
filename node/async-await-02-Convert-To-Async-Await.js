// 1 Read values in each file using async/await
const fs = require("fs");
const files = ["./files/demofile.txt", "./files/demofile.other.txt"];
// const file = "./files/demofile.txt";

function readFile(file, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 1a One file
// readFile(file, "utf8").then(result => console.log(result));

// 1b Version one - reading each file one at a time
async function readAllFiles(files, encoding) {
  for (let file of files) {
    let value = await readFile(file, encoding); // blocking
    console.log(value);
  }
}
// readAllFiles(files, "utf8");

// 1c Version two - reading files without waiting for each to complete
async function readAllFiles2(files, encoding) {
  let promises = files.map(path => readFile(path, encoding));
  let values = await Promise.all(promises);
  console.log(values);
}

readAllFiles2(files, "utf8");
