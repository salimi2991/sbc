//Select Element passed in
function selectElement(selector) {
    return document.querySelector(selector);
}

function getTitle() {
    let parms = new URLSearchParams(document.location.search);
    let id = parms.get("id");
    for (let i = 0; i < database.length; i++) {

        if (database[i].sectorCode === id) {
            let sectionName = document.querySelector(`.${database[i].sectorN}`);
            let checkBox = document.querySelector(`#${database[i].sectorN}`);
            sectionName.classList.add("active");
            checkBox.checked = true;
        }
    }
}

function checkSection() {
    let checks = document.querySelectorAll(".checktitle");

    checks.forEach((check) => {
        check.addEventListener("click", function (e) {
            let checkVal = check.value;
            let section = document.querySelector(`.${checkVal}`);
            if (check.checked) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });

}

function toggle(source) {
    checkboxes = document.getElementsByName('checksection');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
        checkVal = checkboxes[i].value;
        let section = document.querySelector(`.${checkVal}`);
        if (source.checked) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

checkSection();
//right side faq
let faqs = document.querySelectorAll(".allsector .box .sectortitle");

faqs.forEach((faq) => {
    faq.addEventListener("click", function (e) {
        faq.parentNode.classList.toggle("active");
    });
});
getTitle();


/*let subCheck = document.querySelectorAll(".sectordetails input[type=checkbox]");
let boxes = document.querySelectorAll(".sectorinfo .box");
subArray = Array.from(subCheck);
let checkboxesChecked = [];

subCheck.forEach((sub) => {
    sub.addEventListener("click", function (e) {
        for (let i = 0; i < subArray.length; i++) {
            if (subArray[i].checked) {
                checkboxesChecked.push(subArray[i]);
            }
        }
        uniqueArray = checkboxesChecked.filter(function (item, pos) {
            return checkboxesChecked.indexOf(item) == pos;
        });
        for (let i = 0; i < uniqueArray.length; i++) {
            checkVal = uniqueArray[i].value;
            boxes.forEach((box) => {
                if (box.classList.contains(checkVal)) {
                    box.classList.toggle("show");
                } else {
                    box.classList.toggle("disappear");
                }
            });
        }
        console.log(uniqueArray);
    });
});*/