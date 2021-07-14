// THE CALLBACK VERSION
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
    // THE PROMISE VERSION 
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

// fakeRequestCallback('books.com/page1', (response) => {
//     console.log("It Worked")
//     console.log(response);
//     fakeRequestCallback('books.com/page2', (response) => {
//         console.log("It Worked again")
//         console.log(response);
//     }, (err) => console.log("shits broke ", err))
// }, (err) => console.log("shits broke ", err))

console.log(fakeRequestPromise('asdjklasd'))

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("IT WORKED!!!!! (page 1)");
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log("IT WORKED!!!!! (page 2)");
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log("IT WORKED!!!!! (page 3)");
        return fakeRequestPromise('yelp.com/api/coffee/page4')
    })
    .catch(() => {
        console.log("OH NO, A REQUEST FAILED!!!");
    })