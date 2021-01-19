const btn = document.querySelector('#v2')
btn.onclick = function() {
    console.log("YOU CLICKED ME");
    console.log("I HOPE IT WORKED");
}

function scream() {
    console.log("AAAAAAHHHH");
    console.log("STOP TOUCHING ME");
}

btn.onmouseenter = scream;

//Should use a function not just a method!
document.querySelector('h1').onclick = function() {
    alert('you clicked the h1');
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener('mouseup', function() {
    alert("CLICKED")
})

function twist() {
    console.log("TWIST")
}

function shout() {
    console.log("SHOUT")
}

const tas = document.querySelector("#tas");
tas.addEventListener('click', twist, { once: true })
tas.addEventListener('click', shout)