import { logout, getTacoShops } from '../fetch-utils.js';
import { renderTacoShops } from '../render-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const communityBoardButton = document.getElementById('community-board');

communityBoardButton.addEventListener('click', () => {
    // checkAuth();
    window.location.href = './community-board';
});

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayTacoShops() {
    const main = document.querySelector('main');
    main.textContent = '';
    const shopData = await getTacoShops();
    for (let shops of shopData) {
        const shopsEl = renderTacoShops(shops);
        main.append(shopsEl);
    }
}
displayTacoShops();