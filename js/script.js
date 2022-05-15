/*
=> Requirements
=> Change The Background Color By Randon Hex Color By Clocking a Button
=> Also dispaly the hex code to a disabled input field
*/


// Step 1 => create onload handler
window.onload = () =>{
    main();
}

function main(){
 const root = document.getElementById("root");
 const btn = document.getElementById("btn");
 const output = document.getElementById("output");
 btn.addEventListener("click", () =>{
     const bgColor = genHexcol();
     root.style.backgroundColor = bgColor;
     output.value = bgColor;
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
// Step 3 => collect all necerssry referrences
// Step 4 => handel the click event