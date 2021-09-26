// VARIABLES
const search = document.getElementById('search'),
      searchInput = document.getElementById('searchInput');

// EVENTOS
search.addEventListener('click', function () {
   searchInput.value = '';
   searchInput.style.opacity = '1'; 
   searchInput.style.width = '200px';
   searchInput.focus();
});

searchInput.addEventListener('blur', () => {
   searchInput.style = defaultStatus;
});
