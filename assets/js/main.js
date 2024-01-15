function setThemeDark() {
  document.getElementById('site').classList.remove('bright');
  document.getElementById('site').classList.remove('colorful');
  document.getElementById('site').classList.add('dark');

}

function setThemeColorful() {
  document.getElementById('site').classList.remove('bright');
  document.getElementById('site').classList.add('colorful');
  document.getElementById('site').classList.remove('dark');

}

function setThemeBright() {
  document.getElementById('site').classList.add('bright');
  document.getElementById('site').classList.remove('colorful');
  document.getElementById('site').classList.remove('dark');

}
