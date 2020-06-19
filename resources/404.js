const movedPages = {
    '/studyjam1': '/csj1',
    '/csj1': '/events/csj1',
    '/csj2/survey': "https://forms.gle/gaJbGGNkDBqgATUXA",
    // '/register/studyjam3': "https://forms.gle/5TiL2bx2L6rBaEDCA",
    '/register/studyjam3': "/events/csj3",
    '/go/studyjam3': "https://google.qwiklabs.com/quests/40?event=Your&utm_source=qwiklabs&utm_medium=lp&utm_campaign=studyjam",
    '/go/gcp-essentials': "https://google.qwiklabs.com/quests/23?event=Your&utm_source=qwiklabs&utm_medium=lp&utm_campaign=studyjam",
    '/go/canvas': "https://canvas.fau.edu/enroll/3CJ98E",
    '/solution': "/events/#solution-challenge",
    '/survey/studyjam3': "https://forms.gle/oK1kxs4Kdyeo2Tir5",
    '/go/csj3-webex': "https://fau.webex.com/fau/onstage/g.php?MTID=e20fdb8e329d2f7ab48fa18ffa0134405",
    '/go/contact': 'https://bit.ly/DSCFAU',
    '/go/discord': 'https://discord.gg/39qJ3sE',
    '/rsvp/ml-1': 'https://www.eventbrite.com/e/110051609326',
    '/rsvp/csj4': 'https://www.eventbrite.com/e/110051609326',
    '/rsvp/flutter-me-some-dart': 'https://www.eventbrite.com/e/109950155876',
    '/rsvp/flutter-1': 'https://www.eventbrite.com/e/109950155876',
    '/join/flutter-me-some-dart': 'https://forms.gle/19AXia6c8QEe9L1a9',
    '/join/flutter-1': 'https://forms.gle/19AXia6c8QEe9L1a9',
    '/go/owlcentral': 'https://fau.campuslabs.com/engage/organization/developerstudentclub',
    '/go/csj4-webex': 'https://fau.webex.com/fau/onstage/g.php?MTID=e79e557fe1bf2df7d9180fa2d6a889889',

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
    document.title = "Redirecting... | FAU Developer Student Clubs";
    document.querySelector("#not-found-title").innerHTML = "Redirecting...";
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

} else {
    document.title = "Page Not Found | FAU Developer Student Clubs";
    document.querySelector("#linProg").style.display = "none";
    document.querySelector("#moved-prog-br").style.display = "none";
    document.querySelector("#not-found-title").innerHTML = "Page Not Found";
    document.querySelector("#not-found-message").innerHTML = "The page you were looking for could not be found.";
}
