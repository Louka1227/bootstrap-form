function reset() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmeP").value = "";
  document.getElementById("accept").checked = false;
}
function sign() {
  const data = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    birth: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmP: document.getElementById("confirmeP").value,
    accept: document.getElementById("accept").checked,
  };
  console.log(data);
  reset();
}
