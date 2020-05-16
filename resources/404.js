const movedPages = {
    '/studyjam1': '/csj1',
    '/csj1': '/events/csj1',
    '/csj1/index.html': '/events/csj1',
    '/csj1/template.html': '/events/csj1/template.html',
    '/csj2/survey': "https://forms.gle/gaJbGGNkDBqgATUXA",
    '/register/studyjam3': "https://forms.gle/5TiL2bx2L6rBaEDCA",
    '/go/studyjam3': "https://google.qwiklabs.com/quests/40?event=Your&utm_source=qwiklabs&utm_medium=lp&utm_campaign=studyjam",
    '/go/gcp-essentials': "https://google.qwiklabs.com/quests/23?event=Your&utm_source=qwiklabs&utm_medium=lp&utm_campaign=studyjam",
    '/go/canvas': "https://canvas.fau.edu/enroll/3CJ98E",
    '/events/csj3': "/events/#csj3",
    '/events/csj2': "/events/#csj2",
    '/solution': "/events/#solution-challenge",
    '/survey/studyjam3': "https://forms.gle/oK1kxs4Kdyeo2Tir5",
    '/go/csj3-webex': "https://fau.webex.com/fau/onstage/g.php?MTID=e20fdb8e329d2f7ab48fa18ffa0134405",
    '/go/contact': 'https://bit.ly/DSCFAU',
    '/go/discord': 'https://discord.gg/39qJ3sE',
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

