// Promise.race - Resolves or rejects when the first promise in the
// array resolved or rejects and is passed to the .then handler.

// Example - if reading a file takes longer than a timeout then reject
function readFileFake(sleep) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sleep, "readFileFake");
  });
}

function timeOut(sleep) {
  return new Promise((_, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race([readFileFake(4000), timeOut(2000)])
  .then(data => {
    console.log("Resolved", data);
  })
  .catch(err => console.error("Error - File read took too long:", err));
