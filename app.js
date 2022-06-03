import { signInUser, signupUser, getUser } from './fetch-utils.js';
import { checkAuth, getRegions, logout } from './fetch-utils.js';
import { renderRegions } from './render-utils.js';

const signInForm = document.getElementById('sign-in');
//const signInEmail = document.getElementById('sign-in-email');
//const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
//const signUpEmail = document.getElementById('sign-up-email');
//const signUpPassword = document.getElementById('sign-up-password');

const section = document.querySelector('section');
const communityBoardButton = document.getElementById('community-board');
const authenticationButton = document.getElementById('auth');
const logoutButton = document.getElementById('logout');
const meetButton = document.getElementById('meet-button');

// Buttons
communityBoardButton.addEventListener('click', () => {
    checkAuth();
    const user = getUser();
    if (user) {
        location.assign('./community-board');
    } else {
        alert('Please sign in to view community board :)');
    }
});

logoutButton.addEventListener('click', () => {
    logout();
});
meetButton.addEventListener('click', () => {
    window.location.href = './bio-page';
});

// Sign-Up and Login Form

authenticationButton.addEventListener('click', () => {
    const displayForm = document.querySelector('.dropdown');  
    if (displayForm.style.display === 'block') {
        displayForm.style.display = 'none';
    } else {
        displayForm.style.display = 'block';
    }
});

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./');
    }   
    
});

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('./');
        
    } 
    checkAuth();
    
});

async function displayRegions() {
    section.textContent = '';
    const regions = await getRegions();
    for (let region of regions) {
        const regionDiv = renderRegions(region);
        section.append(regionDiv);
    }
    const user = getUser();
    if (user) {
        authenticationButton.classList.add('hide');
    } else {
        logoutButton.classList.add('hide');
    }
}

displayRegions();
// if user currently logged in, redirect
// redirectIfLoggedIn();

// signUpForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signupUser(data.get('email'), data.get('password'));

//     if (user) {
//         // redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }});

// signInForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signInUser(signInEmail.value, signInPassword.value);

//     if (user) {
//         // redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });