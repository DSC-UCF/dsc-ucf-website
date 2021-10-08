var navScriptTag = document.querySelector("#navS");
var currentPage;
if (navScriptTag != null) {

    var scriptURL
    try {
        scriptURL = new URL(navScriptTag.getAttribute("src"));
    } catch (err1) {
        try {
            scriptURL = new URL(navScriptTag.getAttribute("src"), document.baseURI);
        } catch (err2) {
            console.log(err2)
        }
    }
    currentPage = scriptURL.searchParams.get("page");
}
var allowedHosts = [
    '127.0.0.1',
    'beta.dscucf.com',
    'localhost',
    'dscucf.com'
]
var prot = 'https:'
var host = 'dscucf.com'
if (allowedHosts.includes(window.location.hostname) == true) {
    prot = window.location.protocol;
    host = window.location.host;
}
var urlp = `${prot}//${host}`;
var navItems = {
    'home': { "name": "Home", "url": urlp + "/" },
    'about': { "name": "About Us", "url": urlp + "/about" },
    'events': { "name": "Events", "url": urlp + "/events", type: "dropdown" },
    'blogs': { "name": "Blogs", "url": urlp + "/blogs" },
    'calendar': { "name": "Calendar", "url": urlp + "/calendar" },
    'studyjam': { "name": "Workshops", "parent": "events", "type": "group", "abbr": "WS" },
    //'workshops': { "name": "Workshops", "parent": "events", "type": "group", "abbr": "WS" },
    'fullStack': { "name": "Building a Full Stack Web App", "url": urlp + "/events/full-stack-web-app/", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/full-stack.png" },
    'csj5': { "name": "Getting Started with Google Cloud", "url": urlp + "/events/get-started-with-gcp/", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/gcp-essentials-badge.png" },
    'FEStudy': { "name": "Info Session + UCF Foundation Exam Study Jam", "url": urlp + "/events/fe-study-jam/", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/fe-study-jam.png" },
    //'csj1': { "name": "GCP Essentials", "url": urlp + "/events/csj1", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/gcp-essentials-badge.png" },
    //'csj2': { "name": "Google Developer Essentials", "url": urlp + "/events/csj2", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/google-dev-essentials.png" },
    //'csj3': { "name": "Security and Identity Fundamentals", "url": urlp + "/events/csj3", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/security-iden-fund.png" },
    //'csj4': { "name": "Introduction to ML: Language Processing", "url": urlp + "/events/csj4", "parent": "events", "group": "studyjam", "icon": "https://dscucf.com/resources/events/64x64/ml-lang-processing.png" },
    //'flutter1': { "name": "Flutter Me Some Dart", "url": urlp + "/events/flutter-me-some-dart", "parent": "events", "group": "workshops", "icon": "https://dscucf.com/resources/events/64x64/flutter-icon.png" },
    //'quantum': { "name": "Introduction to Quantum Computing", "url": urlp + "/events/quantum", "parent": "events", "group": "workshops", "icon": "https://dscucf.com/resources/events/64x64/dsc-default.png" },
    //'flutter2': { "name": "Let's Build a Mobile App", "url": urlp + "/events/build-a-mobile-app", "parent": "events", "group": "workshops", "icon": "https://dscucf.com/resources/events/64x64/flutter-icon.png" },
    // 'workshop': { "name": "Workshops", "parent": "events", "type": "group", "abbr": "WS" },
    // 'csj4': { "name": "How to restart a computer", "url": "/events/csj3", "parent": "events", "group": "workshop" },
}


try {
    navItems[currentPage].active = true;
} catch (error) { }

var groups = {
    'events': {
        'count': 0
    },
    'workshops': {
        'count': 0
    }
};
Object.keys(navItems).forEach(el => {
    var navItm = navItems[el];
    var newLi = document.createElement("li");
    newLi.classList.add("itm");
    newLi.setAttribute("id", "nav_itm_" + el);
    if (navItm.active) newLi.classList.add("active");
    var newA = document.createElement("a");
    newA.setAttribute("href", navItm.url);
    newA.innerHTML = navItm.name;

    if (navItm.type == "dropdown") {
        var menu = document.createElement("div");
        menu.classList.add("mdc-menu", "mdc-menu-surface");
        menu.setAttribute("id", "nav-mdc-menu")


        var dropdown = document.createElement("ul");
        dropdown.classList.add("nav_dropdown2");
        dropdown.classList.add("mdc-list")
        dropdown.setAttribute("role", "menu")
        dropdown.setAttribute("aria-hidden", "true")
        dropdown.setAttribute("aria-orientation", "vertical")
        dropdown.setAttribute("tabindex", "-1");

        menu.appendChild(dropdown);

        newLi.appendChild(menu);
        newLi.classList.add("itm_dropdown2");
        newLi.classList.add("mdc-menu-surface--anchor");
        newLi.setAttribute("onmouseover", "mdc_menu.open = true; isStillOpen = true");
        newLi.setAttribute("onmouseout", "isStillOpen = false; setTimeout(() => {if (isStillOpen == false) mdc_menu.open = false}, 100);");
    }
    newLi.appendChild(newA);


    if (navItm.parent != undefined) {
        try {
            var newLi = document.createElement("li");
            newLi.setAttribute("id", "nav_itm_" + el);
            if (navItm.type == "group") {
                if (groups[navItm.parent][el] == undefined) {
                    var parent = document.querySelector("#nav_itm_" + navItm.parent)
                    groups[navItm.parent][el] = true;
                    if (groups[navItm.parent].count > 0) {
                        var sepEl = document.createElement("li");
                        sepEl.classList.add("mdc-list-divider")
                        sepEl.setAttribute("role", "separator")
                        parent.querySelector(".nav_dropdown2").appendChild(sepEl);
                    }
                    var headerEl = document.createElement("h3");
                    headerEl.classList.add("mdc-list-group__subheader")
                    headerEl.innerHTML = navItm.name;
                    parent.querySelector(".nav_dropdown2").appendChild(headerEl);


                    groups[navItm.parent].count = groups[navItm.parent].count + 1;
                }
                newLi.innerHTML = `<ul class="mdc-menu__selection-group" id="sel_group_${el}"></ul>`;

            } else {
                if (navItm.active) newLi.classList.add("active");


                newLi.classList.add("mdc-ripple-surface");
                newLi.setAttribute("onclick", `window.location.href = '${navItm.url}'`)


                // newLi.classList.remove("itm")
                // newLi.classList.add("dd_itm")
                newLi.classList.add("mdc-list-item");
                newLi.setAttribute("role", "menuitem");
                var innerText = "";
                if (navItm.icon != undefined) {
                    innerText = innerText + `<img class="mdc-list-item__graphic"src="${navItm.icon}">`
                    newLi.classList.add("hasIcon");
                    // innerText = innerText + `<span class="mdc-list-item__graphic"><img src="${navItm.icon}"></span>`
                }
                newLi.innerHTML = innerText + `<span class="mdc-list-item__text">${navItm.name}</span>`;


            }

            var parent = document.querySelector("#nav_itm_" + navItm.parent)

            if (navItm.active == true) {
                parent.classList.add("active");
                // newLi.classList.add("mdc-ripple-upgraded--background-focused")
                newLi.classList.add("active")
                newLi.classList.add("mdc-list-item--activated")
            }

            if (navItm.group != undefined) {


                parent.querySelector("#sel_group_" + navItm.group).appendChild(newLi);
            } else {
                parent.querySelector(".nav_dropdown2").appendChild(newLi);
            }

        } catch (err) {
            console.log(err);
            // document.querySelector("#nav").appendChild(newLi);
        }
    } else {
        document.querySelector("#nav").appendChild(newLi);
    }




});
{/* <li class="itm active"><a href="/">Home</a></li> */ }
