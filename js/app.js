const MenuIcon = document.querySelector('.hamburger-menu') 
const list = document.querySelector('.navbar')
const body = document.querySelector('body')
// const overlay = document.querySelector('.overlay')

MenuIcon.addEventListener('click', ()=>{
    list.classList.toggle('change')
})



window.addEventListener('scroll', function(){
  var header = document.querySelector('.header_nav')

  var burger = document.querySelector('.hamburger-menu ')
  if(window.scrollY>5){
      var img1 = document.querySelector('.logo_img')
      header.classList.add('header_fixed')
      header.style.backgroundColor = "#222429"
      header.style.color="white"
      burger.style.display = "none"
  }

  if (window.scrollY<10){
      var img1 = document.querySelector('.logo_img')
      header.classList.remove('header_fixed')
      header.style.backgroundColor = "#222429"
      img1.style.display = "block"
  }
});




var owl = $('#owl-demo');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    },
    loop:true,
    margin:15,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: true,
		dots: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




var owl = $('#slider-header');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: false,
		dots: false,
		loop: true
		// navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})








//language-dropdown
    var dropdownButton = $('.dropdownButton');
    var dropdownMenu = $('.dropdownMenu');

    // Button click
    dropdownButton.on('click', function () {
        var _this = $(this);

        dropdownButton.not(_this).removeClass('active').siblings('.dropdownMenu').slideUp(300);
        _this.toggleClass('active').siblings('.dropdownMenu').slideToggle(300);
    });



     $(document).on('click touchstart', function(e) {
        var target = e.target;

        if (!$(target).is('.dropdownButton')) {
            dropdownMenu.slideUp(300);
            dropdownButton.removeClass('active');
        }
        if (!$(target).parents('.dropdownButton')) {
            dropdownMenu.slideUp(300);
            dropdownButton.removeClass('active');
        }
        if (!$(target).parents('.dropdownMenu')) {
            dropdownMenu.slideUp(300);
            dropdownButton.removeClass('active');
        }
    });



var owl = $('#review-carousel');
owl.owlCarousel({
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    },
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav: false,
		dots: false,
		loop: true
		// navText: ["<span class='arrow-icon-left'></span>", "<span class='arrow-icon-right'></span>"],
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


//// dropdown


$('.dropdown-el').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass('expanded');
  $('#'+$(e.target).attr('for')).prop('checked',true);
});
$(document).click(function() {
  $('.dropdown-el').removeClass('expanded');
});