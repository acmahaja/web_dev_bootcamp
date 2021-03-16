const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// makeRequest(() => {
//     makeRequest(() => {

//     }, () => {
//         makeRequest(() => {

//         }, () => {})
//     })
// }, () => {})


fakeRequestCallback('books.com/page1',
    (response) => {
        console.log("IT WORKED!!!!");
        console.log(response);
        fakeRequestCallback('books.com/page2',
            (response) => {
                console.log("IT WORKED (2nd)!!!!");
                console.log(response);
                fakeRequestCallback('books.com/page3',
                    (response) => {
                        console.log("IT WORKED (3rd)!!!!");
                        console.log(response);
                    },
                    (err) => {
                        console.log("ERRORRR (3rd req)!!!", err);
                    }
                )
            },
            (err) => {
                console.log("ERRORRR (2nd req)!!!", err);
            }
        )
    },
    (err) => {
        console.log("ERRORRR", err);
    }
)