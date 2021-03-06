// 3 (Non-nested ersion) Load a file from disk using readFile and then compress it using the
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
readFile("./files/demofile2.txt", "utf-8")
  .then(
    data => {
      return gZip(data);
    },
    error => {
      console.log("1 Failed to read", error);
    }
  )
  .then(zipResult => {
    if (zipResult) console.log("2 Zip successs", zipResult);
    else console.log("2 Zip failed");
  });
