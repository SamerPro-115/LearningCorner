





function startCounterWhenVisible() {
  var options = {
    threshold: 0.5, // Adjust as needed
  };

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var $counter = $(entry.target);
        if (!$counter.hasClass('counterStarted')) {
          var countTo = $counter.attr('data-count');

          $({ countNum: $counter.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 700,
              easing: 'linear',
              step: function () {
                $counter.text(Math.floor(this.countNum));
              },
              complete: function () {
                $counter.text(this.countNum);
              },
            }
          );
          $counter.addClass('counterStarted');
        }
      }
    });
  }, options);

  $('.counter').each(function () {
    observer.observe(this);
  });
}

// Call the function to start the counters
startCounterWhenVisible();

    

    $('.social-logo').hover(function() {
      
      $(this).find("path").toggleClass("white-logo")
    })
    

    


    
    $(document).on("click",".burger-list", function() {
      const el = `
      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-x shadow-x" style="color: #b578bc; display: none; height: 100%;" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
      `
      $(".overlay").fadeIn(400)
      $(".exit-navbar").fadeIn(400)
      $(".burger-list").fadeOut(200, function() {
      $(".burger-list").replaceWith(el);
       $(".shadow-x").fadeIn(200);

      });
      $("html").css("overflow", "hidden");
  });
  
  $(".exit-navbar").on("click", function() {
    $("html").css("overflow", "visible");
      $(".overlay").fadeOut(400)
      const el = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style="display: none;" class="bi bi-list burger-list d-xl-none d-lg-none d-md-none" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>`

       $(".container-fluid").find("svg").replaceWith(el)
       $(".burger-list").fadeIn(400)
  });

  

  
