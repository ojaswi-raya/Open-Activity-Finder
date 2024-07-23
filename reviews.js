document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');

    const reviews = [];

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const activityName = document.getElementById('activity-name').value;
        const userReview = document.getElementById('user-review').value;
        const userRating = document.getElementById('user-rating').value;

        const newReview = {
            activityName,
            userReview,
            userRating
        };

        reviews.push(newReview);
        displayReviews();

        reviewForm.reset();
    });

    function displayReviews() {
        reviewList.innerHTML = '';
        reviews.forEach(review => {
            const li = document.createElement('li');
            li.classList.add('review-item');
            li.innerHTML = `
                <h3>${review.activityName}</h3>
                <p>${review.userReview}</p>
                <p>Rating: ${review.userRating}/5</p>
            `;
            reviewList.appendChild(li);
        });
    }
});
