const website = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const container = document.getElementById("container")

for (let i = 1; i < 899; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    const label = document.createElement('span');
    label.innerText = `#${i}`

    const img = document.createElement('img');
    img.src = `${website}${i}.png`;

    img.classList.add('pokemon');

    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

}