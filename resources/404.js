const movedPages = {
    "/testing1": "/testing2",
    "/testing2": "/about",
    '/test/hi1': '/hi2/3'
}


var testPath = window.location.pathname;
if (window.location.pathname.slice(-1) == "/") {
    testPath = window.location.pathname.slice(0, -1);
}

// console.log("CURRENT PATH: " + testPath);
if (movedPages[testPath] != undefined) {

    // console.log("PAGE HAS BEEN MOVED TO: " + movedPages[testPath]);
    var newPath = movedPages[testPath];
    var newLink;
    if (window.location.search != undefined) {
        newLink = newPath + window.location.search;
    } else {
        newLink = newPath;
    }

    document.querySelector("#not-found-title").innerHTML = "Page Moved";
    document.querySelector("#not-found-message").innerHTML = "The page you requested has been moved. Redirecting...";
    document.querySelector("#not-found-home-btn").classList.add("btn-secondary");
    document.querySelector("#not-found-moved").setAttribute('href', newLink);
    document.querySelector("#not-found-moved").style.display = "";

    window.location.href = newLink;


}

