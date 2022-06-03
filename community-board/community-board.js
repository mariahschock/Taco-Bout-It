
import { logout, home, checkAuth, fetchPosts, createPost, deletePost, } from '../fetch-utils.js';
import { renderPosts } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const homeButton = document.getElementById('home');
const postList = document.getElementById('community-board');

const createNewPostForm = document.getElementById('postItForm');


logoutButton.addEventListener('click', () => {
    logout();
    window.location.href = '/';
});

homeButton.addEventListener('click', () => {
    home();
    window.location.href = '/';
});

async function loadData() {
    postList.textContent = '';
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete Post';
        deleteButton.addEventListener('click', async (e) => {
            e.preventDefault();
            await deletePost(post.id);
            await loadData();
        });
        postDiv.append(deleteButton);
        postList.append(postDiv);
    }
}
loadData();


// For adding new posts to the bulletin
createNewPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createNewPostForm);
    const newPost = {
        new_post: data.get('new_post'),
        contact: data.get('contact'),
    };
    const response = await createPost(newPost);
    loadData();
    location.replace('/community-board');
    return response.data;
});

const createButton = document.getElementById('create');
createButton.addEventListener('click', () => {
    const displayForm = document.querySelector('.dropdown');
    if (displayForm.style.display === 'block') {
        displayForm.style.display = 'none';
    } else {
        displayForm.style.display = 'block';
    }
});
