let currentIndex = 0;

function moveSlide(direction) {
    const slider = document.querySelector(".slider");
    const cards = document.querySelectorAll(".card");
    const totalCards = cards.length;
    const visibleCards = 3; // Show 3 cards at a time
    const cardWidth = 370; // Width of each card including margin
    const maxIndex = totalCards - visibleCards;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}px)`;
}
