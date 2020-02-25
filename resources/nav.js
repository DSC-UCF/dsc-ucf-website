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
    'events': { "name": "Events", "url": "/events" },
    'csj1': { "name": "Study Jam 1", "url": "/csj1" }
}


try {
    navItems[currentPage].active = true;
} catch (error) { }


Object.keys(navItems).forEach(el => {
    var navItm = navItems[el];
    var newLi = document.createElement("li");
    newLi.classList.add("itm");
    if (navItm.active) newLi.classList.add("active");
    var newA = document.createElement("a");
    newA.setAttribute("href", navItm.url);
    newA.innerHTML = navItm.name;
    newLi.appendChild(newA);

    document.querySelector("#nav").appendChild(newLi);

});
{/* <li class="itm active"><a href="/">Home</a></li> */ }