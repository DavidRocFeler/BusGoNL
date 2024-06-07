document.addEventListener("DOMContentLoaded", function() {
    // Carga de imágenes
    const coverPhoto = document.querySelector('.cover-photo');
    const images = [
        './assetes/objeto-2-bus.jpg',
        './assetes/objeto-3-bus.jpg',
        './assetes/objeto-4-bus.jpg',
        './assetes/objeto-5-bus.jpg',
        './assetes/objeto-6-bus.jpg',
        './assetes/objeto-7-bus.jpg'
    ];

    let loadedImagesCount = 0;

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedImagesCount++;
            if (loadedImagesCount === images.length) {
                coverPhoto.classList.add('loaded');
            }
        };
    });

    // Menú desplegable
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', function() {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            menu.style.maxHeight = '0';
        } else {
            menu.classList.add('open');
            menu.style.maxHeight = menu.scrollHeight + 'px';
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 1000) {
            menu.classList.remove('open');
            menu.style.maxHeight = 'none';
        } else {
            menu.style.maxHeight = '0';
        }
    });
});
