document.querySelector("form").addEventListener("submit", signin);

  var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));

  function signin(event) {
    event.preventDefault();
    var pass = document.querySelector("#pass").value;
    var user = document.querySelector("#user").value;

    for (var i = 0; i < regdUsers.length; i++) {
      console.log(regdUsers[i].userName, regdUsers[i].passwd);
      if (regdUsers[i].userName == user && regdUsers[i].passwd == pass) {
           alert("Signup successful!");
            window.location.href = "index.html";
      }
      else{
          alert("Invalid Credentials");
      }
    }
  }