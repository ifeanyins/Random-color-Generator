for (i = 0; i < 9; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

let btn = document.querySelector('.btn');
let randomColorBlock = document.querySelectorAll('.box');

function randomHexColor(){
    let colorLength = 6;
    let chars = '0123456789abcdef';
    let color = '';

    for(i = 0; i < colorLength; i++){
        let randomColor = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColor, randomColor+1);
    }
   return `#` + color
}

btn.addEventListener('click', adColor)

function adColor(){
    randomColorBlock.forEach(e=>{
       let randomCi = randomHexColor()
       e.style.backgroundColor = randomCi;
       e.innerHTML = randomCi;
    })
}