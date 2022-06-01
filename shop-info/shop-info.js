import { logout, home, addReview, getReviews, getShopInfo, checkAuth, deleteReview } from '../fetch-utils.js';
import { renderReviews, renderShopInfo } from '../render-utils.js';


const logoutButton = document.getElementById('logout');
const homeButton = document.getElementById('home');
const boardButton = document.getElementById('community-board');

const reviewsContainer = document.querySelector('.reviews-container');

checkAuth();

// Auth Functionality
logoutButton.addEventListener('click', () => {
    logout();
    window.location.href = '/';
});

// Button to redirect user to the home page
homeButton.addEventListener('click', () => {
    home();
    window.location.href = '/';
});

// Button to redirect user to the community board page
boardButton.addEventListener('click', () => {
    window.location.href = '../community-board';
});

// Function should allow auth users to create a new review
// On submit, new review should display on the right side
// of the page
const shopForm = document.getElementById('shopReview');
shopForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const form = new FormData(shopForm);
    await addReview ({
        content: form.get('content'),
        rating: form.get('ratings'),
        shop_id: id,
    });
    reviewsContainer.textContent = '';
    displayReviews();
    shopForm.reset();
});

// Displays all reviews for the shop being currently viewed
async function displayReviews() {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const reviews = await getReviews(id);
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.textContent = '';
    for (let review of reviews) {
        const reviewDiv = renderReviews(review);
        reviewDiv.addEventListener('click', async () => {
            await deleteReview(review.id);
            await displayReviews();
        });
        reviewsContainer.append(reviewDiv);
    }
}
displayReviews();


// Displays information of the shop being viewed by database ID
async function displayShopInfo() {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const shopInfo = await getShopInfo(id);
    const shopDiv = document.querySelector('.shop-info');
    shopDiv.append(renderShopInfo(shopInfo));
}

displayShopInfo();