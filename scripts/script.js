$(document).ready(function () {
    $(".hamburger").click(function () {
        $("nav").slideToggle("slow", function () { })
        $(".hamburger").toggleClass("active")
    })

    $("h4").click(function () {

        if ($(this).hasClass("down")) {
            $(this).next(".list").slideUp()
            $(this).removeClass("down")
        } else {
            if ($("h4").hasClass("down")) {
                $("h4").removeClass("down")
                $("h4").next(".list").slideUp()
            }
            $(this).next(".list").slideDown()
            $(this).addClass("down")
        }
    })
})
