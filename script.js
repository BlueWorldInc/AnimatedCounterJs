let counters = document.querySelectorAll(".counter");
let speedToLoad = 200;

// window.addEventListener("load", startCounters);
window.addEventListener("load", addCounters);

function hello() {
    console.log("hello");
}

function startCounters() {
    for (let i = 0; i < counters.length; i++) {
        console.log(counters[i].dataset.target);
        counters[i].innerHTML = counters[i].dataset.target;
    }
}

function addCounters() {
    let timeout = setTimeout(addCounters, 1);
    for (let i = 0; i < counters.length; i++) {
        let increment = parseInt(counters[i].dataset.target / speedToLoad);
        if (parseInt(counters[i].innerText) < parseInt(counters[i].dataset.target)) {
            counters[i].innerText = Math.round(parseInt(counters[i].innerText) + increment);
        } else {
            clearTimeout(timeout);
        }
    }
}

// setTimeout(addCounters, 1);