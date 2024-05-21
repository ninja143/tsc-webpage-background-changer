const btnEle = document.querySelector(".clickMe");
const bodyEle = document.body;
const rgbObj = new RandomRGB();
btnEle.addEventListener("click", ()=>{
    bodyEle.style.backgroundColor = "" + rgbObj.randomHexColor();
});
console.log("Hello, I am working."); //randomRgbColor();

//# sourceMappingURL=index.377278e2.js.map
