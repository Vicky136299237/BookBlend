// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const ratingStars = document.querySelectorAll('.rating-stars');

    ratingStars.forEach(stars => {
        stars.addEventListener('click', handleStarClick);
    });
});

function handleStarClick(event) {
    const selectedStar = event.target;
    const ratingStars = selectedStar.parentNode;

    // Reset all stars to inactive
    ratingStars.querySelectorAll('.star').forEach(star => {
        star.classList.remove('active');
    });

    // Set the selected star and all previous stars to active
    selectedStar.classList.add('active');
    let value = selectedStar.dataset.value;
    while (selectedStar.previousElementSibling) {
        selectedStar = selectedStar.previousElementSibling;
        selectedStar.classList.add('active');
        value = selectedStar.dataset.value;
    }

    // Store the selected rating value in a data attribute
    ratingStars.dataset.rating = value;
}
