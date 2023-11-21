document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        if (menu.style.display === 'flex' || menu.style.display === '') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    });
});
