   
   $(document).ready(function()
   {
      $('#wb_Text7').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon4').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon1').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon2').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_header').offset().top }, 600, 'easeOutCirc');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[href*='#welcome']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_welcome').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#services']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#LayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid2').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#features']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_features').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner1').offset().top-88 }, 600, 'easeOutCirc');
      });
      $("a[href*='#banner2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_banner2').offset().top }, 600, 'easeOutCirc');
      });
      function onScrollflowerBookmark()
      {
         var $obj = $("#wb_flowerBookmark");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text7', 'puff-in', 0, 500);
         }
      }
      onScrollflowerBookmark();
      $(window).scroll(function(event)
      {
         onScrollflowerBookmark();
      });
      function onScrollBookmark1()
      {
         var $obj = $("#wb_Bookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon4', 'animate-fade-in-up', 0, 1000);
            AnimateCss('wb_FontAwesomeIcon1', 'animate-fade-in-up', 500, 1000);
            AnimateCss('wb_FontAwesomeIcon2', 'animate-fade-in-up', 1000, 1000);
            AnimateCss('wb_FontAwesomeIcon3', 'animate-fade-in-up', 1500, 1000);
         }
      }
      onScrollBookmark1();
      $(window).scroll(function(event)
      {
         onScrollBookmark1();
      });
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
   
   $(document).ready(function()
   {
      $('#welcome').prepend('<div id="particles1"></div>');
      particlesJS('particles1', {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "f02025"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          }, 
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 90,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "fefefe",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 50,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
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
      });
   });
      
      var wb_indexTimer1;
      function TimerStartindexTimer1()
      {
         wb_indexTimer1 = setTimeout(function()
         {
            var event = null;
            ShowObjectWithEffect('loader', 0, 'fade', 500);
            AnimateCss('wb_Picture2', 'animate-fade-in-left', 400, 500);
            AnimateCss('wb_Text1', 'animate-fade-in-right', 450, 500);
         }, 0);
      }
      function TimerStopindexTimer1()
      {
         clearTimeout(wb_indexTimer1);
      }
      TimerStartindexTimer1();
      