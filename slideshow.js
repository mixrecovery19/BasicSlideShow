let timer = 5;

let images = [
    ['congrats1', 'Happy lady at speak easy during prohibition'],
    ['boom2', 'Born to parents that escaped the clutches of a dictator'],
    ['silent3', '15 school girls would never have stomped another girl during this era'],
    ['genmill3', 'is my right butt cheek realy bigger than my left'],
    ['genz6', 'no seriously, is my butt cheek bigger than my left'],
    ['yoda', 'we will never meet yoda at the rate you are going'],
];

let img, count = 1;

function startSlideshow() {
    img = document.getElementById('congrats1');
    window.setTimeout(cueNextSlide, timer * 1000);
}
function cueNextSlide() {
    let next = new Image();

    next.onerror = function() {
        alert('Failed to load next image');
    };

    next.onload = function() {
        img.src = next.src;
        img.alt = images[count][1];

        img.width = next.width;
        img.height = next.height;

        if (++count == images.length) { count = 0; }

        window.setTimeout(cueNextSlide, timer * 1000);
    };
    next.src = 'images/' + images[count][0] + '.jpg';
}
function addLoadListener(fn) {
    if (window.addEventListener) {
        window.addEventListener('load', fn, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', fn);
    } else {
        window.onload = fn;
    }
}
addLoadListener(startSlideshow);