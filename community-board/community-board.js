
import { logout, home, checkAuth, fetchPosts, createPost, deletePost } from '../fetch-utils.js';
import { renderPosts } from '../render-utils.js';

checkAuth();

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
    postList.textContent = '';
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        postDiv.addEventListener('click', async () => {
            await deletePost(post.id);
            await loadData();
        });
        postList.append(postDiv);
    }
}
loadData();

const postItForm = document.getElementById('postItForm');
postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    const newPost = {
        new_post: data.get('new_post'),
        contact: data.get('contact'),
    };
    const res = await createPost(newPost);

    console.log(res);
    loadData();
    location.replace('/community-board');
    // (newPost);
    // (res);

    
});
loadData();

const createButton = document.getElementById('create');
createButton.addEventListener('click', () => {
    const displayForm = document.querySelector('.dropdown');
    if (displayForm.style.display === 'block') {
        displayForm.style.display = 'none';
    } else {
        displayForm.style.display = 'block';
    }
<<<<<<< HEAD

});


=======
    
});
>>>>>>> 3470024efd6ef4d0f754c349be2a07ed0cc36aab
