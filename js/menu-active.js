// menu-active.js

// vanilla js - change class


document.getElementById('menu-button').onclick = function() { 
    this.classList.toggle('active');
    document.getElementsByTagName('header')[0].classList.toggle('active');
    document.getElementsByClassName('[class*="submenu"]')[0].classList.remove('open');
    // document.getElementsByClassName('wp-block-navigation-submenu')[0].classList.remove('open');
    document.body.classList.toggle('no_scroll'); // Add 'no_scroll' class to body
}

// Get all elements with class 'menu-link'
const menuLinks = document.getElementsByClassName('menu-link');

// Add an event listener to each menu link
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function() {
        // Remove 'active' class from 'menu-button' and 'header' when any menu link except has-child is clicked
        if (!this.classList.contains('has-child')) {
            document.getElementById('menu-button').classList.remove('active');
            document.getElementById('header').classList.remove('active');
            // $("body").addClass("no_scroll");

        }
    }
}

// submenu show`n`hide

// Get all elements with class 'has-child'
var hasSubmenuElements = document.getElementsByClassName('has-child');

// Loop over the elements
for (var i = 0; i < hasSubmenuElements.length; i++) {
    // Add the onclick event listener to each element
    hasSubmenuElements[i].onclick = function() {
        // Get all elements with class 'submenu'
        var submenuElements = document.getElementsByClassName('[class*="submenu"]');
        // var submenuElements = document.getElementsByClassName('wp-block-navigation-submenu');

        // Loop over the elements
        for (var j = 0; j < submenuElements.length; j++) {
            // Remove the 'closed' class and add the 'open' class to each element
            submenuElements[j].classList.toggle('open');
        }
    }
}


