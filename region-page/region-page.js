import { logout, getTacoShops, getRegionName } from '../fetch-utils.js';
import { renderTacoShops, renderRegionName } from '../render-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const communityBoardButton = document.getElementById('community-board');
const homeButton = document.getElementById('home');

communityBoardButton.addEventListener('click', () => {
    // checkAuth();
    window.location.href = '../community-board';
});

logoutButton.addEventListener('click', () => {
    logout();
});
homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

async function displayRegionName() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const regionName = await getRegionName(id);

    const section = document.getElementById('region');
    section.textContent = '';

    for (let name of regionName) {
        const regionEl = renderRegionName(name);
        section.append(regionEl);
    }
}
displayRegionName();

async function displayTacoShops() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const shopsList = await getTacoShops(id);

    const div = document.getElementById('shops');
    div.textContent = '';

    for (let shops of shopsList) {
        const shopsEl = renderTacoShops(shops);
        div.append(shopsEl);
    }
}
displayTacoShops();
