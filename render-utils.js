export function renderRegions(region) {
    const div = document.createElement('div');
    div.classList.add(`${region.name}`);
    
    const a = document.createElement('a');
    a.href = `./region-page/?id=${region.id}`;

    const h2 = document.createElement('h2');
    h2.textContent = region.name;

    a.append(h2);
    div.append(a);

    return div;
}

export function renderReviews(user_review) {
    const div = document.createElement('div');
    div.classList.add('review');

    const p = document.createElement('p');
    p.textContent = `${user_review.content}`;

    const span = document.createElement('span');
    span.textContent = `${user_review.rating}`;
    
    div.append(p, span);
    
    return div;
}

export function renderShopInfo(shop_info) {
    const div = document.createElement('div');
    
    const h2 = document.createElement('h2');
    h2.textContent = shop_info.name;

    // const img = document.createElement('img');
    // img.src = `../assets/${shop_info.image}.jpg`;

    const addressP = document.createElement('p');
    addressP.textContent = shop_info.address;

    const phoneP = document.createElement('p');
    phoneP.textContent = shop_info.phone;

    const menuP = document.createElement('p');
    menuP.textContent = shop_info.menu;

    const aboutP = document.createElement('p');
    aboutP.textContent = shop_info.about;

    div.append(h2, addressP, phoneP, menuP, aboutP);
    
    console.log(shop_info);
    return div;
}
