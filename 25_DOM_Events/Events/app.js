document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}

function shout() {
    console.log("SHOUT!");
}

function twist() {
    console.log("TWIST!");
}

const tasButton = document.querySelector('#tas')
tasButton.addEventListener('click', shout, { once: true })
tasButton.addEventListener('click', twist)