
function randomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    bg = `#${randomColor}`;
    console.log(bg)
    return bg;
}

document.addEventListener("keydown", function event(){

    document.body.style.backgroundColor = randomColor();
    console.log(event);
    console.log(document.body.style.backgroundColor);
});