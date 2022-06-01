import { logout, home, checkAuth, fetchPosts } from '../fetch-utils.js';
import { renderPosts } from '../render-utils.js';


// checkAuth();

const logoutButton = document.getElementById('logout');
const homeButton = document.getElementById('home');
const postList = document.getElementById('community-board');

logoutButton.addEventListener('click', () => {
    logout();
    window.location.href = '/';
});

homeButton.addEventListener('click', () => {
    home();
    window.location.href = '/';
});

async function loadData() {
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        postList.append(postDiv);
    }
}
loadData();