$(function(){
  var $btn=$('input[type="button"]');

  var n=localStorage.getItem('n');
  if(!n) n=0;

  //set button title
  setBtnTitle(n);

  $btn.click(function(){
    //localStorage.setItem 保存数据
    localStorage.setItem('n',++n);
    setBtnTitle(n);
  });

  function setBtnTitle(n){
    $btn.val('被按了 '+n+' 次');
  }
});
