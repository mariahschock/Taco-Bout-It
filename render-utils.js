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

export function renderTacoShops(shops) {
    const div = document.createElement('div'); 
    div.classList.add('shops');

    const a = document.createElement('a');
    a.href = `./shops-info/?id=${shops.id}`;

    const h1 = document.createElement('h1');
    h1.textContent = shops.name;

    const img = document.createElement('img');
    img.href = `${shops.image}.jpg`;

    div.append(h1, img);

    return div;
} 