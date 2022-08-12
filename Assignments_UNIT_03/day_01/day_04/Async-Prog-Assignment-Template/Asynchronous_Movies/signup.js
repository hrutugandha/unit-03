document.querySelector("form").addEventListener("submit", formSubmit);
  var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
  function formSubmit(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    var user = document.querySelector("#user").value;
    var mbl = document.querySelector("#mbl").value;

    var userData = {
      emailAdd: email,
      passwd: pass,
      userName: user,
      mblNum: mbl,
    };

    userStack.push(userData);

    //console.log(userStack);
    localStorage.setItem("userDataBase", JSON.stringify(userStack));
    alert("signup success");
    window.location.href = "login.html";
  }