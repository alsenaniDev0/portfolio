function scrollCarousel(direction) {
    const carousel = document.getElementById("carousel");
    const width = carousel.offsetWidth;
    carousel.scrollBy({ left: width * direction, behavior: 'smooth' });
}