// 2 (Nested Promise) Load a file from disk using readFile and then compress it using the
// async zlib node library, use a promise chain to process this work.

const fs = require("fs");
const zlib = require("zlib");

function gZip(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
}

// Load it then zip it and then print it to screen
readFile("./files/demofile.txt", "utf-8").then(
  data => {
    gZip(data).then(
      result => console.log("Zip result", result),
      error => console.log("Zip error", error)
    );
  },
  error => console.log("File read error", error)
);
