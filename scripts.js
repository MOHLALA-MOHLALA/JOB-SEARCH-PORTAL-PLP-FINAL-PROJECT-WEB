const dropdownLinks = document.querySelectorAll('.nav-link');

dropdownLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const dropdownContent = link.nextElementSibling;
    dropdownContent.classList.toggle('show');
  });
});

window.onclick = function(event) {
  if (!event.target.matches('.nav-link')) {
    const

    const form = document.querySelector('.sign-in-form');
    const forgotPasswordLink = document
    const headerText = document.querySelector('.header-text');

const images = document.querySelectorAll('.table-image');
const captionContainer = document.querySelector('.caption-container');
const caption = document.querySelector('.caption');

images.forEach(image => {
  image.addEventListener('click', () => {
    caption.innerText = image.alt;
    captionContainer.style.display = 'block';
  });
});

captionContainer.addEventListener('click', () => {
captionContainer.

  const images = document.querySelectorAll('.table-image');
const captionContainer = document.querySelector('.caption-container');
const caption = document.querySelector('.caption');

images.forEach(image => {
  image.addEventListener('click', () => {
    caption.innerText = image.alt;
    captionContainer.style.display = 'block';
  });
});

captionContainer.
