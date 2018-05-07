"use strict";

$(document).ready(function () {

    const overlay = document.createElement('div');
    overlay.className = 'overlay-bg';
    document.body.appendChild(overlay);

    $(function(){
        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);

            if ($('.header__btn')[1].classList.contains('active')) {
                $('.header__btn')[1].classList.remove('active');
                $('.overlay-bg').removeClass('showed');
                $('.header__menu').slideToggle();
            }

            return false;
        });
    });

    var options = {
        offset: $('header').height()
    };

    var header = new Headhesive('.header__top', options);

    $('.header__btn').click(function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            $('.overlay-bg').removeClass('showed');
        } else {
            this.classList.add('active');
            $('.overlay-bg').addClass('showed');
        }

       $('.header__menu').slideToggle();
    });

    $('.overlay-bg').click(function () {
        this.classList.remove('showed');
        $('.header__btn').removeClass('active');
        $('.header__menu').slideToggle();
    });

    $('.tools-catalog').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        variableWidth: true,
    });

    new WOW().init();

    particlesJS('particles-js',{
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    })
});


