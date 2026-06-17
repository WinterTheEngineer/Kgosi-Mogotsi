document.addEventListener("DOMContentLoaded", function() {
    // cursor styles
    let cursor = document.getElementById('cursor')
    
    document.addEventListener('mousemove', moveCursor);

    function moveCursor(e){
        let x = e.clientX;
        let y = e.clientY;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    }

    let links = Array.from(document.querySelectorAll("a"));

    // mouse click
    // hover (only works for links)
    document.addEventListener('mousedown', () => {
        cursor.classList.toggle("active");
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.toggle("hover");
        });

        link.addEventListener('mouseleave', () => {
            cursor.classList.remove("hover");
        });
    });
});


