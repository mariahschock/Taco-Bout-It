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

export function renderRegionName(region) {
    const div = document.createElement('div');
    div.classList.add(`${region.name}`);
    const h1 = document.createElement('h1');
    h1.textContent = region.name;

    div.append(h1);
    return div;
}

export function renderTacoShops(shops) {
    const div = document.createElement('div'); 
    div.classList.add('shops');

    const a = document.createElement('a');
    a.href = `../shop-info/?id=${shops.id}`;

    const h1 = document.createElement('h1');
    h1.textContent = shops.name;

    const img = document.createElement('img');
    img.src = `../assets/${shops.image}.jpg`;

    const h2 = document.createElement('h2');
    h2.textContent = `${shops.rating} 🌮`;

    div.append(h1, img, h2);
    a.append(div);

    return a;
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
    div.classList.add('shop');

    const h2 = document.createElement('h2');
    h2.textContent = shop_info.name;

    const img = document.createElement('img');
    img.src = `../assets/${shop_info.image}.jpg`;

    const abouth4 = document.createElement('h4');
    abouth4.textContent = shop_info.about;

    const addressh3 = document.createElement('h3');
    addressh3.textContent = shop_info.address;

    const phoneh3 = document.createElement('h3');
    phoneh3.textContent = shop_info.phone;

    const menuA = document.createElement('a');
    menuA.href = `${shop_info.menu}`;
    menuA.textContent = `${shop_info.name} menu`;

    

    div.append(h2, img, abouth4, addressh3, phoneh3, menuA,);
    
    return div;
}

