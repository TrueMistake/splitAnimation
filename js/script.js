const wrap = document.querySelector('.list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {wrap.classList.toggle('show')});

function createItem() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const item = document.createElement('div');
            item.classList.add('item');
            item.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            wrap.appendChild(item);
        }
    }
}

createItem();
