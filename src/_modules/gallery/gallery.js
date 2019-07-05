'use strict';
var $ = require('jquery');
// Constructor
var Gallery = function() {
    var modal = $('#lightbox');
    var modalTrigger = $('[data-target="#lightbox"]');
    //var modalImg = $('._lightboxImg');
    //var modalVideo = $('._lightboxVideo');
    var modalClose = $(['data-dismiss="modal"']);
    var galleryItems = $('._item');
    var modalSlider = $('#modal-slider');
    var modalSlides = [];

    if ( modal ) {

        $.each( galleryItems, function(index, value){

            if ( $(value).hasClass('-photo') ) {

                var source = $(value).find('._image').attr('src');
                var d = document.createElement('div');
                var i = document.createElement('img');

                $(i).addClass('-image-' + index + ' _lightboxImg')
                    .attr('src', source);

                $(d).addClass('-image-' + index + '-div')
                    .html(i)
                    .appendTo( modalSlider ); //main div

            } else if ( $(value).hasClass('-video') ) {

                var source = $(value).find('._video').data('video');
                var d = document.createElement('div');
                var i = document.createElement('iframe');

                $(i).addClass('-video-' + index + ' _lightboxVideo')
                    .attr('src', 'https://www.youtube.com/embed/' + source + '?autoplay=0');

                $(d).addClass('-video-' + index + '-div')
                    .html(i)
                    .appendTo( modalSlider ); //main div
            }
        });
    }

    modalTrigger.click(function(){

        var index = $(this).index();

        $('#modal-slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          adaptiveHeight: true
        });

        //$('#modal-slider').slick('slickGoTo', index);


        // var mode = $(this).data('mode');
        //
        // if ( mode === 'photo' ) {
        //     var source = $(this).find('._image').attr('src');
        //     modal.removeClass('-video').addClass('-image');
        //     modalImg.attr('src', source);
        // } else if ( mode === 'video' ) {
        //     var source = $(this).find('._video').data('video');
        //     modal.removeClass('-image').addClass('-video');
        //     modalVideo.attr('src', 'https://www.youtube.com/embed/' + source + '?autoplay=1');
        // }
    });

    // modal.on('hidden.bs.modal', function (e) {
    //     modalVideo.attr('src', modalVideo.attr('src').replace('?autoplay=1',''));
    // });
};

module.exports = Gallery;
