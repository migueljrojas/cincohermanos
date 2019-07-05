'use strict';
var $ = require('jquery');

// Constructor
var Tabs = function() {
    var tabs = $('.tabs');

    if ( tabs ) {

        $('.tabs').each( function(){

            var tabContent = $(this).siblings('._tab-container').children('._tab');
            var tabSelectors = $(this).children('li');

            function init() {
                $(tabContent).first().addClass('-active');
                $(tabSelectors).first().addClass('-active');
            }

            $(this).children('li').each( function(){
                $(this).on('click', function() {
                    var dataTarget = $(this).data('target');
                    tabSelectors.removeClass('-active');
                    $(this).addClass('-active');

                    tabContent.removeClass('-active');
                    tabContent.filter(function() {
                        return $(this).data('id') == dataTarget;
                    }).addClass('-active');
                });
            });

            init();
        });
    }

};

module.exports = Tabs;
