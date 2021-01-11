$(document).ready(function() {
    $('.dropdown-toggle').on('click', function () {
        $(this).closest('li').find('.dropdown-menu').toggleClass('active');
        $(this).closest('li').toggleClass('show');
    });
});

// Address

$(document).ready(function() {
    $('#add_new').on('click', function () {
        $('.New-address').removeClass('d-none');
        $('.main-address').removeClass('d-block');
        $('.main-address').addClass('d-none');
        $('.New-address').addClass('d-block');
        $(window).scrollTop(0);
    });
    $('#new_back').on('click', function () {
        $('.New-address').removeClass('d-block');
        $('.main-address').removeClass('d-none');
        $('.New-address').addClass('d-none');
        $('.main-address').addClass('d-block');
        $(window).scrollTop(0);
    });
});

// Order

$(document).ready(function() {
    $('#order_details').on('click', function () {
        $('.order-details').removeClass('d-none');
        $('.main-order').removeClass('d-block');
        $('.main-order').addClass('d-none');
        $('.order-details').addClass('d-block');
        $(window).scrollTop(0);
    });
    $('#back_order').on('click', function () {
        $('.order-details').removeClass('d-block');
        $('.main-order').removeClass('d-none');
        $('.main-order').addClass('d-block');
        $('.order-details').addClass('d-none');
        $(window).scrollTop(0);
    });
});

// reply_open

$(document).ready(function() {
    $('.reply_open').on('click', function () {
        $('#leave_box').toggleClass('d-block');
        $('#leave_box').scrollTop(0);
    });
}); 

// toggle_sidebar

$(document).ready(function() {
    $('#toggle_sidebar').on('click', function () {
        $('.sidebar.side-sticky.small').toggleClass('toggle');
    });
}); 