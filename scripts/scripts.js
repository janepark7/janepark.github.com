function myFunction() {
    var menu = document.getElementById("nav-items");
    if (menu.className === "nav-items") {
        menu.className += " responsive";
    } else {
        menu.className = "nav-items";
    }
}
