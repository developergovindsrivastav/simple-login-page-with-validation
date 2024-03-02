var passspan = document.querySelector(".passwordspan");
var userspan = document.querySelector(".usernamespan");
var btn = document.querySelector(".primary");
var userput = document.querySelector("#userid");

var passput = document.querySelector("#passid");
var uservalid = ["rakesh", "ram", "sunita"];
var p1 = document.querySelector(".p1");
var i = document.querySelector("#icon");
var ioff = document.querySelector("#iconoff");

uservalid.forEach((f) => {
  btn.addEventListener("click", () => {
    if (userput.innerHTML.length > 10) {
      userspan.innerHTML = "the username is very long";
      userspan.style.color = "red";
      p1.innerHTML = "honahisuccessful";
    } else if (userput.value.match(f)) {
      userspan.innerHTML = "the password is not valid";
      userspan.style.color = "red";
      p1.innerHTML = "passsuccessful";
    } else {
      p1.innerHTML = "successful";
    }
  });
});

var passvalid = ["2425", "0123", "2550"];
passvalid.forEach((f) => {
  btn.addEventListener("click", () => {
    if (passput.value.length > 10) {
      passspan.innerHTML = "the password is very long";
      passspan.style.color = "red";
      p1.innerHTML = "honahisuccessful";
    } else if (passput.value.match(f)) {
      passspan.innerHTML = "the password is not valid";
      passspan.style.color = "red";
      p1.innerHTML = "passwordsuccessful";
    } else {
      p1.innerHTML = "successful";
    }
  });
});
iconoff.addEventListener("click", () => {
  passput.type = "text";
  i.style.display = "block";
  iconoff.style.display = "none";
});
i.addEventListener("click", ()=>{
passput.type = "password";
iconoff.style.display = "block";
i.style.display = "none";
})

