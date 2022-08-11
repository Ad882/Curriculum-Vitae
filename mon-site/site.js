var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "rgb(250, 243, 233)";
    document.getElementById("navbar").style.color = "black";

    const collection = document.getElementsByClassName("link");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "black";
    }

  TransitionEvent.backgroundColor;
    
  } else {
    document.getElementById("navbar").style.top = "-156px";
  }
  prevScrollpos = currentScrollPos;

  if (prevScrollpos == 0){
    document.getElementById("navbar").style.backgroundColor = "black";
    document.getElementById("navbar").style.color = "rgb(250, 243, 233)";

    const collection = document.getElementsByClassName("link");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.color = "rgb(250, 243, 233)";
    }
  }

}


