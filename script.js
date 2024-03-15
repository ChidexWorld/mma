// auto slide 
var index = 0;
var time = 3000;
var x = document.getElementsByClassName("mySlides");
slide()
function slide() {

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };
    index++;
    if (index > x.length) {
        index = 1;
    };
    let y = x[index - 1];
    y.style.display = "flex";
    setTimeout(slide, time);
}

//auto slide in screen of max-width 46px 
if (window.matchMedia("(max-width: 600px)").matches) {
    slide2();
}

function slide2() {

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };
    index++;
    if (index > x.length) {
        index = 1;
    };
    let y = x[index - 1];
    if (window.matchMedia("(max-width: 600px)").matches) {
        y.style.display = "block";
    }
    setTimeout(slide2, time);
}

// links in the heading
var home = "active";
var about = "active1";
var menu = "active2";
var contact = "active3";
var head1 = document.querySelector(".head1");
var home_id = document.querySelector("#home");
var abt_id = document.querySelector("#abt");
var menu_id = document.querySelector("#menu");

function toggle(link) {
    var main = document.querySelector("main");
    var main1 = document.querySelector(".first_section");
    var main2 = document.querySelector(".second_section");
    var main3 = document.querySelector(".third_section");
    var main4 = document.querySelector(".fourth_section");
    var footer = document.querySelector("footer");
    if (link == home) {
        main.style.display = "block";
        main1.style.display = "block";
        main2.style.display = "block";
        main3.style.display = "block";
        main4.style.display = "block";
        footer.style.display = "block";
        home_id.classList.add("active");
        abt_id.classList.remove("active");
        menu_id.classList.remove("active");
    }
    if (link == about) {

        main.style.display = "block";
        main1.style.display = "none";
        main2.style.display = "none";
        main3.style.display = "none";
        main4.style.display = "block";
        footer.style.display = "block";
        abt_id.classList.add("active");
        home_id.classList.remove("active");
        menu_id.classList.remove("active");
    }
    if (link == menu) {
        main1.style.display = "none";
        main2.style.display = "none";
        main3.style.display = "block";
        main4.style.display = "none";
        footer.style.display = "none";
        home_id.classList.remove("active");
        abt_id.classList.remove("active");
        menu_id.classList.add("active");
    }
    if (link == contact) {
        main.style.display = "none";
        footer.style.display = "block";
    }
}

// menu section
// document.getElementById('test').getAttribute('onclick')
var menu1 = document.getElementById("first_row");
var menu2 = document.querySelector(".second_row");
var menu3 = document.querySelector(".third_row");
var view_content = document.getElementById("view_content");
var view = document.getElementById("view");
menu1.style.display = "flex"
menu2.style.display = "none"

function view_btn() {
    if (menu2.style.display !== "flex") {
        menu2.style.display = "flex";
        menu3.style.display = "flex";
        view_content.innerHTML = "view less";
        console.log(1 + 1)
    } else {
        menu2.style.display = "none";
        menu3.style.display = "none";
        view_content.innerHTML = "view more";
        console.log(1 + 3)
    }
}

// animation on scroll

document.addEventListener('DOMContentLoaded', function () {
    const box = document.querySelector('.info_details');
    const box1 = document.querySelector('.info_details1');
    const box2 = document.querySelector('.info_details2');
    const box3 = document.querySelector('.info_details3');

    function handleScroll() {
        // Get the scroll position
        const scrollPosition = window.scrollY;

        // Adjust this value based on when you want the animation to trigger
        const triggerPoint = 1300;

        // Check if the scroll position is past the trigger point
        if (scrollPosition > triggerPoint) {
            // document.querySelector('body').style.backgroundColor = 'red';
            box.classList.add('anim');
            box1.classList.add('anim');
            box2.classList.add('anim');
            box3.classList.add('anim');
        }
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Trigger the handleScroll function once on page load in case the element is already in view
});

// cart management

function adder() {
    var counter = document.querySelector('.counter');
    counter.style.display = "block";
    var content = parseInt(counter.textContent);
    console.log(content)
    if (content >= 0 ) {
        counter.innerHTML = content + 1;
        if (content >= 5) {
            counter.innerHTML = 5; 
            alert("you have reach your ordering limit")
        }
    }

}