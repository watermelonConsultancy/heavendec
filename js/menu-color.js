// Change Color Navbar Elements on Scroll

   $(window).scroll(function(){
    if ($(this).scrollTop() > 350) {
       $('.icon-bar').addClass('opaque');
       $('.navbar-brand img').attr('src', 'img/hd-w.png');
    } else {
       $('.icon-bar').removeClass('opaque');
       $('.navbar-brand img').attr('src', 'img/hd-b.png');
    }
});



$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $('#topbar, .cart-label').fadeOut('slow');
            $('.logo img')
                .attr('src','img/hd-b.png');
        }
        if($(this).scrollTop() < 100) {
            $('#logo, #topbar, .cart-label').fadeIn('fast');
            $('.logo img')
                .attr('src','img/hd-w.png');
        }
    });
});
