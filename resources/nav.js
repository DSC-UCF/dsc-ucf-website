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
var navItems = {
    'home': { "name": "Home", "url": "/" },
    'about': { "name": "About Us", "url": "/about" },
    'events': { "name": "Events", "url": "/events", type: "dropdown" },
    'csj1': { "name": "Study Jam 1", "url": "/events/csj1", "parent": "events" },
    'csj2': { "name": "Study Jam 2", "url": "/events/csj2", "parent": "events" },
    'csj3': { "name": "Study Jam 3", "url": "/events/csj3", "parent": "events" },

    // 'csj1': { "name": "Study Jam 1", "url": "/events/csj1" },
    // 'csj3': { "name": "Study Jam 3", "url": "/events/csj3" }
}


try {
    navItems[currentPage].active = true;
} catch (error) { }


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
        var dropdown = document.createElement("ul");
        dropdown.classList.add("nav_dropdown");
        newLi.appendChild(dropdown);
        newLi.classList.add("itm_dropdown");
    }
    newLi.appendChild(newA);


    if (navItm.parent != undefined) {
        try {
            newLi.classList.remove("itm")
            newLi.classList.add("dd_itm")
            var parent = document.querySelector("#nav_itm_" + navItm.parent)
            parent.querySelector(".nav_dropdown").appendChild(newLi);
            if (navItm.active == true) {
                parent.classList.add("active");
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