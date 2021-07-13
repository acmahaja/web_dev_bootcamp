const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!



const spans = document.getElementsByTagName('span')

let index = 0;
for (const span of spans) {
    span.style.color = colors[index++];
}