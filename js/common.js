document.addEventListener('DOMContentLoaded', function () {
    // JAVASCRIPT //
    document.querySelectorAll('a[href="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    window.addEventListener('scroll', function () {
        SCROLLNAV();
    });

    function SCROLLNAV() {
        if (window.pageYOffset >= 100) {
            document.querySelector('#new_hd').classList.add('active');
        } else {
            document.querySelector('#new_hd').classList.remove('active');
        }
    }
    SCROLLNAV();

    function MENUNAV() {
        $('.nav_item > a').mouseenter(function () {
            $(this).next().stop().slideDown(300);
        });

        $('.nav_item').mouseleave(function () {
            $('.deps_nav').stop().slideUp(300);
        });
    }
    MENUNAV();

    function MAINSLIDER() {
        $('.main_sldier').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: false,
            dots: true,
            cssEase: 'linear',
            fade: true,
        });
    }
    MAINSLIDER();

    function ORGANISLIDER() {
        $('.organi_slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: false,
            dots: true,
            cssEase: 'linear',
        });
    }
    ORGANISLIDER();

    function SIDEBANNER() {
        // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
        var floatPosition = parseInt($('#SIDEBANNER').css('top'));
        // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

        $(window)
            .scroll(function () {
                // 현재 스크롤 위치를 가져온다.
                var scrollTop = $(window).scrollTop();
                var newPosition = scrollTop + floatPosition + 'px';

                $('#SIDEBANNER').stop().animate(
                    {
                        top: newPosition,
                    },
                    {
                        duration: 500,
                        easing: 'easeInOutCubic',
                    }
                );
            })
            .scroll();

            $('.top_btn').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 500);
            });
    }
    SIDEBANNER();

    function MYPAGE_SUBJECT() {
        var clicklink = 0;
        $('.subject_box .subject').click(function () {
            $('.list_txt').slideUp();
            if (!$(this).parents(".subject_con").next(".list_txt").is(':visible')) {
                $(this).parents(".subject_con").next(".list_txt").slideDown();
            }
        });
    }
    MYPAGE_SUBJECT();
});
