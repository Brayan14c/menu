var c = 0;

function o() {
    var drop = document.getElementById("drop");
    var i = document.getElementsByClassName("item_code345");

    if (c === 0) {
        drop.style.height = i.length * 60 + "px";
        c = 1;
    } else { 
        drop.style.height = "0";
        c = 0;
    }
}
