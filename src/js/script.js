var swiper = new Swiper(".swiper__cards", {
    slidesPerView: 1,
    sliderPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
        el: ".card__swiper-pagination",
    },
});

$('.play-yt').click( () => {
    $('.play-yt').hide()
    $('.yt-video').attr('src','https://www.youtube.com/embed/GP9L_2CPh1M?autoplay=1;')
})

$('#menu-toggle').on('change', function() {
    $('body').css('overflow', $(this).prop('checked') === true ? 'hidden' : '');
})