const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Trocar Tema';
document.body.prepend(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
