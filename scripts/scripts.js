function myFunction() {
    var menu = document.getElementById("navbar");
    if (menu.className === "nav-items") {
        menu.className += " responsive";
    } else {
        menu.className = "nav-items";
    }
}
