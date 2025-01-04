var screen1 = document.querySelector('.screen1');
var screen2 = document.querySelector('.screen2');
var screen3 = document.querySelector('.screen3');
var screen4 = document.querySelector('.screen4');
var screen5 = document.querySelector('.screen5');
var btnUname = document.querySelector('#btn-uname');
var btnMail = document.querySelector('#btn-mail');
var btnS4 = document.querySelector('#btn-s4');
var uname = document.getElementById('uname');
var email = document.getElementById('email');


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
  screen4.style.display = 'flex';
});

btnS4.addEventListener('click', () => {
  screen4.style.display = 'none';
  screen5.style.display = 'flex';
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

