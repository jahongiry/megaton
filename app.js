document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  const defaultLanguage = 'UZB';

  // Load translations from JSON file
  fetch('translations.json')
    .then(response => response.json())
    .then(translations => {
      function setLanguage(language) {
        // Update text content for elements with IDs
        document.querySelectorAll('[id]').forEach(element => {
          const key = element.id;
          if (translations[language][key]) {
            element.innerHTML = translations[language][key];
          }
        });
      }

      // Set default language
      setLanguage(defaultLanguage);

      // Update language when selected from dropdown
      languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
      });
    })
    .catch(error => console.error('Error loading translations:', error));
});
// app.js
// app.js

// app.js

document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu'); // Menyu ikonkasi
  var sidebar = document.querySelector('.sidebar'); // Sidebar

  menuIcon.addEventListener('click', function() {
    sidebar.classList.toggle('open'); // Sidebarni ochish/yopish
  });
});

