const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    //img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    //img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

let links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}

document.querySelector('#banner').getAttribute('src')

links = document.querySelectorAll('a');
for (let link of links) {
    link.style.color = 'cyan';
    link.style.textDecorationColor = 'magenta'
    link.style.textDecorationStyle = 'wavy'
}