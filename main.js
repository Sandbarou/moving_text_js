const title = document.querySelector("h1");

const square = document.querySelector("div");
const maxHeight = square.clientHeight;
const maxWidth = square.clientWidth;

title.style.position = "relative";
let topPos = 0;
let leftPos = 0;
let forceH = -2;
let forceW = -2;

function animation() {
    if (topPos == 0) { forceH *= -1 }
    else if (topPos == maxHeight - title.offsetHeight) { forceH *= -1}
    
    if (leftPos == 0) { forceW *= -1 }
    else if (leftPos == maxWidth - title.offsetWidth) { forceW *= -1}
    
    topPos += forceH; 
    leftPos += forceW; 
    
    title.style.top = topPos + "px";
    title.style.left = leftPos + "px";

    requestAnimationFrame(animation);
}

requestAnimationFrame(animation);

