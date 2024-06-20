var app = {


  initializeApps: function() {
    if (document.querySelector('.ideas-section')){
      app.ideasCounter();
    }
  },

  slickLogos: () => {
    $(".slick-logos").slick({
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      autoplay: true,
      autoplaySpeed: 500,
      speed: 8000,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },

  ideasCounter: () => {
    const counter = document.querySelector(".ideas-section");
    const io = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio !== 0) {
        $(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
  
          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo
            },
  
            {
              duration: 4000,
              easing: "linear",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            }
          );
        });
      }
    });
    io.observe(counter);
  },

  slickTestimonials: () => {
    var prevBtn = $(".prev-btn");
    var nextBtn = $(".next-btn");

    $(".testimonials-slide").slick({
      infinite: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: nextBtn,
      prevArrow: prevBtn,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },
  
  mobileMenu: () => {
    $(".burger-menu").on("click", () => {
      $(".mobile-menu").toggleClass("mobile-menu__active");
    });
  },

  fixedHeader: () => {
    $(window).scroll(() => {
      var scroll = $(window).scrollTop();
      var navHeight = $(".main-header").height();

      if (scroll > navHeight) {
        $(".main-header").addClass("fixed-header");
        $(".header-inner").addClass("fh-active");
      } else {
        $(".main-header").removeClass("fixed-header");
        $(".header-inner").removeClass("fh-active");
      }
    });
  },

  featuredTeamSlider: () => {
    var nextBtn = $(".team-next-btn");
    var prevBtn = $(".team-prev-btn");

    $(".main-team-slider").slick({
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      nextArrow: prevBtn,
      prevArrow: nextBtn,
      asNavFor: ".prev-team-slide",
    });
  },

  prevTeamSlider: () => {
    $(".prev-team-slide").slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: ".main-team-slider",
      arrows: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  },

  whatWeDoSlider: () => {
    var nextBtn = $(".wwd-next");
    var prevBtn = $(".wwd-prev");
    $(".wwd-slider-wrap").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: prevBtn,
      prevArrow: nextBtn,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },

  ourMissionSlider: () => {
    var nextBtn = $(".om-next");
    var prevBtn = $(".om-prev");
    $(".om-slider-wrap").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: prevBtn,
      prevArrow: nextBtn,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },

  caseStudiesSlider: () => {
    var prev = $(".case-prev");
    var next = $(".case-next");
    $(".case-studies-wrapper").slick({
      arrows: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 5000,
      nextArrow: next,
      prevArrow: prev,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  },

  caseTestimonialsSlider: () => {
    $(".ct-wrapper").slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      autoplaySpeed: 5000,
    });
  },

  mobileDoubleClick: () =>{
  $('.mobile-menu__sub').hide();
  $('.mobile-menu__main > li > a').click(function(e) {
    if ($(this).next('.mobile-menu__sub').length) {
      e.preventDefault(); // Prevent default link behavior
      $(this).next('.mobile-menu__sub').slideToggle();
      $('.mobile-menu__sub').not($(this).next('.mobile-menu__sub')).slideUp();
    }
  });
},
};

$(document).ready(function () {
  AOS.init({ disable: "mobile" });
  app.mobileDoubleClick();
  app.slickLogos();
  app.slickTestimonials();
  app.mobileMenu();
  app.fixedHeader();
  app.featuredTeamSlider();
  app.prevTeamSlider();
  app.whatWeDoSlider();
  app.ourMissionSlider();
  app.caseStudiesSlider();
  app.caseTestimonialsSlider();
  app.initializeApps();
});
