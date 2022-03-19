var elem = document.getElementById("topbar-container");
elem.parentNode.removeChild(elem);

var elem = document.getElementById("navigation-container");
elem.parentNode.removeChild(elem);

var x = document.getElementsByClassName("article-metaline");

var i;
for (i = 0; i < x.length; i++) {
    x[i].style["background-color"] = "#000";
}

var x = document.getElementById("main-content").getElementsByTagName('span')
var i;
for (i = 0; i < x.length; i++) {
    x[i].style["color"] = "#bbb";
    x[i].style["background-color"] = "#000";
}