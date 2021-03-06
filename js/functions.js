window.addEventListener('resize', function () {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  var x = document.getElementsByClassName('navigation-list')[0];
  if (vw >= 800 && x.style.display == "none") {
    x.style.display = "flex";
  } else if (vw < 800 && x.style.display == "flex") {
    x.style.display = "none";
  }
});

function hamburgerMenu() {
  var x = document.getElementsByClassName('navigation-list')[0];
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
