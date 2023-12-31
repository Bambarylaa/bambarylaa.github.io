const nav = document.querySelector('#navbar');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);

document.getElementById('openButton').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.add('open');
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('open');
});