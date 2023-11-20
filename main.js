const colors = ["#FF608C", "#FFFFFF", "#00C1B5", "#FF6519", "#FFBE00", "#1D3FBB", "#E30512"];
const body = document.body;


window.addEventListener("scroll", () => {
    if (window.scrollY >= 0) {
        body.style.backgroundColor = colors[0];
    }
    if (window.scrollY > window.innerHeight * 0.8) {
        body.style.backgroundColor = colors[1];
    }
    if (window.scrollY > window.innerHeight * 1.8) {
        body.style.backgroundColor = colors[2];
    }
    if (window.scrollY > window.innerHeight * 2.8) {
        body.style.backgroundColor = colors[3];
    }
    if (window.scrollY > window.innerHeight * 3.8) {
        body.style.backgroundColor = colors[4];
    }
    if (window.scrollY > window.innerHeight * 4.8) {
        body.style.backgroundColor = colors[5];
    }
    if (window.scrollY > window.innerHeight * 5.8) {
        body.style.backgroundColor = colors[6];
    }

});