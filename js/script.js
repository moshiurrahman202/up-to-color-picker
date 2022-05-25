/**
 * => Author : Mosiur Rahman sumon
 * => Description : Color picker application with huge dom functionalities
 */
// Globals
let div = null;

// => create onload handler
window.onload = () =>{
    main();
}

// main or boot function
function main(){
    // dom references
    const generaterandomcolorbtn = document.getElementById("generate-random-color");
    const colorModeHexInp = document.getElementById("input-hex");
    const colorSlaiderRed = document.getElementById("color-slider-red");
    const colorSlaiderGreen = document.getElementById("color-slider-green");
    const colorSlaiderBlue = document.getElementById("color-slider-blue");
 // // event listeners
 generaterandomcolorbtn.addEventListener("click", generaterandomcolorforbtn);
 colorModeHexInp.addEventListener("keyup", colorModeHexForInp);
 colorSlaiderRed.addEventListener("change", handleColerSlider(colorSlaiderRed, colorSlaiderGreen, colorSlaiderBlue));
 colorSlaiderGreen.addEventListener("change", handleColerSlider(colorSlaiderRed, colorSlaiderGreen, colorSlaiderBlue));
 colorSlaiderBlue.addEventListener("change", handleColerSlider(colorSlaiderRed, colorSlaiderGreen, colorSlaiderBlue));
//  // event handlears
//  function generaterandomcolorforbtn () {
//     const color = generateColorDecimal();
//    updateColorCodeToDom(color)
// }

 // dom functions
 // for toast message
 function geberateToastMessage(msg){
    div = document.createElement("div");
     div.innerText = msg;
     div.className = "toast-message toast-message-slide-in";
     div.addEventListener("click", ()=>{
         div.classList.remove("toast-message-slide-in");
         div.classList.add("toast-message-slide-out");
 
         div.addEventListener("animationend", ()=>{
             div.remove();
             div = null;
         })
     })
     document.body.appendChild(div);
 
 }

 


 // for hex copy 
//  copybtn.addEventListener("click", () =>{
//      navigator.clipboard.writeText(`#${output.value}`);
//      if(div !== null){
//          div.remove();
//          div = null;
//      }
//      if(isHexValid(output.value)){
//         geberateToastMessage(`#${output.value} copied`)
//      }else{
//          alert("Invalid color code!")
//      }
//  });

 // for rgb copy 
//  copybtn2.addEventListener("click", () =>{
//     navigator.clipboard.writeText(`#${output2.value}`);
//     if(div !== null){
//         div.remove();
//         div = null;
//     }
//     if(isHexValid(output.value)){
//        geberateToastMessage(`${output2.value} copied`)
//     }else{
//         alert("Invalid color code!")
//     }
// });
}

 // event handlears
 function generaterandomcolorforbtn () {
    const color = generateColorDecimal();
   updateColorCodeToDom(color)
 }

 function colorModeHexForInp(e){
    const hexcolor = e.target.value;
    if(hexcolor){
        this.value = hexcolor.toUpperCase();
        if(isHexValid(hexcolor)){
            const color = hexToDecimalColors(hexcolor)
            updateColorCodeToDom(color);
        }
    }
}

function handleColerSlider(colorSlaiderRed, colorSlaiderGreen, colorSlaiderBlue){
    return function (){
        const color = {
            red: parseInt(colorSlaiderRed.value),
            green: parseInt(colorSlaiderGreen.value),
            blue: parseInt(colorSlaiderBlue.value),
        };
        updateColorCodeToDom(color);
    };
}

  //  utils
  /**
  * update dom element with calculated color values
  * @param {object}  color
  */
 function updateColorCodeToDom(color){
    const hexcolor = genHexcol(color);
    const rgbcolor = genRgbCol(color);

    document.getElementById("color-display").style.backgroundColor = `#${hexcolor}`;
    document.getElementById("input-hex").value = hexcolor;
    document.getElementById("input-rgb").value =rgbcolor;
    document.getElementById("color-slider-red").value = color.red;
    document.getElementById("color-slider-red-label").innerText = color.red;
    document.getElementById("color-slider-green").value = color.green;
    document.getElementById("color-slider-green-label").innerText = color.green;
    document.getElementById("color-slider-blue").value = color.blue;
    document.getElementById("color-slider-blue-label").innerText = color.blue;
 }


// for write hex code
// output.addEventListener("keyup", function(e){
//     const color = e.target.value;
//     if(color){
//         output.value = color.toUpperCase();
//         if(isHexValid(color)){
//             root.style.backgroundColor = `#${color}`;
//             output2.value = hexTorgb(color);
//         }
//     }
// });



/**
 * function 1 => generate three randon decimal number for red, green and blue
 * @returns {object}
 */
function generateColorDecimal(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    return{
        red,
        green,
        blue
    };
}


/**
 * function 2 generate hex color code
 * @param {object} color 
 * @returns {string}
 */
function genHexcol({red, green, blue}){
    // const {red, green, blue} = generateColorDecimal();
    const getTowCode = (color) => {
        const hex = color.toString(16);
        return hex.length == 1 ? `0${hex}` : hex;
    }
    return `${getTowCode(red)}${getTowCode(green)}${getTowCode(blue)}`.toUpperCase();

}


/**
 * function 3 gemerate rgba color code
 * @param {object} color 
 * @returns {string}
 */
function genRgbCol({red, green, blue}){
    return `rgb(${red}, ${green}, ${blue})`;
}

/**
 *  convert hex color  to decimal color object 
 * @param {string} hex 
 * @returns {object}
 */
function hexToDecimalColors(hex){
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4), 16);
    return {
        red,
        green,
        blue
    }
}


/**
 * for check hex code
 * @param {string} color 
 * @returns {boolean}
 */
function isHexValid(color){
    if(color.length !== 6)return false;

    return/^[0-9A-Fa-f]{6}$/i.test(color);
}
