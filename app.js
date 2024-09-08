document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', updateLanguage);

  function updateLanguage() {
    const selectedLanguage = languageSelect.value;
    fetch('translations.json')
      .then(response => response.json())
      .then(data => {
        const translations = data[selectedLanguage];
        document.querySelector('.katalog').textContent = translations.catalog;
        document.querySelector('.navbar li:nth-child(2) a').textContent = translations.priceList;
        document.querySelector('.navbar li:nth-child(3) a').textContent = translations.purchase;
        document.querySelector('.navbar li:nth-child(4) a').textContent = translations.services;
        document.querySelector('.navbar li:nth-child(5) a').textContent = translations.contacts;
        document.getElementById('quality-text').textContent = translations.qualityText;
        document.getElementById('block-text').textContent = translations.blockText;
        document.getElementById('description').textContent = translations.description;

        const mainList = document.getElementById('main-list');
        const listItems = mainList.querySelectorAll('li a');
        translations.mainList.forEach((text, index) => {
          if (listItems[index]) listItems[index].textContent = text;
        });

        const cardContainer = document.getElementById('card-container');
        const cardElements = cardContainer.querySelectorAll('.card p');
        translations.cards.forEach((text, index) => {
          if (cardElements[index]) cardElements[index].textContent = text;
        });
      })
      .catch(error => console.error('Error loading translations:', error));
  }

  updateLanguage();
});

// const images = [
//   './assets/Home.png',
//   './assets/Main-home.jpg' 
// ];

// let currentIndex = 0;
// const homeImage = document.querySelector('.home');

// function changeBackground() {
//   homeImage.style.opacity = 0; // O'chirish
//   setTimeout(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     homeImage.src = images[currentIndex];
//     homeImage.style.opacity = 1; // Yoqish
//   }, 100); // 1 soniyalik kechikish
// }

// setInterval(changeBackground, 3000); 
