let imgBtn = document.querySelectorAll(".mn img");
let maps = document.querySelectorAll(".map");
let phoneLinks = document.querySelectorAll(".phone-link");
let webLinks = document.querySelectorAll(".web-link");
let mailLinks = document.querySelectorAll(".mail-link");

imgBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        maps.forEach((map) => {
            map.classList.remove("active");
        });
        phoneLinks.forEach((phone) => {
            phone.classList.remove("active");
        });
        webLinks.forEach((web) => {
            web.classList.remove("active");
        });
        mailLinks.forEach((mail) => {
            mail.classList.remove("active");
        });
        let sections = document.querySelectorAll('.' + e.currentTarget.dataset.img);
        sections.forEach((sec) => {
            sec.classList.add("active");
        });

    });
});