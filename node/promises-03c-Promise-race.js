// Example - Promise.race - Resolves or rejects when the first promise in the
// array resolved or rejects and is passed to the .then handler.

function readFileFake(sleep) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sleep, "readFileFake");
  });
}

function timeOut(sleep) {
  return new Promise((_, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race([readFileFake(1000), timeOut(5000)])
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err));
