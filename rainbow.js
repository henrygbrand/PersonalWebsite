window.addEventListener('load', function() { 
    let element = document.getElementById('text');
    element.onmouseover = function() {
        element.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        element.style.fontSize = `${Math.floor(Math.random() * 100) + 2}px`;
        element.style.fontFamily = "VT323";
        element.style.marginLeft = `${Math.floor(Math.random() * 200)}`;
    }
});