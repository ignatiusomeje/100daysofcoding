const darkModeBtn = document.querySelector('.dark');
darkModeBtn.addEventListener('click', ()=> {
  const element = document.body;
  element.classList.toggle('light-mode')
})