"use strict";

$(document).ready(function() {
    $(".beautiful-scroll").each(function() {
        $(this).click(function() {
            $("html, body").animate({scrollTop:0}, "slow");
        });
    });
});