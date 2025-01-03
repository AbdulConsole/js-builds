var screen1 = document.querySelector('.screen1');
var screen2 = document.querySelector('.screen2');
var screen3 = document.querySelector('.screen3');
var btnUname = document.querySelector('#btn-uname');
var btnMail = document.querySelector('#btn-mail')
var uname = document.getElementById('uname');
var email = document.getElementById('email');

//var time = 1000;

window.addEventListener('load', () => {
  setTimeout(() => {
      if (screen1) {
        screen1.style.display = 'none';
        screen2.style.display = 'flex';
      }
  }, 4000);
});

btnUname.addEventListener('click', () => {
  screen2.style.display = 'none';
  screen3.style.display = 'flex';
});

btnMail.addEventListener('click', () => {
  screen3.style.display = 'none';
});

uname.addEventListener('input', () => {
  checkLength(uname, btnUname, 5)
});

email.addEventListener('input', () => {
 checkLength(email, btnMail, 8);
});



function checkLength(inptElem, btnElem, len) {
  if (inptElem.value.length >= len) {
    btnElem.disabled = false;
  } else {
    btnElem.disabled = true;
  }
}