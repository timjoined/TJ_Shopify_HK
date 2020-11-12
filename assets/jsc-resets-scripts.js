// button scroll left and right for variant image in product page
const buttonRight = document.getElementById('right');
const buttonLeft = document.getElementById('left');
if (buttonRight!=null) {


buttonRight.onclick = function () {
  document.getElementById('list').scrollLeft += 400;
};
}
if (buttonLeft!=null) {


buttonLeft.onclick = function () {
  document.getElementById('list').scrollLeft -= 400;
};
}

var $imgContainer = $('.Product__Slideshow');
var $childArrayElement = $imgContainer.find('.Carousel__Cell');

//click event for variant image
onclickswatch = (evt,color) =>{
    var $varcolor = $(evt).attr('data-tooltip').toLowerCase();
    // console.log($varcolor);
    var $altimg = $(".Alt-image");
    // console.log($altimg);
    var $altimgthumb = $(".Alt-thumb")
    var $thumdot = $(".Product__SlideshowNavDot")

    // display the variant thumbnails after click
    $altimgthumb.each(function(){
      var $datathumb = $(this).attr('data-alt-thumb').toLowerCase();
      // console.log($datathumb);
      if ($datathumb == $varcolor) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    })
  //show selected thumbnails dots ipad 1000px
    $thumdot.each(function(){
      var $datathumbdot = $(this).attr('data-thumb-dot').toLowerCase();
      if ($datathumbdot == $varcolor) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    })

    // display the variant media picture after click
    $altimg.each(function(){
      var $dataImg = $(this).attr('data-alt').toLowerCase();
      // console.log($dataImg);
      if ($dataImg == $varcolor) {
        $(this).addClass('displayBlockimportant').removeClass('displayNoneimportant');
      }
      else {
        $(this).removeClass('displayBlockimportant').addClass('displayNoneimportant');
      }
      // console.log($(this));
    })
  //mobile display variant image
    var $this = $(evt);
    var $isShow = false;
    var $flickityConfig = $imgContainer.attr('data-flickity-config');
    var $obj = JSON.parse($flickityConfig);

    // console.log($obj);

    destroyProductSlider();
    destroyNavSlider();

    if ($(window).width() < 900) {
     $imgContainer.children().remove();

      for (var i = 0; i < $childArrayElement.length; i++) {
      var $thisAltText = $($childArrayElement[i]).attr('data-alt');
      // console.log($thisAltText);

      if ($thisAltText == $varcolor) {
        $imgContainer.append($childArrayElement[i]);
        $isShow = true;
        $(".Alt-image").addClass('displayBlockimportant').removeClass('displayNoneimportant');
      }
    }
  }
    initProductSlider($isShow,$obj);
}

//onload event media image
onloadswatch = () =>{
  var $onloadvar = $(".ColorSwatch__Radio:checked").val().toLowerCase();
  var $altimg = $(".Alt-image");
  // console.log($altimg);
  var $altimgthumb = $(".Alt-thumb")
  // console.log($altimgthumb);
  var $thumdot = $(".Product__SlideshowNavDot")

  // display the variant thumbnails onload
  $altimgthumb.each(function(){
    var $datathumb = $(this).attr('data-alt-thumb').toLowerCase();
    // console.log($datathumb);
    if ($datathumb == $onloadvar) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  })
  //show selected thumbnails dots ipad 1000px
  $thumdot.each(function(){
    var $datathumbdot = $(this).attr('data-thumb-dot').toLowerCase();
    if ($datathumbdot == $onloadvar) {
      $(this).show();
    }
    else {
      $(this).hide();
    }
  })

  // display the variant media picture onload
  $altimg.each(function(){
    var $dataImg = $(this).attr('data-alt').toLowerCase();
    // console.log($dataImg);
    // console.log($onloadvar);
    if ($dataImg == $onloadvar) {
      $(this).addClass('displayBlockimportant').removeClass('displayNoneimportant');
    }
    else {
      $(this).removeClass('displayBlockimportant').addClass('displayNoneimportant');
    }
    // console.log($(this));
  })
  //mobile display variant image
          var $isShow = false;
          var $childArray = $imgContainer.children();
          var $flickityConfig = $imgContainer.attr('data-flickity-config');
          var $obj = JSON.parse($flickityConfig);

          console.log($childArray);
          destroyProductSlider();
          destroyNavSlider();

          if ($(window).width() < 900) {
           $imgContainer.children().remove();

            for (var i = 0; i < $childArrayElement.length; i++) {
            var $thisAltText = $($childArrayElement[i]).attr('data-alt');
            console.log($thisAltText);

            if ($thisAltText == $onloadvar) {
              $imgContainer.append($childArrayElement[i]);
              $isShow = true;
              $(".Alt-image").addClass('displayBlockimportant').removeClass('displayNoneimportant');
            }
          }
        }
        initProductSlider($isShow,$obj);
}

