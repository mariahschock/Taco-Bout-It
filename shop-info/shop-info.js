import { logout, home, addReview, getReviews, getShops } from '../fetch-utils.js';
import { renderReviews, renderShopInfo } from '../render-utils.js';
//checkAuth();
const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    logout();
    window.location.href = '/';
});
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    home();
    window.location.href = '/';
});
const boardButton = document.getElementById('community-board');
boardButton.addEventListener('click', () => {
    window.location.href = '../community-board';
    console.log(boardButton);
});


const shopForm = document.getElementById('shopReview');
shopForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(shopForm);
    await addReview ({
        content: form.get('content'),
        rating: form.get('ratings'),
    });
});

async function displayReviews() {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const reviews = await getReviews(id);
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.textContent = '';
    for (let review of reviews) {
        const reviewDiv = renderReviews(review);
        reviewsContainer.append(reviewDiv);
    }
}
displayReviews();

async function displayShopInfo() {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get('id');
    const shopInfo = await getShops(id);
    const shopSection = document.getElementById('shop-section');
    shopSection.append(renderShopInfo(shopInfo));
}

displayShopInfo();