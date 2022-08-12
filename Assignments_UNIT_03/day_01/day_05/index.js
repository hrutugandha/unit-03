let queue = ["Pablo", "Raju", "Shyam", "Babu bhaiyaa"];

function Register() {
  let name = document.getElementById("name").value;

  queue.push(name);

  let message = `${name} your registration is successfull, cheers!`;

  alert(message);

  let promise = new Promise(function (resolve, reject) {
    let x = setInterval(function () {
      if (queue[0] === name) {
        resolve(`${name} its your turn now`);
        clearInterval(x);
      }
    }, 1000);
  });

  promise.then(function (res) {
    console.log("res:", res);
  });
}

function Vaccination_InProgress() {
  if (queue.length === 0) {
    clearInterval(id);
  }
  queue.shift();
  console.log("queue:", queue);
}

let id = setInterval(Vaccination_InProgress, 2000);
