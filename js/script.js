/*
=> Requirements
=> Change The Background Color By Randon Hex Color By Clocking a Button
=> Also dispaly the hex code to a disabled input field
=> Add a button to copy the hex code
=> Add a toast message when copyed
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
     geberateToastMessage(`${output.value} copied`)
 });
}
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
// Step 3 => collect all necerssry referrences
// Step 4 => handel the Change Button click event
// Step 5 => handle the copy Button Click event
// Step 6 => activate toast message 
// Step 7 => Create a dynamic toast message
// Step 8 => Cleare toast message 