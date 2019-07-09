// When the user scrolls the page, execute myFunction 
window.onscroll = function() {mysticky()};

// Get the navbar
var navbar = $(".main-header");

// Get the offset position of the navbar
var sticky = navbar.offset();

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mysticky() {
	//console.log(window.pageYOffset +" - "+ sticky.top)
  if (window.pageYOffset > sticky.top) {
    $(".main-header").addClass("sticky");
  } else {
    $(".main-header").removeClass("sticky");
  }
}