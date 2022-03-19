var elem = document.getElementById("topbar-container");
elem.parentNode.removeChild(elem);

var x = document.getElementsByTagName('span')

var i;
for (i = 0; i < x.length; i++) {
    x[i].style["color"] = "#bbb";
    x[i].style["background-color"] = "#000";
}