initProductSlider = (isShow,obj) =>{
  if (isShow) {
    $imgContainer.flickity(obj);
     // previous
     $('.button--previous').on( 'click', function() {
       $imgContainer.flickity('previous');
     });
     // next
     $('.button--next').on( 'click', function() {
       $imgContainer.flickity('next');
     });
  }
}

destroyProductSlider = () =>{
  $('.Product__Slideshow').flickity();
  $('.Product__Slideshow').flickity('destroy');
}


destroyNavSlider = () =>{
  $('.Product__SlideshowMobileNav').flickity();
  $('.Product__SlideshowMobileNav').flickity('destroy');
}
onclickinch = (evt) =>{
    $(".tabsinch").addClass('tabsinch-selected');
    $(".tabscm").removeClass('tabscm-selected');
}
onclickcm = (evt) =>{
    $(".tabsinch").removeClass('tabsinch-selected');
    $(".tabscm").addClass('tabscm-selected');
}


$(function(){
  sizeInventory($('.ColorSwatch__Radio:checked').val());
  // init slider function
  initSlider();

  onloadswatch();
  $( "#tabs" ).tabs();
  $(".pop").hide();
  $(".tabsinch").addClass('tabsinch-selected');
});

onclicksize = (evt) =>{
$(".pop").show();
}
onclicksizeclose = (evt) =>{
$(".pop").hide();
}

onclickglobe = (evt) =>{
  // console.log($(".LocationPopup"));
  $(".LocationPopup").show();
  $(".LocationPopup").removeClass('NewsletterPopup');
  $(".LocationPopup").addClass('NewsletterPopup-2');
}

onclickglobeclose = (evt) =>{
  // console.log($(".LocationPopup__Close"));
  $(".LocationPopup").show();
  $(".LocationPopup").removeClass('NewsletterPopup-2');
  $(".LocationPopup").addClass('NewsletterPopup');

}

initSlider = () =>{
  var $element = $('.jsc-init-slider');
  // console.log('mo',$element);
  $element.flickity({
    prevNextButtons: true,
    wrapAround: true,
    pageDots: false
  });
}

sizeInventory = ($color) =>{
  // variable
  var $hideSelect = $('.jsc-hidden-variant');
  var $obj = {};
  var $sizeWatch = $('.jsc-size-swatch');

  // get the OOS value
  $hideSelect.children().each(function(){
    var $_this = $(this);
    var $_variantTitle = $_this.attr('data-title');
    var $_variantInventory = parseInt($_this.attr('data-inventory'));

    if ($_variantTitle.includes($color)) {
      var $_formating = $_variantTitle.replace($color, '').replace(' / ', '');
      $obj[$_formating] = $_variantInventory;
    }
  });

  // remove cross out class
  $sizeWatch.removeClass('sold-out-line');
  // cross out the size swatch
  $sizeWatch.each(function(){
    var $_this = $(this);
    var $_value = $_this.attr('data-value');
    var $_qty = $obj[$_value];
    if ($_qty <= 0) {
      $_this.addClass('sold-out-line');
    }
  });

}
