function getScrollPercentage() {
    const yetToScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight - document.documentElement.scrollTop;
    const totalScrolled = document.documentElement.scrollHeight - yetToScroll;
    return Math.round(100 * totalScrolled / document.documentElement.scrollHeight);
}

function debounce(fn, delay) {
    let timerID;
    return function debouncedFn(...args) {
        if (timerID) {
            clearTimeout(timerID);
        }
        timerID = setTimeout(fn, delay, ...args);
    }
}

function addLoader() {
    const div = document.createElement('div');
    const text = document.createTextNode(getScrollPercentage() + '%');
    div.style.position = 'fixed';
    div.style.top = 0;
    div.style.right = 0;
    document.body.appendChild(div).appendChild(text)


    function scroll(){
        div.innerText = getScrollPercentage() + '%'
    }
    window.addEventListener("scroll", debounce(scroll, 1000));
}

addLoader();
