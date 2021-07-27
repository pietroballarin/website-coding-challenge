
$('.small-img').click(function(){
  var imgsrc=$(this).attr('src');
  $('.big-img').attr('src', imgsrc);
});