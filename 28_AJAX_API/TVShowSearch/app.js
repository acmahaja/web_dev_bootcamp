const button = document.querySelector('button').addEventListener('click', async(e) => {

    e.preventDefault();
    try {
        const search = document.querySelector('input#movieSearch');
        const header = { params: { q: search.value.replace(/\s/g, '+') } }
        const results = await axios.get('http://api.tvmaze.com/search/shows?q=', header);
        for (let result of results.data) {
            console.log(result.show);
            if (result.show.image) {
                const imgList = document.querySelector('#moviePosters');
                const img = document.createElement('img');
                img.src = result.show.image.medium;
                imgList.appendChild(img);
            }

        }
    } catch (error) {
        console.log("ERRORR:", error);
    }

})