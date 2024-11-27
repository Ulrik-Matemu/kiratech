const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

let isDarkMode = true;

function toggleTheme() {
  body.classList.toggle('light-mode');
  sunIcon.style.display = isDarkMode ? 'none' : 'block';
  moonIcon.style.display = isDarkMode ? 'block' : 'none';
  isDarkMode = !isDarkMode;
}

themeToggle.addEventListener('click', toggleTheme);