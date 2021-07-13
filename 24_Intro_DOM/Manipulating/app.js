const allLinks = document.querySelectorAll('a');
console.log(allLinks);

for (const link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}
console.log(document.querySelector('h1').innerHTML);
console.log(document.querySelector('h1').innerText);

document.querySelector('h1').innerText = '<i>askdjas</i>'
document.querySelector('h1').innerHTML = '<i>askdjas</i>'

console.log(document.querySelector('p').innerText);
console.log(document.querySelector('p').innerHTML);
document.querySelector('h1').innerHTML += '<sup>asdja</sup>'

const firstLink = document.querySelector('a')
console.log(firstLink);
console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));

console.log(firstLink.getAttribute('title'));

const input = console.log(document.querySelector('input[type="text"]'))
console.log(input);

const h1 = document.querySelector('h1');
console.log(h1.style);
console.log(h1.style.color);
h1.style.color = 'green'
h1.style.fontSize = '3em'
h1.style.border = '2px solid pink'

console.log(allLinks);
for (const link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta'
    link.style.textDecorationStyle = 'wavy'
}

console.log(window.getComputedStyle(h1));
console.log(window.getComputedStyle(h1).color);

const h2 = document.querySelector('h2')
console.log(h2);
h2.classList.add('purple')
h2.classList.add('border')
console.log(h2.classList);
h2.classList.remove('border')
console.log(h2.classList.contains('border'));
console.log(h2.classList.toggle('border'));
console.log(h2.getAttribute('class'));


const firstBold = document.querySelector('b')
console.log(firstBold);
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);

const p = document.querySelector('p')

console.log(p);
console.log(p.childElementCount);


const newImg = document.createElement('img');
console.log(newImg);