//mobile nav
function mobileNav() {
    // var el = document.getElementById("mobile-nav");
    var elLists = ['mobile-nav', 'mn-overlay'];
    elLists.forEach(item => {
        var el = document.getElementById(item);
        if (el.classList.contains("show")) {
            document.getElementById('mn-overlay').style['pointer-events'] = "none"
            document.body.removeAttribute('scroll')
            document.body.style.overflow = "";

            el.classList.remove('show')
            el.classList.add('hiding');
            el.addEventListener('animationend', (e) => {
                // console.log('animation ended')
                if (e.target.classList.contains("hiding")) {
                    // console.log('it got here')
                    e.target.classList.add('hidden');
                    e.target.classList.remove('hiding');
                }
            });
        } else {
            el.classList.add('show');
            el.classList.remove('hidden');
            el.classList.remove('hiding');
            document.getElementById('mn-overlay').style['pointer-events'] = ""
            document.getElementById('mobile-trigger-link').blur();
            // document.body.setAttribute('scroll', "no")
            // document.body.style.overflow = "hidden";
        }
    });
}

document.getElementById('mn-overlay').addEventListener('click', e => {
    if (e.target.classList.contains('show')) {
        e.target.style['pointer-events'] = "none"
        mobileNav();
    }
})

document.addEventListener('DOMContentLoaded', function (e) {
    var navList = document.getElementById('nav');
    var items = navList.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        var el = items[i];
        if (el.classList.contains('itm')) {
            var newLi = el.cloneNode(true);
            document.getElementById('m-nav-list').appendChild(newLi);
        }
    }

})