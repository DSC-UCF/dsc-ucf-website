//mobile nav
// function mobileNav() {
//     // var el = document.getElementById("mobile-nav");
//     var elLists = ['mobile-nav', 'mn-overlay'];
//     elLists.forEach(item => {
//         var el = document.getElementById(item);
//         if (el.classList.contains("show")) {
//             document.getElementById('mn-overlay').style['pointer-events'] = "none"
//             document.body.removeAttribute('scroll')
//             document.body.style.overflow = "";

//             el.classList.remove('show')
//             el.classList.add('hiding');
//             el.addEventListener('animationend', (e) => {
//                 // console.log('animation ended')
//                 if (e.target.classList.contains("hiding")) {
//                     // console.log('it got here')
//                     e.target.classList.add('hidden');
//                     e.target.classList.remove('hiding');
//                 }
//             });
//         } else {
//             el.classList.add('show');
//             el.classList.remove('hidden');
//             el.classList.remove('hiding');
//             document.getElementById('mn-overlay').style['pointer-events'] = ""
//             document.getElementById('mobile-trigger-link').blur();
//             // document.body.setAttribute('scroll', "no")
//             // document.body.style.overflow = "hidden";
//         }
//     });
// }




document.getElementById('nav').addEventListener('transitionstart', (e) => {
    // e.target.classList.
});
document.getElementById('nav').addEventListener('transitionend', (e) => {

});


document.getElementById('mn-overlay').addEventListener('click', e => {
    if (e.target.classList.contains('show')) {
        e.target.style['pointer-events'] = "none"
        mobileNav();
    }
})


document.addEventListener('DOMContentLoaded', function (e) {
    var navList = document.getElementById('nav');
    var items = navList.getElementsByTagName('li');
    Object.keys(navItems).forEach(el => {
        if (navItems[el].type != "group") {
            var sampleLi = document.querySelector('#mn-sample').cloneNode(true);
            sampleLi.removeAttribute('id');
            sampleLi.setAttribute('href', navItems[el].url);
            sampleLi.style.display = "";
            if (navItems[el].active == true) sampleLi.classList.add('mdc-list-item--activated');
            if (navItems[el].parent != undefined) {
                sampleLi.classList.add("mn-sub-el");

            }
            if (navItems[el].group != undefined) {
                sampleLi.getElementsByTagName('span')[0].innerHTML = `[${navItems[navItems[el].group].abbr}] ${navItems[el].name}`
            } else {
                sampleLi.getElementsByTagName('span')[0].innerHTML = navItems[el].name;
            }

            var iconButtonRipple = new mdc.ripple.MDCRipple(sampleLi);
            document.getElementById('new-mn-nav').appendChild(sampleLi);
        }
    });
    setTimeout(() => {
        document.querySelector('#mobile-trigger-link').style = ""
    }, 250);


})

const list = mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'))
list.wrapFocus = true;

const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'))
const mdc_menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
// mdc_menu.open = true;
var isStillOpen = false;

drawer.foundation_.handleScrimClick = function () {
    mobileNav();
}

function mobileNav() {

    if (drawer.open == false) {
        document.querySelector('#mobile-trigger-link').innerHTML = "close"
        document.querySelector('#mobile-trigger-link-mn').innerHTML = "close"
        drawer.open = !drawer.open;
        document.querySelector('#mobile-trigger-link').classList.remove('mdc-ripple-upgraded--unbounded')
        document.querySelector('#mobile-trigger-link').style = ""
        document.querySelector('#mobile-trigger-link').classList.add("hide-mn-trig");
        // document.querySelector('#mobile-trigger-link').style.top = "0 !important";
        setTimeout(() => {
            document.querySelector('#mobile-trigger-link').style = ""
        }, 500);
    } else {
        document.querySelector('#mobile-trigger-link').innerHTML = "menu"
        document.querySelector('#mobile-trigger-link-mn').innerHTML = "menu"
        drawer.open = !drawer.open;
        document.querySelector('#mobile-trigger-link').classList.remove('mdc-ripple-upgraded--unbounded')
        document.querySelector('#mobile-trigger-link').classList.remove("hide-mn-trig");
        setTimeout(() => {
            document.querySelector('#mobile-trigger-link').style = ""
        }, 500);
    }

}

// const mnTrigger = new mdc.ripple.MDCRipple(document.querySelector('#mobile-trigger-link'));
const surface = document.querySelector('#mobile-trigger-link');
const ripple = new mdc.ripple.MDCRipple(surface);
ripple.activate();
const surface2 = document.querySelector('#mobile-trigger-link-mn');
const ripple2 = new mdc.ripple.MDCRipple(surface2);
ripple2.activate();
// mdc.ripple.MDCRipple.attachTo(document.querySelector('#mobile-trigger-link'));
const iconButtonRipple = new mdc.ripple.MDCRipple(document.querySelector('#mobile-trigger-link'));
iconButtonRipple.unbounded = true;
const iconButtonRipple2 = new mdc.ripple.MDCRipple(document.querySelector('#mobile-trigger-link-mn'));
iconButtonRipple2.unbounded = true;

document.querySelector(".itm_dropdown2").querySelectorAll(".mdc-ripple-surface").forEach(el => {
    new mdc.ripple.MDCRipple(el);
})
