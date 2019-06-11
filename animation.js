function bigImg(x) {
  x.style.height = "25%";
  x.style.width = "15%";
}

function normalImg(x) {
  x.style.height = "25%";
  x.style.width = "18%";
}

function myMove() {
  var elem = document.getElementById("ink");
  var pos = 300;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 1550) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + "px";
      elem.style.left = pos + "pos";
    }
  }
}
