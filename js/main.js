// fullpage.js initialization
new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationTooltips: ['AN VI CORP', 'GIỚI THIỆU', 'LĨNH VỰC HOẠT ĐỘNG', 'DỰ ÁN', 'TIN TỨC', 'VỀ NĂNG LỰC KHO CHỨA', 'ĐỐI TÁC', 'LIÊN HỆ'],
  showActiveTooltip: true,
  controlArrows: false,
  slidesNavigation: true,
  navigationPosition: screenLeft,
  //Fix fullPage not work with AOS animation 
  onLeave: function(){
    jQuery('.section [data-aos]').removeClass("aos-animate");
  },
  onSlideLeave: function(){
      jQuery('.slide [data-aos]').removeClass("aos-animate");
  },
  afterSlideLoad: function(){
      jQuery('.slide.active [data-aos]').addClass("aos-animate");
  },
  afterLoad: function(){
      jQuery('.section.active [data-aos]').addClass("aos-animate");
    //jQuery('.fp-table.active .aos-init').addClass('aos-animate');
  }
  //
});

$(document).ready(function(){
  $('.myclass').slick({
    arrows: false, 
    autoplay: true,
    autoplaySpeed: 3000,
  });
});



