const show = document.querySelector("input")
const button = document.querySelector('button')
const list = document.getElementById('.list')

console.log(list);

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const newImg = document.createElement('IMG')
            newImg.src = result.show.image.medium
            document.body.append(newImg);
            
        }
    }
}

const getShows = async (show) =>{
    try {
        // const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`);
        makeImages(res.data);
        // return data
        
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!")
        console.log(e)
    }}


button.addEventListener('click', () => getShows(show.value))
