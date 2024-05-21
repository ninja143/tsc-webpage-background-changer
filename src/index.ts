const btnEle = document.querySelector('.clickMe') as HTMLButtonElement;
const bodyEle: HTMLElement = document.body;
import { RandomRGB } from "../modules/RandomRGB";


const rgbObj = new RandomRGB();
btnEle.addEventListener("click", (): void => {
    bodyEle.style.backgroundColor = '' + rgbObj.randomHexColor();
})

console.log('Hello, I am working.'); //randomRgbColor();