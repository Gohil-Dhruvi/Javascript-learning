let count = 0;

function updateCounter() {
    document.getElementById("counter").innerText = count;
}
function decrease() {
    count--;
    updateCounter();
}
function reset() {
    count = 0;
    updateCounter();
}
function increase() {
    count++;
    updateCounter();
}