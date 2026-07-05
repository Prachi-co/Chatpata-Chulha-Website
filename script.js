/*=========================================
        MENU TAB SWITCHING
=========================================*/

function showMenu(menuId, element){

    // Hide all menus
    const menus = document.querySelectorAll(".menu-content");

    menus.forEach(function(menu){

        menu.classList.remove("active-menu");

    });


    // Show selected menu
    document.getElementById(menuId).classList.add("active-menu");


    // Remove active class from all categories
    const categories = document.querySelectorAll(".category");

    categories.forEach(function(category){

        category.classList.remove("active");

    });


    // Add active class to clicked category
    element.classList.add("active");

}



/*=========================================
        OPTIONAL FADE EFFECT
=========================================*/

document.addEventListener("DOMContentLoaded",function(){

    const firstMenu=document.querySelector(".menu-content");

    if(firstMenu){

        firstMenu.classList.add("active-menu");

    }

});