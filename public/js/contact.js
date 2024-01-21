emailjs.init('YbiEM1fx0-Xe8-7Fq')

function restrictInput(el) {
    el.addEventListener("input", function() {
        el.value = el.value.replace(/[^a-zA-Z0-9\u0600-\u06FF\s]/g, '');
    });
}

// Add event listeners to restrict input for name and message
var nameInput = document.getElementById("name");
var messageInput = document.getElementById("message");

restrictInput(nameInput);
restrictInput(messageInput);
function sendEmail() {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById("contact");
    

    const preventClick = `
    <div class="prevent-user"></div>
    `
    $(".container").after(preventClick)
    $("#submit").attr("disabled", true)
    $("#submit").text("جارٍ الإرسال..");
    $("#submit").css("background", "#ffa101");
    $("#submit").css("opacity", "0.7");
    


     emailjs.sendForm("service_4yefmfa", "template_g97jk3l", form)
         .then(function(response) {
             console.log("Email sent successfully:", response);
             $("#submit").attr("disabled", false)
             $("#submit").text("تم الإرسال !");
             $("#submit").css("background", "#2e9f0d");
             $("#submit").css("opacity", "1");

             setTimeout(function() {
                $(".prevent-user").remove();
                $("#submit").text("إرسال");
                $("#submit").css("background", "linear-gradient(299.5deg, #000000 35.53%, #9c01f5 109.8%)");
                $("#submit").css("opacity", "1");
                form.reset();
    
              }, 3000);

         }, function(error) {
             console.log("Error sending email:", error);
           
             $("#submit").attr("disabled", false)
             $("#submit").text("حدث خطأ");
             $("#submit").css("background", "red");
             $("#submit").css("opacity", "1");

             setTimeout(function() {
                $(".prevent-user").remove();
                $("#submit").text("إرسال");
                $("#submit").css("background", "linear-gradient(299.5deg, #000000 35.53%, #9c01f5 109.8%)");
                $("#submit").css("opacity", "1");
    
              }, 3000);
         });
}