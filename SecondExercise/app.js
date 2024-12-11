// Get the input box
let timeout = null;
let myInput = document.getElementById("myInput");

myInput.addEventListener("keyup", function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    // default style
    myInput.style.border = "1px solid black";
    document.getElementById("inputInfo").style.display = "block";
    document.getElementById("warningTxt").style.display = "none";

    if (myInput.value.length == 0) {
      document.getElementById("inputLength").style.display = "none";
    } else if (myInput.value.length < 31 && myInput.value.length > 0) {
      document.getElementById("inputLength").style.display = "inline";
      document.getElementById("inputLength").innerHTML = myInput.value.length;
    } else if (myInput.value.length > 31) {
      document.getElementById("warningTxt").style.display = "block";
      document.getElementById("inputInfo").style.display = "none";
      myInput.style.border = "1px solid red";
    }
    //   chera aval alert neshun mide bad inner html
    // alert(myInput.value.length);
  }, 500);
});
