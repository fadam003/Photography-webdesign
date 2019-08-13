// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const images = $('#ourwork').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });
  