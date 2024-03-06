function getTerms() {
    let termsValChecked = JSON.parse(localStorage.getItem("termschecked"));
    let termsValUnChecked = JSON.parse(localStorage.getItem("termsunchecked"));
    for (let i = 0; i < termsValChecked.length; i++) {
        document.querySelector(".content").innerHTML += `
<div class="inner-box">
<input type="checkbox" checked checkedproptemplate><p>${termsValChecked[i]}</p>
</div>
`;
    }
    for (let i = 0; i < termsValUnChecked.length; i++) {
        document.querySelector(".content").innerHTML += `
<div class="inner-box">
<input type="checkbox" checkedproptemplate><p>${termsValUnChecked[i]}</p>
</div>
`;
    }
}

function getNeeds() {
    let needsValChecked = JSON.parse(localStorage.getItem("needschecked"));
    let needsValUnChecked = JSON.parse(localStorage.getItem("needsunchecked"));
    for (let i = 0; i < needsValChecked.length; i++) {
        document.querySelector(".content").innerHTML += `
<div class="inner-box">
<input type="checkbox" checked checkedproptemplate><p>${needsValChecked[i]}</p>
</div>
`;
    }
    for (let i = 0; i < needsValUnChecked.length; i++) {
        document.querySelector(".content").innerHTML += `
<div class="inner-box">
<input type="checkbox" checkedproptemplate><p>${needsValUnChecked[i]}</p>
</div>
`;
    }
}

//get title name
let link = new URLSearchParams(document.location.search);
let title = link.get("value");
if (title === "term") {
    document.querySelector(".top h3").innerHTML = `الاشتراطات العامة`;
    getTerms();
} else {
    document.querySelector(".top h3").innerHTML = `المتطلبات`;
    getNeeds()
}