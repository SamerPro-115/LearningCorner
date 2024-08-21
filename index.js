



function startCounterWhenVisible() {
  var options = {
    threshold: 0.5, 
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
              duration: 1000,
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
    

    
    

   


  function redirectToProductPage(productPageUrl) {window.location.href = productPageUrl;}

  function openOverlay() {
    $(".overlay-popup").fadeIn(400)
    $(".popup-container").fadeIn(400)
    $("html").css("overflow", "hidden")
}



  $(document).on("click", ".close-offers-popup",function(){
    $(".popup-container").fadeOut(400)
    $(".overlay-popup").fadeOut(400)
    $("html").css("overflow", "visible");
  })
  
  $(document).on("click", ".btn-offers-small-screens", function() {
    $(".exit-navbar").click();
    $(".overlay-popup").fadeIn(400)
    $(".popup-container").fadeIn(400)
    $("html").css("overflow", "hidden")
  })
  

   const changingColorElement = document.getElementById('changingColorElement');
   const changingColorElementMobile = document.getElementById('changingColorElementMobile');

   const colors = ['#7f0d84', '#ffbc04'];
   
  
   let colorIndex = 0;
 
   function isScreenSizeGreaterThan992() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    return screenWidth > 992;
  }
  
   function updateColor() {
     if(isScreenSizeGreaterThan992()) {
      changingColorElement.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
     } else {
      changingColorElementMobile.style.backgroundColor = colors[colorIndex];
     colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
     }
   }
 
  
   setInterval(updateColor, 1000);



 
   const navbar = document.querySelector('nav');
   const scrollHeightThreshold = 90; // Set your desired scroll height
   
   window.onscroll = function() {
       const currentScrollPos = window.pageYOffset;
   
       if (currentScrollPos > scrollHeightThreshold) {
           navbar.classList.add('fixed-top');
       } else {
           navbar.classList.remove('fixed-top');
       }
   };

   
   


   







