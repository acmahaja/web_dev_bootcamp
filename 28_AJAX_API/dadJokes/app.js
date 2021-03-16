const getDadJokes = async() => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.innerText = res.data.joke;
        ul.appendChild(li);

    } catch (error) {
        console.log("ERROR", error);
        return "NO JOKES AVAILABLE! SORRY :(" + e;


    }
}


document.querySelector('button').addEventListener('click', (e) => {
    getDadJokes();
    e.preventDefault();
})