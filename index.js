function startCounterWhenVisible() {
  var a = new IntersectionObserver(
    function (a) {
      a.forEach(function (a) {
        if (a.isIntersecting) {
          var b = $(a.target);
          if (!b.hasClass("counterStarted")) {
            var c = b.attr("data-count");
            $({ countNum: b.text() }).animate(
              { countNum: c },
              {
                duration: 1e3,
                easing: "linear",
                step: function () {
                  b.text(Math.floor(this.countNum));
                },
                complete: function () {
                  b.text(this.countNum);
                },
              }
            ),
              b.addClass("counterStarted");
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  $(".counter").each(function () {
    a.observe(this);
  });
}
startCounterWhenVisible(),
  $(".social-logo").hover(function () {
    $(this).find("path").toggleClass("white-logo");
  });
function redirectToProductPage(a) {
  window.location.href = a;
}
function openOverlay() {
  $(".overlay-popup").css("display", "flex").hide().fadeIn();
    $(".popup-container").fadeIn(400),
    $("html").css("overflow", "hidden");
}
$(document).on("click", ".close-offers-popup", function () {
  $(".popup-container").fadeOut(400),
    $(".overlay-popup").fadeOut(400),
    $("html").css("overflow", "visible");
}),
  $(document).on("click", ".btn-offers-small-screens", function () {
    $(".exit-navbar").click(),
      $(".overlay-popup").fadeIn(400),
      $(".popup-container").fadeIn(400),
      $("html").css("overflow", "hidden");
  });
const changingColorElement = document.getElementById("changingColorElement"),
  changingColorElementMobile = document.getElementById(
    "changingColorElementMobile"
  ),
  colors = ["#7f0d84", "#ffbc04"];
let colorIndex = 0;
function isScreenSizeGreaterThan992() {
  const a =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return 992 < a;
}
function updateColor() {
  isScreenSizeGreaterThan992()
    ? ((changingColorElement.style.backgroundColor = colors[colorIndex]),
      (colorIndex = (colorIndex + 1) % colors.length))
    : ((changingColorElementMobile.style.backgroundColor = colors[colorIndex]),
      (colorIndex = (colorIndex + 1) % colors.length));
}
setInterval(updateColor, 1e3);
const navbar = document.querySelector("nav"),
  scrollHeightThreshold = 90;
window.onscroll = function () {
  const a = window.pageYOffset;
  a > scrollHeightThreshold
    ? navbar.classList.add("fixed-top")
    : navbar.classList.remove("fixed-top");
};
