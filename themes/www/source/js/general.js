const menuIcon = document.getElementById('menuIcon');

document.addEventListener("DOMContentLoaded", () => {
    menuIcon.addEventListener('click', menuOpen);
    document.getElementById('bnk_open').onclick = function () {
        var bnkNavLink = [...document.getElementsByClassName('bnk-nav-link')]
        if (bnkNavLink) {
            bnkNavLink.forEach(function (item) {
                item.style.left = '0%'
            })
        }
        document.getElementById('bnk_open').style.display = 'none'
        document.getElementById('bnk_close').style.display = 'block'
    }

    document.getElementById('bnk_close').onclick = function () {
        var bnkNavLink = [...document.getElementsByClassName('bnk-nav-link')]
        if (bnkNavLink) {
            bnkNavLink.forEach(function (item) {
                item.style.left = '100%'
            })
        }
        document.getElementById('bnk_open').style.display = 'block'
        document.getElementById('bnk_close').style.display = 'none'
    }

    window.addEventListener('scroll', function () {
        var head = [...document.getElementsByTagName('header')]
        if (this.scrollY > 30) {
            if (head) {
                head.forEach(function (item) {
                    item.classList.add('wraper')
                })
            }
        }
        else {
            if (head) {
                head.forEach(function (item) {
                    item.classList.remove('wraper')
                })
            }
        }
    })



    // Abrir menú



});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlide");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


function menuOpen() {
    const display = document.getElementById('menuList').style.display;
    if (!display || display === 'none') {
        console.log(display)
        document.getElementById('menuList').style.display = 'flex'
    }
    else {
        console.log(display)
        document.getElementById('menuList').style.display = 'none';
    }
}