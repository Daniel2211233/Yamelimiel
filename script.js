document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll('.heart-icon');
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add('animate__bounceIn');
        }, index * 500); // Delay each heart animation by 500ms
    });
});
