import { logout, home, communityBoard, } from '../fetch-utils.js';

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