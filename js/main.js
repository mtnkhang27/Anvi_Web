// fullpage.js initialization
if (document.querySelector('#fullpage')) {
  if (window.screen.width >= 1024) {
    new fullpage('#fullpage', {
      autoScrolling: true,
      scrollOverflow: true,
      scrollHorizontally: true,
      navigation: true,
      //responsiveWidth: 1024,
      navigationTooltips: ['AN VI CORP', 'GIỚI THIỆU', 'LĨNH VỰC HOẠT ĐỘNG', 'BAN LÃNH ĐẠO', 'TIN TỨC', 'VỀ NĂNG LỰC KHO CHỨA', 'ĐỐI TÁC', 'LIÊN HỆ'],
      showActiveTooltip: true,
      controlArrows: false,
      slidesNavigation: true,
      navigationPosition: screenLeft,
      //Fix fullPage not work with AOS animation 
      onLeave: function () {
        jQuery('.section [data-aos]').removeClass("aos-animate");
      },
      onSlideLeave: function () {
        jQuery('.slide [data-aos]').removeClass("aos-animate");
      },
      afterSlideLoad: function () {
        jQuery('.slide.active [data-aos]').addClass("aos-animate");
      },
      afterLoad: function () {
        jQuery('.section.active [data-aos]').addClass("aos-animate");
        //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
      },
      //
    });
  }
}

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});

if ($("#slide-activity").length) {
  $('#slide-activity').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
}

if ($("#slide-person").length) {
  $('#slide-person').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
}

if ($('#slide-new').length) {
  $('#slide-new').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
}

if ($('#slide-partner').length) {
  $('#slide-partner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      }
    ]
  });
}

if ($('.home__banner').length) {
  $('.home__banner').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
}

//------------------------Header-----------------------
const header = document.querySelector(".header");

document.querySelector('.header__icon').addEventListener("click", () => {
  if (header.classList.contains("active")) {
    header.classList.remove("active")
  } else {
    header.classList.add("active")
  }
})

//Check the path in the header
function checkPage() {
  const currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll('.header__list a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.parentElement.classList.add('active');
    }
  })
}

checkPage();

document.querySelector('.main').style.height = null;




