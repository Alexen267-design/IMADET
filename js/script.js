const select = document.querySelector('.select');
const dropdownMenu = document.querySelector('.dropdown__menu');
const caret = document.querySelector('.caret');
const navBar = document.querySelector('.header');

const showMenu = function () {
  dropdownMenu.style.display = 'block';
  setTimeout(() => {
    caret.style.transform = 'rotateZ(180deg)';
    caret.style.borderTop = '6px solid #fca311';
    dropdownMenu.style.opacity = 1;
  }, 50);
};

const hideMenu = function () {
  setTimeout(() => {
    dropdownMenu.style.display = 'none';
  }, 200);

  caret.style.transform = 'rotate(0)';
  caret.style.borderTop = '6px solid #fff';
  dropdownMenu.style.opacity = 0;
};

select.addEventListener('mouseover', function () {
  console.log('Active!');
  showMenu();
});

dropdownMenu.addEventListener('mouseleave', function () {
  hideMenu();
});

navBar.addEventListener('mouseleave', function () {
  console.log('TESTING');
  hideMenu();
});
