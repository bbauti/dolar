document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading").style.visibility = "visible";
        document.querySelector("html").style.backgroundColor = "hsl(100, 0%, 4%)"
    } else {
        document.querySelector("#loading").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
        document.querySelector("html").style.backgroundColor = "var(--bg-gradient)"
    }
};