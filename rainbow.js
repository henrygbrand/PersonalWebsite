window.addEventListener('load', function() { 
    let element = document.getElementById('text');
    element.onmouseover = function() {
        element.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        element.style.fontSize = `${Math.floor(Math.random() * 200) + 25}px`;
        element.style.fontFamily = "VT323";
        element.style.right = `${Math.floor(Math.random() * 750)}px`;
        element.style.left = `${Math.floor(Math.random() * 750)}px`;
        element.style.top = `${Math.floor(Math.random() * 750)}px`;
        element.style.bottom = `${Math.floor(Math.random() * 750)}px`;
    }
});