emailjs.init("****");
function restrictInput(a) {
  a.addEventListener("input", function () {
    a.value = a.value.replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, "");
  });
}
var nameInput = document.getElementById("name"),
  messageInput = document.getElementById("message");
restrictInput(nameInput), restrictInput(messageInput);
function sendEmail() {
  event.preventDefault();
  const a = document.getElementById("contact");
  $(".container").after(`
    <div class="prevent-user"></div>
    `),
    $("#submit").attr("disabled", !0),
    $("#submit").text(
      "\u062C\u0627\u0631\u064D \u0627\u0644\u0625\u0631\u0633\u0627\u0644.."
    ),
    $("#submit").css("background", "#ffa101"),
    $("#submit").css("opacity", "0.7"),
    emailjs.sendForm("****", "****", a).then(
      function (b) {
        console.log("Email sent successfully:", b),
          $("#submit").attr("disabled", !1),
          $("#submit").text(
            "\u062A\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 !"
          ),
          $("#submit").css("background", "#2e9f0d"),
          $("#submit").css("opacity", "1"),
          setTimeout(function () {
            $(".prevent-user").remove(),
              $("#submit").text("\u0625\u0631\u0633\u0627\u0644"),
              $("#submit").css("background", "#d89c12"),
              $("#submit").css("opacity", "1"),
              a.reset();
          }, 3e3);
      },
      function (a) {
        console.log("Error sending email:", a),
          $("#submit").attr("disabled", !1),
          $("#submit").text("\u062D\u062F\u062B \u062E\u0637\u0623"),
          $("#submit").css("background", "red"),
          $("#submit").css("opacity", "1"),
          setTimeout(function () {
            $(".prevent-user").remove(),
              $("#submit").text("\u0625\u0631\u0633\u0627\u0644"),
              $("#submit").css("background", "#d89c12"),
              $("#submit").css("opacity", "1");
          }, 3e3);
      }
    );
}
