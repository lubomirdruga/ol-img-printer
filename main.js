function img(text) {
    const element = document.getElementById("main-text");
    element.innerHTML = `<img src="${text}" alt="img">`;
    console.log(text);
}

function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    img(urlSearchParams.get('img'));
}

init();
