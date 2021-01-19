let body = document.querySelector('body');
let btn = document.querySelector('button');

const setcolor = () => {
    const color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    body.style.backgroundColor = color;
    setname(color);
}

const setname = (name) => {
    let H1 = document.querySelector('h1');
    H1.innerText = name;
}

btn.addEventListener('click', setcolor)