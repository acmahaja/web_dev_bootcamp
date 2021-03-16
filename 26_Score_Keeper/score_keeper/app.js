const score = {
    p1: 0,
    p2: 0,
    p1_get() {
        return this.p1;

    },
    p2_get() {
        return this.p2;

    },
    p1_increase() {
        this.p1++;
        return this.p1;
    },
    p2_increase() {
        this.p2++;
        return this.p2;
    },
    reset() {
        this.p1 = 0;
        this.p2 = 0;
        return {
            p1: 0,
            p2: 0
        }
    }
}

const color = () => {
    if (score.p1_get() > score.p2_get()) {
        document.querySelector("#p1").classList.value = "winning";
        document.querySelector("#p2").classList.value = "losing";
    } else if (score.p1_get() < score.p2_get()) {
        document.querySelector("#p2").classList.value = "winning";
        document.querySelector("#p1").classList.value = "losing";
    } else {
        document.querySelector("#p1").classList.value = "draw";
        document.querySelector("#p2").classList.value = "draw";
    }
}

const disableCheck = () => {
    if (score.p1_get() === parseInt(document.querySelector('select').value) || score.p2_get() === parseInt(document.querySelector('select').value)) {
        document.querySelector("#buttonP1").disabled = true;
        document.querySelector("#buttonP2").disabled = true;
        console.log("Testing");
    }
    console.log(document.querySelector("#p1").innerText);
}

document.querySelector("#buttonP1").addEventListener('click', () => {
    document.querySelector("#p1").innerHTML = score.p1_increase();
    color();
    disableCheck();
})

document.querySelector("#buttonP2").addEventListener('click', () => {
    document.querySelector("#p2").innerHTML = score.p2_increase();
    color();
    disableCheck();
})

document.querySelector("#resetScore").addEventListener('click', () => {
    document.querySelector("#p1").innerHTML = score.reset().p1;
    document.querySelector("#p2").innerHTML = score.reset().p2;

    color();
    document.querySelector("#buttonP1").disabled = false;
    document.querySelector("#buttonP2").disabled = false;
})

document.querySelector("#p1").addEventListener('c', () => {});

document.querySelector("#p2").addEventListener('c', () => {});