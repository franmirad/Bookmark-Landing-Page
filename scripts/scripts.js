/*--------------------------------------> SIDENAV <-------------------------------------------------*/
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/*--------------------------------------> FEATURES <-------------------------------------------------*/
function switchVisible1() {
  if (document.getElementById('card-1')) {

    if (document.getElementById('card-1').style.display == 'none') {
      document.getElementById('card-1').style.display = 'flex';
      document.getElementById('card-2').style.display = 'none';
      document.getElementById('card-3').style.display = 'none';
    }
    else {
      document.getElementById('card-1').style.display = 'flex';
      document.getElementById('card-2').style.display = 'none';
      document.getElementById('card-3').style.display = 'none';
    }
  }
}

function switchVisible2() {
  if (document.getElementById('card-2')) {

    if (document.getElementById('card-2').style.display == 'none') {
      document.getElementById('card-2').style.display = 'flex';
      document.getElementById('card-1').style.display = 'none';
      document.getElementById('card-3').style.display = 'none';
    }
    else {
      document.getElementById('card-2').style.display = 'flex';
      document.getElementById('card-1').style.display = 'none';
      document.getElementById('card-3').style.display = 'none';
    }
  }
}

function switchVisible3() {
  if (document.getElementById('card-3')) {

    if (document.getElementById('card-3').style.display == 'none') {
      document.getElementById('card-3').style.display = 'flex';
      document.getElementById('card-1').style.display = 'none';
      document.getElementById('card-2').style.display = 'none';
    }
    else {
      document.getElementById('card-3').style.display = 'flex';
      document.getElementById('card-1').style.display = 'none';
      document.getElementById('card-2').style.display = 'none';
    }
  }
}

/*--------------------------------------> FAQ-ACCORDIION <-------------------------------------------------*/
var acc = document.getElementsByClassName("question-box");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


