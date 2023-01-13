"use strict";


function create_menu(menuElement) {

    let linkToAutoPartage = document.createElement("a");
    linkToAutoPartage.appendChild(document.createTextNode("AutoPartage"));
    linkToAutoPartage.setAttribute("href","autopartage/autopartage.html");

    menuElement.appendChild(linkToAutoPartage);
    

}




let menu = document.getElementById("nav");

create_menu(menu);


