// Example: If error 403 on publish, run authenticate.  If timeout happens first return timeout error.
function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race([publish(), timeout(5000)])
  .then(res => {
    if (res.status === 403) return authenticate();
  })
  .then(status => console.log("Published", status.status))
  .catch(err => console.log(err));
