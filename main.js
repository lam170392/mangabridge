'use strict'

const btnToggle = document.getElementById('themes_toggle');

btnToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    btnToggle.textContent = isDark ? 'Light' : 'Dark';
});