let heroImage = document.querySelector('.hero img');

if(window.innerWidth >= "768px") {
    heroImage.innerHTML = `<img src="../assets/image-hero-tablet.png" alt="hero-image" />`;
}