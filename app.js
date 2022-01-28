let clicks = 0;

function addClick() {
    update(++clicks);
}

function resetClick() {
    clicks = 0;
    update(clicks);
}

function update(clicks) {
    document.getElementById("counter").innerText = clicks;
}