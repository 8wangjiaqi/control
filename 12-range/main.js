$(function(){
  var $range=$('input[type="range"]');
  var $txtAge=$('#age');
  $range.change(function(){
    //console.log($range.val());
    //console.log($txtAge.html());
    $txtAge.html($range.val()); //val是上面的字
  });
});
