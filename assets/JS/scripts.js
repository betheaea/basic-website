function navIcon() {
  var x = document.getElementById("myResnav");
  if (x.className === "resnav") {
    x.className += " responsive";
  } else {
    x.className = "resnav";
  }
}