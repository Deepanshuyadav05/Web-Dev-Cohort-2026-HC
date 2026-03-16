const formatSelect = document.getElementById('format');
const toneSelect = document.getElementById('tone');
const generateBtn = document.getElementById('generateBtn');
const palette = document.getElementById('palette');

function randomRGB(tone){
    let min = 0;
    let max = 255;

    //these min and max ranges are just assumptions
    if(tone === "light"){
        min = 150;
        max = 255;
    }
    else if(tone === "dark"){
        min = 0;
        max = 125;
    }
    else{
        min = 0;
        max = 255;
    }
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const g = Math.floor(Math.random() * (max - min + 1)) + min;
    const b = Math.floor(Math.random() * (max - min + 1)) + min;

    return {r, g, b}
}

function rgbToHex(r, g, b){
    return "#" + [ r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

function generateColorPalette() {

    palette.innerHTML = "";

    for(let i = 0; i < 6; i++){
        const {r, g, b} = randomRGB(toneSelect.value);

        let color;

        if(formatSelect.value === "hex"){
            //todo: rgb to hex
            color = rgbToHex(r, g, b);
        }
        else{
            //rgb
            color = `rgb(${r}, ${g}, ${b})`;
        }

        const div = document.createElement('div');
        div.classList.add('color');
        div.style.backgroundColor = color;
        div.textContent = color;
        palette.appendChild(div);

    }



}

generateBtn.addEventListener('click', generateColorPalette);

//if we need that when we open the website then also we see the color then do this
generateColorPalette();