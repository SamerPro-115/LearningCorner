
const element = document.getElementById("animation")
lottie.loadAnimation({
    container: element, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/b5f0133b-fff2-4394-9815-d9061e48c47f/bDJX37pUj8.json' // the path to the animation json
  });
  

  // https://lottie.host/8f53e0f8-3b5c-46c5-9c25-1c5cae9d7af7/YtK9TpjSnw.json
  // https://lottie.host/b5f0133b-fff2-4394-9815-d9061e48c47f/bDJX37pUj8.json

  


var typed = new Typed('.auto-type', {
      strings: ['البرمجة !', "التعامل مع البيانات !", "معمارية الحاسوب !"],
      typeSpeed: 75,
      backSpeed: 30,
      loop: true
    });



    function startCounterWhenVisible() {
      $('.counter').each(function() {
        var $this = $(this);
        var counterStarted = false;
    
        $(window).on('scroll', function() {
          var windowHeight = $(window).height();
          var scrollTop = $(window).scrollTop();
          var offset = $this.offset().top;
    
          if (!counterStarted && scrollTop > offset - windowHeight + 100) {
            var countTo = $this.attr('data-count');
    
            $({ countNum: $this.text() }).animate(
              { countNum: countTo },
              {
                duration: 700,
                easing: 'linear',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              }
            );
            counterStarted = true;
          }
        });
      });
    }
    
    // Call the function when the document is ready
    $(document).ready(function() {
      startCounterWhenVisible();
    });
    

    $('.social-logo').hover(function() {
      
      $(this).find("path").toggleClass("white-logo")
    })
    

    


    
    $(document).on("click",".burger-list", function() {
      const el = `
      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-x" style="color: #b578bc" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
      `
      $(".overlay").fadeIn(400)
      $(".exit-navbar").fadeIn(400)
      $(".burger-list").replaceWith(el)
      $("html").css("overflow", "hidden");
  });
  
  $(".exit-navbar").on("click", function() {
    $("html").css("overflow", "visible");
      $(".overlay").fadeOut(400)
      const el = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list burger-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>`
       $(".container-fluid").find("svg").replaceWith(el).fadeIn(500)
  });
  