var bold_items;
window.onload = getBoldItems();

function getBoldItems() {
    bold_items = document.getElementsByClassName("bold");
    console.log(bold_items);
}

function highlight() {
    console.log("highlighting");
    for (var i = 0; i < bold_items.length; i++) {
        bold_items[i].style.fontWeight = "bold";
    }
}

function normal() {
    console.log("normalizing");
    for (var i = 0; i < bold_items.length; i++) {
        bold_items[i].style.fontWeight = "normal";
    }
}
