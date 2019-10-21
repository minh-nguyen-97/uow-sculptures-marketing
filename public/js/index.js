$(document).ready(function() {
  $('.card').hover(
    function() {
      $(this).addClass('shadow-lg')
    },
    function() {
      $(this).removeClass('shadow-lg')
    }
  )

  // Smooth scroll for links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1500, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    })

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this)
      .find('.dropdown-menu')
      .first()
      .stop(true, true)
      .slideDown()
  })

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this)
      .find('.dropdown-menu')
      .first()
      .stop(true, true)
      .slideUp()
  })

  // no auto animation in carousel slide
  $('.carousel').carousel({
    interval: false
  })
})
