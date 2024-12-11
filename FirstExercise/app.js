let timeout = null;

document.getElementById("myInput").addEventListener("keyup", function (e) {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    alert("result == " + document.getElementById("myInput").value);
  }, 500);
});
