import $ from "jquery";

$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $(".header").addClass("fixed-header");
    } else {
        $(".header").removeClass("fixed-header");
    }
});

// $("#sidebar-menu a").on("click", function (e) {
//     if ($(this).parent().hasClass("submenu")) {
//         e.preventDefault();
//     }
//     if (!$(this).hasClass("subdrop")) {
//         $("ul", $(this).parents("ul:first")).slideUp(350);
//         $("a", $(this).parents("ul:first")).removeClass("subdrop");
//         $(this).next("ul").slideDown(350);
//         $(this).addClass("subdrop");
//     } else if ($(this).hasClass("subdrop")) {
//         $(this).removeClass("subdrop");
//         $(this).next("ul").slideUp(350);
//     }
// });
// $("#sidebar-menu ul li.submenu a.active")
//     .parents("li:last")
//     .children("a:first")
//     .addClass("active")
//     .trigger("click");
