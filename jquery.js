
$('.small-img').click(function(){

  var imgsrc=$(this).attr('src');
  $('.large-img').attr('src',imgsrc);

  var changeAlt = $(this).attr("alt");
  $(".img-desc").text(changeAlt);

});