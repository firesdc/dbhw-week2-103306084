function Reset (){
  document.getElementById("num").innerHTML = "0" + 0
}

function Count() {


  if (document.getElementById("num")) {
    var curr = parseInt(document.getElementById("num").innerHTML);
  }
  if ( curr <= 60) {

    if (curr < 9) {
      document.getElementById("num").innerHTML = "0" + (curr + 1);
    } else {
      document.getElementById("num").innerHTML = curr + 1;
    }
  } else {
    document.getElementById("num").innerHTML = "0"+0;
  }

  setTimeout(function() {
    Count();
  }, 1000);
};
Count()
