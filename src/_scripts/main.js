// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Header = require('../_modules/header/header');
var Tabs = require('../_modules/tabs/tabs');
var Slider = require('../_modules/slider/slider');
var Faqs = require('../_modules/faq/faq');
var Gallery = require('../_modules/gallery/gallery');

$(function() {
    require('bootstrap');
    require('../../bower_components/slick-carousel/slick/slick');
    new Header();
    new Tabs();
    new Slider();
    new Faqs();
    new Gallery();
});
