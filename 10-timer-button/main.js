$(function(){
  var n=6;
  var $btnAgree=$('input[type="button"]');//获取对象
  var timer=window.setInterval(function(){
    n--;
    if(n===0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled'); //删掉disabled属性
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意（'+n+'s）');
    }
  },1000);
  $btnAgree.click(function(){
    alert('SPA!10-timer-buttton task!');
  });
});
