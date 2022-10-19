if (sessionStorage.username) {
  document.getElementById("username").value = sessionStorage.username;
}

if (sessionStorage.email) {
  document.getElementById("email").value = sessionStorage.email;
}

if (sessionStorage.password) {
  document.getElementById("password").value = sessionStorage.password;
}


let salvarData = function() {
  let username =
    document.getElementById("username").value;

  let email = 
    document.getElementById("email").value;
  
  let password = 
    document.getElementById("password").value;
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
}

document.onchange = salvarData;