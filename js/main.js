// * First option *
document.getElementById('box').onmousemove = function (i) {
    i = i;
    // console.log(i); // for testing
    document.getElementById('offX').innerHTML = i.offsetX;
    document.getElementById('offY').innerHTML = i.offsetY;
}

// * Second option *
// const box = document.getElementById('box');
// const offX = document.getElementById('offX');
// const offY = document.getElementById('offY');

// box.addEventListener('mousemove', coordinates)

// function coordinates (i) {
//     i = i;
//     // console.log(i); for testing
//     offX.innerHTML = i.offsetX;
//     offY.innerHTML = i.offsetY;
// }