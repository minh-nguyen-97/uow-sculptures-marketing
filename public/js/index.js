$(document).ready(function() {
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
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          1500,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $(".dropdown").on("show.bs.dropdown", function() {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $(".dropdown").on("hide.bs.dropdown", function() {
    $(this)
      .find(".dropdown-menu")
      .first()
      .stop(true, true)
      .slideUp();
  });

  // no auto animation in carousel slide
  $(".carousel").carousel({
    interval: false
  });

  //
  $("#membersModal").on("show.bs.modal", function(event) {
    var card = $(event.relatedTarget);
    var imgsrc = card.data("imgsrc");
    var membername = card.data("membername");
    var majordesc = card.data("majordesc");
    var roledesc = card.data("roledesc");
    var outlook = card.data("outlook");
    var linkedln = card.data("linkedln");

    var modal = $(this);
    modal.find("#membersModalImg").attr("src", imgsrc);
    modal.find(".membersName").text(membername);
    modal.find("#membersModalMajorDesc").html(majordesc);
    modal.find("#membersModalRoleDesc").html(roledesc);
    modal.find("#membersOutlookLink a").attr("href", `mailto:${outlook}`);
    if (!linkedln) {
      modal.find("#membersLinkedlnLink").hide();
    } else {
      modal.find("#membersLinkedlnLink").show();
      modal.find("#membersLinkedlnLink a").attr("href", linkedln);
    }
  });

  var $animation_elements = $(".animation-elements");
  var $window = $(window);

  $window.on("scroll resize", () => {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass("in-view");
        // $element.removeClass("slide-left")
      } else {
        // $element.removeClass("in-view");
        // $element.addClass("slide-left")
      }
    });
  });

  $window.trigger("scroll");
});
