
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') root.classList.add('light');
document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.textContent = root.classList.contains('light') ? '☀' : '☾';
  btn.addEventListener('click', () => {
    root.classList.toggle('light');
    const isLight = root.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    document.querySelectorAll('.theme-toggle').forEach(b => b.textContent = isLight ? '☀' : '☾');
  });
});
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const img = lightbox.querySelector('img');
  const close = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); img.removeAttribute('src'); };
  document.querySelectorAll('.screen-shot').forEach(btn => {
    btn.addEventListener('click', () => { img.src = btn.dataset.full; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); });
  });
  lightbox.querySelector('button').addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
