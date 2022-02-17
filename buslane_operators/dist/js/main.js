jQuery(document).ready(function($) {

  // Add class scrolled to sticky navbar on scroll
  $(window).scroll(function() {
		var target = $("#content").offset().top;
  	if($(document).scrollTop() > target) {
      $('nav').addClass('scrolled');
    }
    else {
      $('nav').removeClass('scrolled');
    }
  });

  // FAQ Accordion
  $('.accordion .inner').addClass('hidden');
  $('.toggle').click(function(e) {
    e.preventDefault();

    let $this = $(this);
    let $active_classes = 'text-flame show'

    if ($this.next().hasClass('show')) {
        $this.removeClass($active_classes);
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .toggle').removeClass($active_classes);
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.addClass($active_classes);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });

  // Mobile menu
  $('#mobile-menu').hide();
  $('.mobile-toggle ').click(function() {
    $('#mobile-menu').slideToggle();
    $('body').toggleClass('modal-open');
  });

  // Modal toggle
  /*
  $('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
    $('body').toggleClass('modal-open');
  });*/

  //---------------------------------------------------------
  // open modal
  //---------------------------------------------------------

  $('.open-modal').on('click', function() {
    // fade in filter layer and modal
    $('.filter, .modal').fadeIn(200);
    $('body').toggleClass('modal-open');
  });

  //---------------------------------------------------------
  // close modal
  //---------------------------------------------------------

  // close modal by clicking the "close" button or background (outside modal)
  $('.modal-close, .filter').on('click', function() {
    // fade out filter layer and modal
    $('.filter, .modal').fadeOut(200);
    $('body').toggleClass('modal-open');
  });


});
