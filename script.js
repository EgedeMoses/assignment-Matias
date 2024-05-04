// this will make the nave bar to have a black background when the use sctoll the page
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav-bar");
    if (window.pageYOffset > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const service = document.querySelector(".service");
const serviceSub = document.querySelector("#service-sub");
// this will make the service sub menu to show when user hovers on it
service.addEventListener("mouseover", () => {
    serviceSub.style.opacity = "100%";
    serviceSub.style.display = "block";
});
// this will make the service sub menu to disapear when user remove the mouse on it

service.addEventListener("mouseout", () => {
    serviceSub.style.opacity = "0%";
    serviceSub.style.display = "none";
});

const blog = document.querySelector(".blog");
const blogSub = document.querySelector("#blog-sub");
// this will make the blog sub menu to show when user hovers on it
blog.addEventListener("mouseover", () => {
    blogSub.style.opacity = "100%";
    blogSub.style.display = "block";
});
// this will make the blog sub menu to disapear when user remove the mouse on it
blog.addEventListener("mouseout", () => {
    blogSub.style.opacity = "0%";
    blogSub.style.display = "none";
});

const filters = document.querySelectorAll(".filter");
const about = document.querySelector(".about");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const skill = document.querySelector(".skill");
// loop through the filters and get them one by one
filters.forEach((filter) => {
    filter.addEventListener("click", (e) => {
        if (e.target.innerHTML === "ABOUT") {
            about.style.display = "block";
            experience.style.display = "none";
            education.style.display = "none";
            skill.style.display = "none";
            aboutBtn.style.backgroundColor = "rgb(201, 243, 29)";
        } else if (e.target.innerHTML === "EXPERIENCE") {
            experience.style.display = "block";
            education.style.display = "none";
            skill.style.display = "none";
            about.style.display = "none";
            aboutBtn.style.backgroundColor = "white";
        } else if (e.target.innerHTML === "EDUCATION") {
            education.style.display = "block";
            experience.style.display = "none";
            skill.style.display = "none";
            about.style.display = "none";
            aboutBtn.style.backgroundColor = "white";
        } else if (e.target.innerHTML === "SKILLS") {
            skill.style.display = "block";
            education.style.display = "none";
            experience.style.display = "none";
            about.style.display = "none";
            aboutBtn.style.backgroundColor = "white";
        } else {
            return;
        }
        console.log(filter.innerHTML);
    });
});

const aboutBtn = document.querySelector(".aboutbtn");
// this will execute all the task that should br done once the page loads
window.addEventListener("load", () => {
    // thia make the about filter background color to be focus by defult
    filters.forEach((filter) => {
        if (filter.innerHTML === "ABOUT") {
            filter.style.backgroundColor = "rgb(201, 243, 29)";
        }
    });
    // this makes the about to show by defult when the page is refreshed
    about.style.display = "block";
});

const showContactBr = document.getElementById('show-contact')
const closeContactBar = document.getElementById('close-contact')
const contactSideBar = document.querySelector('.contact-side-bar')

showContactBr.addEventListener('click',()=>{
    contactSideBar.style.right = '0'
    // closeContactBar.style.display = 'block'
})

closeContactBar.addEventListener('click',()=>{
    contactSideBar.style.right = '-100%'
    // closeContactBar.style.display = 'none'
})