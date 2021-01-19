const tweetForm = document.querySelector("#tweetForm");

tweetForm.addEventListener('submit', (e) => {
    // const userName = document.querySelectorAll("input")[0];
    // const tweetMessage = document.querySelectorAll("input")[1];

    const userName = tweetForm.elements.username.value;
    const tweetMessage = tweetForm.elements.tweet.value;

    const newTweet = document.createElement('li');
    newTweet.innerText = `${userName}: ${tweetMessage}`;
    document.querySelector("#tweets").appendChild(newTweet);
    tweetForm.elements.username.value = "";
    tweetForm.elements.tweet.value = "";
    // tweets.appendChild(`<li> ${userName.value}: ${tweetMessage.value} </li>`);
    e.preventDefault();

})