
import { logout, home, checkAuth, fetchPosts, createPost, deletePost, createReply, deleteReply } from '../fetch-utils.js';
import { renderPosts } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const homeButton = document.getElementById('home');
const postList = document.getElementById('community-board');

const postItForm = document.getElementById('postItForm');

const displayReplyForm = document.querySelectorAll('.pop-out-container');
const replyToPost = document.querySelectorAll('.postReplyForm');


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
        // const ul = document.createElement('ul');
        // for (let participant of post.Participants) {
        //     const li = document.createElement('li');
        //     li.textContent = `${participant.name}: ${participant.content}`;
        //     li.addEventListener('click', async () => {
        //         await deleteReply(participant.id);
        //         await loadData();
        //     });
        //     ul.append(li);
        // }
        // postDiv.append(ul);
        postList.append(postDiv);
    }
}
loadData();

postItForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postItForm);
    const newPost = {
        new_post: data.get('new_post'),
        contact: data.get('contact'),
    };
    const res = await createPost(newPost);
    return res.data;
    
    
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
});

displayReplyForm.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item);
        const hiddenForm = document.querySelector('.hidden');
        if (hiddenForm.style.display === 'block') {
            hiddenForm.style.display = 'none';
        } else {
            hiddenForm.style.display = 'block';
        }
    });
});

replyToPost.forEach(item => {
    item.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(replyToPost);
        const newReply = {
            name: data.get('name'),
            content: data.get('content'),
        };
        const response = await createReply(newReply);
        return response.data;
});
});