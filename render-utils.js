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


export function renderTacoShops(shops) {
    const div = document.createElement('div'); 
    div.classList.add('shops');

    const a = document.createElement('a');
    a.href = `./shops-info/?id=${shops.id}`;

    const h1 = document.createElement('h1');
    h1.textContent = shops.name;

    const img = document.createElement('img');
    img.src = `../assets/${shops.image}.jpg`;

    const h2 = document.createElement('h2');
    h2.textContent = `${shops.rating} 🌮`;

    div.append(h1, img, h2);

    return div;
} 
