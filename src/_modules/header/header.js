'use strict';
var $ = require('jquery');
var weather = require('../weather/jquery.simpleWeather.js');
// Constructor
var Header = function() {
    $('._hamburguer').on('click', function(){
        $('.header').toggleClass('-open');
        $('body').toggleClass('-hideOverflow');
    });

    $.simpleWeather({
        location: 'Ushuaia, AR',
        woeid: '',
        unit: 'c',
        success: function (weather) {
            var html;
            html = '<span class="temp">' + weather.temp + '&deg;' + weather.units.temp + '</span>';
            html += '<span class="icon icon-' + weather.code + '"></span>';
            html += '<span class="location">Ushuaia</span>';
            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });

    $('._lang a').click(function() {

        $('._lang a').removeClass('-active');
        $(this).addClass('-active');

        $.expr[":"].contains = $.expr.createPseudo(function(arg) {
            return function( elem ) {
                return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });

        var lang = $(this).data('lang');
        var $frame = $('.goog-te-menu-frame:first');
        if (!$frame.size()) {
            alert("Error: Could not find Google translate frame.");
            return false;
        }

        $frame.contents().find('.goog-te-menu2-item span.text:contains('+lang+')').get(0).click();
        return false;
    });

    $(function() {
    //caches a jQuery object containing the header element
        var header = $(".header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.removeClass('-ontop');
            } else {
                header.addClass('-ontop');
            }
        });
    });
};

module.exports = Header;
