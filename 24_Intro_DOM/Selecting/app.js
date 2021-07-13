const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const toc = document.getElementById('toc')
console.dir(toc)

const imgs = document.getElementsByTagName('img')
console.log(imgs);
console.log(imgs.length);

console.log(document.querySelector('p'));
console.log(document.querySelector('#banner'));
console.log(document.querySelector('.square'));
console.log(document.querySelector('img'));
console.log(document.querySelector('img:nth-of-type(2)'));
console.log(document.querySelector('a[title="Java"]'));
console.log(document.querySelectorAll('p'));
console.log(document.querySelectorAll('img'));
console.log(document.querySelectorAll('a'));


const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}