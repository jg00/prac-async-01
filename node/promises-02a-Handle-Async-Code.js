// 1 Example using Promise to handle async code
const fs = require("fs");

function readFile(filename, encoding) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });

  return promise;
}

readFile("./files/demofile.txt", { encoding: "utf8" }).then(
  data => console.log("File read.", data),
  error => console.log("File read error.", error)
);
