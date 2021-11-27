background = document.body.style.backgroundColor;

function seizureWarning(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    background = `#${randomColor}`
}

while (true){
    setTimeout(seizureWarning(), 500)
}