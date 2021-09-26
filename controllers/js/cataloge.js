// VARIABLES
const arrow = document.getElementsByClassName('arrow');
const description = document.getElementById('description');

// FUNCIONES
function show(event) {
   event.target.children[0].classList.toggle('show');
}

// EVENTOS
arrow[0].addEventListener('click', show);
arrow[1].addEventListener('click', show);
arrow[2].addEventListener('click', show);
arrow[3].addEventListener('click', show);
arrow[4].addEventListener('click', show);
arrow[5].addEventListener('click', show);
arrow[6].addEventListener('click', show);
arrow[7].addEventListener('click', show);
arrow[8].addEventListener('click', show);
arrow[9].addEventListener('click', show);