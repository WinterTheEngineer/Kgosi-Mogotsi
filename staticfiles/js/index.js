let innerCursor = document.getElementById('inner-cursor')
let outerCursor = document.getElementById('outer-cursor')

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.toggle("active");
    });

    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove("active");
    });
});