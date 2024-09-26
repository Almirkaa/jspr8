'use strict';
// 1

// let btn1 = document.getElementById('clickBtn');

document.getElementById('clickBtn').addEventListener('mousedown', function () {
    this.style.transform = 'scale(1.2)';
})
document.getElementById('clickBtn').addEventListener('mouseup', function () {
    this.style.transform = 'none';
})
document.getElementById('hoverBtn').addEventListener('mouseover', function () {
    this.style.boxShadow = '5px 5px 3px rgba(255,0,0,0.5)';
})
document.getElementById('hoverBtn').addEventListener('mouseout', function () {
    this.style.boxShadow = 'none';
})
document.getElementById('dblBtn').addEventListener('dblclick', function () {
    this.style.color = 'red';
})


// 2

let button = document.getElementById('button');

button.addEventListener('keydown', function (event) {
    let key = event.key.toLowerCase();

    if (key === 'r') {
        button.style.backgroundColor = 'red';
    } else if (key === 'g') {
        button.style.backgroundColor = 'green';
    } else if (key === 'b') {
        button.style.backgroundColor = 'blue';
    }
});
button.addEventListener('keyup', function (event) {
    button.style.backgroundColor = '';
});

// 3

// document.getElementById('block').addEventListener('keydown', function (event) {
   
//     switch (keyEvent.code) {
//         case 'KeyW':
//             block.style.top = `${top - 1}px`;
//             break;
//         case 'KeyS':
//             block.style.top = `${top + 1}px`;
//             break;
//         case 'KeyA':
//             block.style.left = `${left - 1}px`;
//             break;
//         case 'KeyD':
//             block.style.left = `${left + 1}px`;
//             break;
//     }
// })
let block =document.getElementById('block');
document.addEventListener('keydown', function (keyEvent) {
    let left = parseInt(block.style.left) || 0;
    let top = parseInt(block.style.top) || 0;

    switch (keyEvent.code) {
        case 'KeyW':
            block.style.top = `${top - 1}px`;
            break;
        case 'KeyS':
            block.style.top = `${top + 1}px`;
            break;
        case 'KeyA':
            block.style.left = `${left - 1}px`;
            break;
        case 'KeyD':
            block.style.left = `${left + 1}px`;
            break;
    }
})