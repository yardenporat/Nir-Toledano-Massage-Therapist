$(document).ready(function() {

    //sticky nav
    var waypoint = new Waypoint({
        element: document.querySelector('.js--section-features'),
        handler: function(direction) {
            const element =  document.querySelector('nav');
            if (direction=="down") {
              //  $('nav').addClass('sticky',1000);
              element.classList.add('sticky','animated', 'fadeIn')

            } else {
                $('nav').removeClass('sticky',1000);
                $('nav').removeClass('animated',0);
                $('nav').removeClass('fadeIn',0);
            }
        },
        offset: '50%'
    });

    //scroll on buttons
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

   

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    $('.js--nav-icon').on('click', function() {
        const nav =  $(document.querySelector('.js--main-nav'));
        const menu = $(document.querySelector('ion-icon[name=menu]'));
        const close = $(document.querySelector('ion-icon[name=close]'));
        nav.slideToggle(200);
        menu.toggle(200);
        close.toggle(200);
      });
    // document.querySelectorAll('.mobile-nav-icon').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //       //  e.preventDefault();
    //       $( this ).css( "display", "block" );
    //         });
    //     });
    // });


//animations on scroll

    var waypoint2 = new Waypoint({
        element: document.querySelector('.js--wp-1'),
        handler: function(direction) { //returns down or up
            //
            $('.js--wp-1').addClass('animated fadeIn');
        },
        offset: '50%' //apear b4 element end
    });

    var waypoint3 = new Waypoint({
        element: document.querySelector('.js--wp-2'),
        handler: function(direction) { //returns down or up     

            const element =  document.querySelector('.js--wp-2')
            element.classList.add('animated', 'fadeInUp')
        },
        offset: '250px' //apear b4 element end
    }); 

    var cities = new Waypoint({
        element: document.querySelector('.js--wp-3'),
        handler: function(direction) { //returns down or up     

            const element =  document.querySelector('.js--wp-3')
            element.classList.add('animated', 'fadeIn')
        },
        offset: '50%' //apear b4 element end
    }); 

    var plansAnimation = new Waypoint({
        element: document.querySelector('.js--wp-4'),
        handler: function(direction) { //returns down or up     

            const element =  document.querySelector('.js--wp-4')
            element.classList.add('animated', 'pulse')
        },
        offset: '50%' //apear b4 element end
    }); 

})