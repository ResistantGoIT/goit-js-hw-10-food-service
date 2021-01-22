const checkBox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
body.classList.add(Theme.LIGHT);
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('checkbox') === Theme.DARK) {
    checkBox.checked = true;
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
});
const changeTheme = () => {
  if (checkBox.checked === true) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('checkbox', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('checkbox', Theme.LIGHT);
  }

  localStorage.getItem('checkbox');
};
checkBox.addEventListener('change', changeTheme);
