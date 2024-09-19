document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  const defaultLanguage = 'UZB';

  fetch('translations.json')
    .then(response => response.json())
    .then(translations => {
      function setLanguage(language) {
        document.querySelectorAll('[id]').forEach(element => {
          const key = element.id;
          if (translations[language][key]) {
            element.innerHTML = translations[language][key];
          }
        });
      }

      setLanguage(defaultLanguage);

      languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
      });
    })
    .catch(error => console.error('Error loading translations:', error));
});

document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu'); 
  var sidebar = document.querySelector('.sidebar');

  menuIcon.addEventListener('click', function() {
    sidebar.classList.toggle('open'); 
  });
});

