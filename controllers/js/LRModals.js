// VARIABLES
const menu = document.querySelector('.menu');
const btnLog = document.querySelector('.login-modal');
const btnReg = document.querySelector('.register-modal');
const login = document.querySelector('.login-container');
const register = document.querySelector('.register-container');
const quit = document.querySelector('.quit');

// FUNCIONES
function loginModal() {
   login.classList.toggle('show');
}

function registerModal() {
   register.classList.toggle('show');
}

function quitModal(event) {
   if (event.target.className == quit.className) {
      login.className = 'login-container';
      register.className = 'register-container';
   }
   if (event.target == login) { login.classList.toggle('show'); }
   if (event.target == register) { register.classList.toggle('show'); }
}
// EVENTOS
btnLog.addEventListener('click', loginModal);
btnReg.addEventListener('click', registerModal);
quit.addEventListener('click', quitModal);
window.addEventListener('click', quitModal);