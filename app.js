// import { signInUser, signupUser } from './fetch-utils.js';
import { regions } from './data.js';
import { renderRegions } from './render-utils.js';

// const signInForm = document.getElementById('sign-in');
// const signInEmail = document.getElementById('sign-in-email');
// const signInPassword = document.getElementById('sign-in-password');

// const signUpForm = document.getElementById('sign-up');
// const signUpEmail = document.getElementById('sign-up-email');
// const signUpPassword = document.getElementById('sign-up-password');

const section = document.querySelector('section');


// if user currently logged in, redirect
// redirectIfLoggedIn();

// signUpForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signupUser(signUpEmail.value, signUpPassword.value);

//     if (user) {
//         // redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });

// signInForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signInUser(signInEmail.value, signInPassword.value);

//     if (user) {
//         // redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });

// function displayRegions() {
//     for (let region of regions) {
//         const regionDiv = renderRegions(region);
//         section.append(regionDiv);
//     }
// }

// displayRegions();