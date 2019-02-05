// 1 Sample error handler at the end.  Sample throw error.
Promise.resolve("done")
  .then(val => {
    throw "fail";
  })
  .then(val => {
    console.log(val);
    throw "fail2";
  })
  .catch(error => console.error(error))
  .finally(_ => console.log("Cleaning up"));
