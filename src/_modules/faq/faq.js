'use strict';
var $ = require('jquery');

// Constructor
var Faq = function() {

    var faq = $('.faq');

    if ( faq ) {
        faq.each(function(){
            $(this).children('._Q').on('click', function(){
                $(this).toggleClass('-open');
            });
        });        
    }

};

module.exports = Faq;
