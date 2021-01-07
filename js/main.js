
$(window).on('load', function() {

    // Nav bar (Scroll)

    $(window) .on('scroll' , function () { 

        if ( $(window).scrollTop() > 60 ) {

            $('.header nav') .addClass('active-nav');

        } else {

            $('.header nav') .removeClass('active-nav');

        }

    });

    //////////////////////////////////////////////////////////////////

    // Slide Toggle & over-Lay

    $('.header .top-bar .float-left') .click(function(){

        $('.header .top-bar .slide-toggle') .slideDown(400);

        $('.over-lay') .on('click', function(){

            $('.header .top-bar .slide-toggle') .slideUp(400);
    
        });

    });

    
    $('<div class="over-lay"></div>') .appendTo('body');

    $('.header .top-bar .float-left') .click(function(){

        $('.over-lay') .animate ({
            height: '100%'
        }, 0);

    });

    $('.over-lay') .click(function(){

        $(this) .animate ({
            height: '0%'
        }, 0);

    });

    //////////////////////////////////////////////////////////////

    // Animation box & Tabs

    $('.clinic-details .tabs a') .on('click', function (e) {

        e.preventDefault();
        $(this) .addClass('active') .siblings() .removeClass('active');

    });
    
    $('.clinic-details .parent .box-1') .animate ({
        opacity: 1,
        zIndex: 22
    }, 400);

    $('body, html').each (function () {

        $('.clinic-details .tabs .tab-1').on ('click', function(){

            $('.clinic-details .parent .box-1') .addClass('relative');
            $('.clinic-details .parent .box-2') .removeClass('relative');
            $('.clinic-details .parent .box-3') .removeClass('relative');
            $('.clinic-details .parent .box-4') .removeClass('relative');

            $('.clinic-details .parent .box-2') .animate ({
                opacity: 0,
                zIndex: -1
            }, 400);

            $('.clinic-details .parent .box-3') .animate ({
                opacity: 0,
                zIndex: -1
            }, 400);

            $('.clinic-details .parent .box-4') .animate ({
                opacity: 0,
                zIndex: -1
            }, 400);

            $('.clinic-details .parent .box-1').delay(400) .animate ({
                opacity: 1,
                zIndex: 22
            }, 750);

        }); 


        $('.clinic-details .tabs .tab-2').on ('click', function(){

            $('.clinic-details .parent .box-1') .removeClass('relative');
            $('.clinic-details .parent .box-2') .addClass('relative');
            $('.clinic-details .parent .box-3') .removeClass('relative');
            $('.clinic-details .parent .box-4') .removeClass('relative');

            $('.clinic-details .parent .box-1') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-3') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-4') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-2').delay(400) .animate ({
                opacity: 1,
                zIndex: 22,
            }, 750);

        }); 


        $('.clinic-details .tabs .tab-3').on ('click', function(){

            $('.clinic-details .parent .box-1') .removeClass('relative');
            $('.clinic-details .parent .box-2') .removeClass('relative');
            $('.clinic-details .parent .box-3') .addClass('relative');
            $('.clinic-details .parent .box-4') .removeClass('relative');

            $('.clinic-details .parent .box-1') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-2') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-4') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-3').delay(400) .animate ({
                opacity: 1,
                zIndex: 22,
            }, 750);

        }); 


        $('.clinic-details .tabs .tab-4').on ('click', function(){

            $('.clinic-details .parent .box-1') .removeClass('relative');
            $('.clinic-details .parent .box-2') .removeClass('relative');
            $('.clinic-details .parent .box-3') .removeClass('relative');
            $('.clinic-details .parent .box-4') .addClass('relative');
            
            $('.clinic-details .parent .box-1') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-3') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-2') .animate ({
                opacity: 0,
                zIndex: -1,
            }, 400);

            $('.clinic-details .parent .box-4').delay(400) .animate ({
                opacity: 1,
                zIndex: 22,
            }, 750);

        }); 

    });
    
    /////////////////////////////////////////////////////////////////////////////

    // Veno Box (Photo)

    $(document).ready(function() {

        $('.venobox').venobox({

            spinner: 'double-bounce',
            spinColor: '#586bda'
        
        });
      
    });
    
    //////////////////////////////////////////////////////////

    // Init AOS
    AOS.init();

    ///////////////////////////////////////////////////////

    // Loading

    $(".box-loading").delay(0) .fadeOut('slow', function(){

        $(this).remove() .fadeOut();

    });

    /////////////////////////////////////////////////////

    // Select

    $('.clinic-details .parent .box-1 .box-select .sign') .click( function() {

        $('.clinic-details .parent .box-1 .box-select option') .click();

    });

    // Options Dynamic

    for(var i = 10; i <= 90; i++ ) {

        $("<option>" , {value: i , text: i} ) .appendTo($("#age-1"));
        $("<option>" , {value: i , text: i} ) .appendTo($("#age-2"));

    }

    ///////////////////////////////////////////////////////

    // Time & Date

    $('.clinic-details .parent .box-1 .date .content .text') .click(function() {

        $('.clinic-details .parent .box-1 .date .content .text') .each(function(){

            $(this) .removeClass('active');

        });

        $(this) .addClass('active');

    });

    $('.clinic-details .parent .box-1 .time .content .text') .click(function() {

        $('.clinic-details .parent .box-1 .time .content .text') .each(function(){

            $(this) .removeClass('active');

        });

        $(this) .addClass('active');

    });

    //////////////////////////////////////////////////////////////////////////////

    // Active Tabs in Form

    $('.sign-in-up .tab') .click (function (){

        $('.sign-in-up .tab') .each(function(){

            $(this) .removeClass('active-tab');

        });

        $(this) .addClass('active-tab')

    });

    /////////////////////////////////////////////////////////////////////////////

    // Change input Typer & Change active-i

    $('.sign-in-up .box-input .hide') .click (function(){

        $(this) .removeClass('active-i');

        $(".sign-in-up .box-input .visible") .addClass('active-i');

        $(".sign-in-up .box-input .change") .attr("type", "text");

    });

    $('.sign-in-up .box-input .visible') .click (function(){

        $(this) .removeClass('active-i');

        $(".sign-in-up .box-input .hide") .addClass('active-i');

        $(".sign-in-up .box-input .change") .attr("type", "password");

    });

    ////////////////////////////////////////////////////////////////////////////

    // Save Book

    $('.clinic-details .parent button') .click(function () {

        $('.clinic-details .save-book') .css('transform' , 'scale(1)');

    });

    $('.clinic-details .save-book svg') .click(function () {

        $('.clinic-details .save-book') .css('transform' , 'scale(0)');

    });

    /////////////////////////////////////////////////////////////////////////////

    // Address

    $("form .open").click (function() {

        $("form .address").css ('display', 'block');

    });
    $(".address .submit").click (function() {

        $("form .address").css ('display', 'none');

    });



    /////////////////////////////////////////////////////////////////////////////////

    $('.clinic-details form .name') .on('keyup', function(){

        $('.clinic-details .save-book .save-name span') .text( $('.clinic-details form .name').val() );

    });

    $('.clinic-details form .phone') .on('keyup', function(){

        $('.clinic-details .save-book .save-phone span') .text( $('.clinic-details form .phone').val() );

    });


    $('.clinic-details form .date .content .text') .on ('click', function(){

        $('.clinic-details form .day').val( $(this).text() );

        $('.clinic-details .save-book .save-day span').text ($(this).text());
    });



});




