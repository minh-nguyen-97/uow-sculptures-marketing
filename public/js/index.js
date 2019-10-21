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
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault()
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target)
              $target.focus()
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false
              } else {
                $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
                $target.focus() // Set focus again
              }
            }
          )
        }
      }
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
