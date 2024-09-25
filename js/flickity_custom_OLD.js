/* -- vanilla js -- */

var elem = document.querySelector('.articles .carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem = document.querySelector('.twin-block .carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem = document.querySelector('.full-width-bg #carousel_all');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem2 = document.querySelector('.full-width-bg #carousel_iconic-towers');
var flkty = new Flickity( elem2, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem_land_estates = document.querySelector('.full-width-bg #carousel_land-estates');
var flkty = new Flickity( elem_land_estates, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem_hotels = document.querySelector('.full-width-bg #carousel_hotels');
var flkty = new Flickity( elem_hotels, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem_golf_courses = document.querySelector('.full-width-bg #carousel_golf-courses');
var flkty = new Flickity( elem_golf_courses, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


var elem_international = document.querySelector('.full-width-bg #carousel_international');
var flkty = new Flickity( elem_international, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    pageDots: true,
    // groupCells: 3,
});


// 

// external js: flickity.pkgd.js

var utils = window.fizzyUIUtils;

var carousel = document.querySelector('.projects-sect .carousel');
var flkty = new Flickity( carousel, {
    prevNextButtons: true,
    pageDots: true,
    // responsive: [
    //     {
    //         breakpoint: 880,
    //         settings: {
    //             prevNextButtons: true,
    //             pageDots: true,
    //         }
    //     }
    // ]
//   cellAlign: 'left'
//   margin: 0,
});
// elements
var cellsButtonGroup = document.querySelector('.carousel-nav');
var cellsButtons = utils.makeArray( cellsButtonGroup.children );

// update buttons on select
/*
flkty.on( 'select', function() {
  var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
  var selectedButton = cellsButtonGroup.children[ flkty.selectedIndex ];
  previousSelectedButton.classList.remove('is-selected');
  selectedButton.classList.add('is-selected');
});
*/

flkty.on('select', function() {
    var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
    var selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
  
    console.log('Previous Selected Button:', previousSelectedButton);
    console.log('Selected Button:', selectedButton);
    console.log('Selected Index:', flkty.selectedIndex);
  
    if (previousSelectedButton) {
      previousSelectedButton.classList.remove('is-selected');
    }
    if (selectedButton) {
      selectedButton.classList.add('is-selected');
    }

});


// cell select
cellsButtonGroup.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.nav-button' ) ) {
    return;
  }
  var index = cellsButtons.indexOf( event.target );
  flkty.select( index );
});

// previous
// not used
/* 
var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener( 'click', function() {
  flkty.previous();
});
*/

// next
// not used
/*
var nextButton = document.querySelector('.button--next');
nextButton.addEventListener( 'click', function() {
  flkty.next();
});
*/

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
        // trigger resize method after showing
        var carousel = document.querySelector('.projects .carousel');
        if (carousel && typeof Flickity !== 'undefined') {
            var flkty = Flickity.data(carousel);
            if (flkty) {
                flkty.resize();
            }
        }
    });
    // 
});


function reset_current_carosuel(carousel1){
	

        var carousel = document.querySelector('.projects #' + carousel1);
        if (carousel && typeof Flickity !== 'undefined') {
            var flkty = Flickity.data(carousel);
            if (flkty) {
                flkty.resize();
            }
        }
	
}