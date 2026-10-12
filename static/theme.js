// Dark mode toggle; choice is saved per browser and shared across roparcat.github.io pages.
(function () {
  var root = document.documentElement, btn = document.getElementById('theme-toggle');
  function sync() {
    var dark = root.dataset.theme === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', dark);
    btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  }
  btn.addEventListener('click', function () {
    var dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    sync();
  });
  sync();
})();
