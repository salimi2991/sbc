
//Select Element passed in
function selectElement(selector) {
    return document.querySelector(selector);
}

//Clear the content inside the search relust div
function clearResults() {
    selectElement('.search-results').innerHTML = '';
}

// get the result of the search
function getResults() {
    const search = selectElement('.searchbar').value;
    clearResults();
    if (search.length > 0) {
        for (let i = 0; i < database.length; i++) {
            if (database[i].sectorName.toLowerCase().includes(search.toLowerCase()) || database[i].sectorCode.toLowerCase().includes(search.toLowerCase())) {
                selectElement('.search-results').innerHTML += `
<div class="search-result-item">
<span class="search-item"><img src="images/${database[i].sectorIcon}"></span>
<span class="search-item p-text">${database[i].sectorName}</span>
<div class="details">
 <div class="details-text">
 <p>تفاصيل</p>
 <i class="fas fa-long-arrow-alt-left"></i>
 </div>
 <a href="sector.html?id=${database[i].sectorCode}" class="details-btn">هنا</a>
</div>
</div>
`;
            }
        }
    } else {
        PrintAll();
    }
}

//Print All Result in the database
function PrintAll() {
    for (let i = 0; i < database.length; i++) {
        selectElement('.search-results').innerHTML += `
<div class="search-result-item">
<span class="search-item"><img src="images/${database[i].sectorIcon}"></span>
<span class="search-item p-text">${database[i].sectorName}</span>
<div class="details">
 <div class="details-text">
 <p>تفاصيل</p>
 <i class="fas fa-long-arrow-alt-left"></i>
 </div>
 <a href="sector.html?id=${database[i].sectorCode}" class="details-btn">هنا</a>
</div>
</div>
`;
    }
}

//Make An Event On the Search Input
selectElement('.searchbar').addEventListener("keyup", getResults);
//Print All The Info
PrintAll();