const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.textContent = opened ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
