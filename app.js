let clicks = 0;
console.log("Hello to developers!")
function addClick() {
    update(++clicks);
}

document.body.onkeyup = function(key){
    if(key.keyCode == 32){
        addClick();
    }
    if(key.keyCode == 82){
        resetClick();
    }
}

function resetClick() {
    clicks = 0;
    update(clicks);
}

function update(clicks) {
    document.getElementById("counter").innerText = clicks;
}
