/*
=> Requirements
=> Change The Background Color By Randon Hex Color By Clocking a Button
=> Also dispaly the hex code to a disabled input field
=> Add a button to copy the hex code
=> Add a toast message when copied
=> User can type ther own hex code too
=> show RGB Color too but do not need to edit it
=> User can also copy RGB color code 
*/

// Globals
let div = null;

// Step 1 => create onload handler
window.onload = () =>{
    main();
}

function main(){
 const root = document.getElementById("root");
 const changebtn = document.getElementById("changebtn");
 const output = document.getElementById("output");
 const output2 = document.getElementById("output2");
 const copybtn = document.getElementById("copy-btn");
 const copybtn2 = document.getElementById("copy-btn2");

 // for change color
 changebtn.addEventListener("click", () =>{
     const color = generateColorDecimal();
     const hex = genHexcol(color);
     const rgb = genRgbCol(color);
     root.style.backgroundColor = hex;
     output.value = hex.substring(1);
     output2.value = rgb;
 });

 // for hex copy 
 copybtn.addEventListener("click", () =>{
     navigator.clipboard.writeText(`#${output.value}`);
     if(div !== null){
         div.remove();
         div = null;
     }
     if(isHexValid(output.value)){
        geberateToastMessage(`#${output.value} copied`)
     }else{
         alert("Invalid color code!")
     }
 });

 // for rgb copy 
 copybtn2.addEventListener("click", () =>{
    navigator.clipboard.writeText(`#${output2.value}`);
    if(div !== null){
        div.remove();
        div = null;
    }
    if(isHexValid(output.value)){
       geberateToastMessage(`${output2.value} copied`)
    }else{
        alert("Invalid color code!")
    }
});
}

// for write hex code
output.addEventListener("keyup", function(e){
    const color = e.target.value;
    if(color){
        output.value = color.toUpperCase();
        if(isHexValid(color)){
            root.style.backgroundColor = `#${color}`;
            output2.value = hexTorgb(color);
        }
    }
});

// function 1 => generate three randon decimal number for red, green and blue
// return as a object
function generateColorDecimal(){
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    return{
        red,
        green,
        blue,
    };
}

// function 2 generate hex color code
function genHexcol({red, green, blue}){
    // const {red, green, blue} = generateColorDecimal();
    const getTowCode = (color) => {
        const hex = color.toString(16);
        return hex.length == 1 ? `0${hex}` : hex;
    }
    return `#${getTowCode(red)}${getTowCode(green)}${getTowCode(blue)}`.toUpperCase();

}

// function 3 gemerate rgba color code
function genRgbCol({red, green, blue}){
    return `rgb(${red}, ${green}, ${blue})`;
}
/**
 *  convert hex to rgb 
 * @param {string} hex 
 */
function hexTorgb(hex){
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4), 16);
    return `rgb(${red}, ${green}, ${blue})`
}

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
/**
 * for check hex code
 * @param {string} color 
 */
function isHexValid(color){
    if(color.length !== 6)return false;

    return/^[0-9A-Fa-f]{6}$/i.test(color);
}
// Step 2 => random rgb color generator function
// Step 3 => collect all necerssry referrences
// Step 4 => handel the Change Button click event
// Step 5 => handle the copy Button Click event
// Step 6 => activate toast message 
// Step 7 => Create a dynamic toast message
// Step 8 => Cleare toast message 
// Step 9 => Create isHexValid function
// Step 10 => Implement change handler on input field
// Step 11 => prevent copy Hex code if it is not valid
// Step 12 => Refactor the color generator function
// Step 13 => Update color code to desplay rgb colors
// Step 14 => Create hex to rgb function
// Step 15 => Update change handler
// Step 16 => Implement copy function