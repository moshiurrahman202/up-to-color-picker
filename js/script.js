/*
=> Requirements
=> Change The Background Color By Randon Hex Color By Clocking a Button
=> Also dispaly the hex code to a disabled input field
=> Add a button to copy the hex code
=> Add a toast message when copied
=> User can type ther own hex code too
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
 const copybtn = document.getElementById("copy-btn");

 changebtn.addEventListener("click", () =>{
     const bgColor = genHexcol();
     root.style.backgroundColor = bgColor;
     output.value = bgColor;
 });

 copybtn.addEventListener("click", () =>{
     navigator.clipboard.writeText(output.value);
     if(div !== null){
         div.remove();
         div = null;
     }
     if(isHexValid(output.value)){
        geberateToastMessage(`${output.value} copied`)
     }else{
         alert("Invalid color code!")
     }
 });
}

output.addEventListener("keyup", function(e){
    const color = e.target.value;
    if(color && isHexValid(color)){
        root.style.backgroundColor = color;
    }
});
// Step 2 => random rgb color generator function
function genHexcol(){
    // formate of rgb color high=> rgb(0,0,0) low=> rgb(255,255,255)
    // 255, 255, 255 =hex-> #ffffff
    const red = Math.floor(Math.random() *255);
    const green = Math.floor(Math.random() *255);
    const blue = Math.floor(Math.random() *255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}

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
 * 
 * @param {string} color 
 */
function isHexValid(color){
    if(color.length !== 7)return false;
    if (color[0] !== "#") return false;

    color = color.substring(1);
    return/^[0-9A-Fa-f]{6}$/i.test(color);
}
// Step 3 => collect all necerssry referrences
// Step 4 => handel the Change Button click event
// Step 5 => handle the copy Button Click event
// Step 6 => activate toast message 
// Step 7 => Create a dynamic toast message
// Step 8 => Cleare toast message 
// Step 9 => Create isHexValid function
// Step 10 => Implement change handler on input field
// Step 11 => prevent copy Hex code if it is not valid