export function renderRegions(region) {
    const a = document.createElement('a');
    a.href = `./region-page/?id=${region.id}`;

    const div = document.createElement('div');
    div.classList.add('Northwest');
    div.style.top = region.top;
    div.style.left = region.left;

    const h2 = document.createElement('h2');
    h2.textContent = region.name;

    a.append(h2);
    div.append(a);

    return div;
}