"use strict";

$(document).ready(function() {
    $(".nav-mobile-burger").click(function() {
        $(".nav-buttons").toggleClass("nav-buttons_opened");
        $(".nav-mobile-burger").toggleClass("nav-close");
        $(".nav").toggleClass("nav_fixed");
    });
});