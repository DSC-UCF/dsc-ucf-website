const movedPages = {
    '/studyjam1': '/csj1',
    '/csj1': '/events/csj1',
    '/csj1/index.html': '/events/csj1',
    '/csj1/template.html': '/events/csj1/template.html',
}

const linearProgress = new mdc.linearProgress.MDCLinearProgress(document.querySelector('#linProg'));

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

    document.querySelector("#linProg").style.display = "";
    document.querySelector("#moved-prog-br").style.display = "";

    document.querySelector("#not-found-title").innerHTML = "Page Moved";
    document.querySelector("#not-found-message").innerHTML = "The page you requested has been moved. Redirecting...";
    document.querySelector("#not-found-home-btn").classList.add("btn-secondary");
    document.querySelector("#not-found-moved").setAttribute('href', newLink);
    document.querySelector("#not-found-moved").style.display = "";

    dataLayer.push({
        'event': 'pageMoved',
        'movedTo': newPath,
        'oldLink': window.location.pathname
    });
    window.location.href = newLink;

}

