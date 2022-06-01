import { logout, getTacoShops } from '../fetch-utils.js';
import { renderTacoShops } from '../render-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const communityBoardButton = document.getElementById('community-board');
const homeButton = document.getElementById('home');

communityBoardButton.addEventListener('click', () => {
    // checkAuth();
    window.location.href = './community-board';
});

logoutButton.addEventListener('click', () => {
    logout();
});
homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

async function displayTacoShops() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const shopsList = await getTacoShops(id);

    const main = document.querySelector('main');
    main.textContent = '';
    for (let shops of shopsList) {
        const shopsEl = renderTacoShops(shops);
        main.append(shopsEl);
    }
}
displayTacoShops();