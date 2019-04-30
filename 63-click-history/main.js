$(function(){
  var $btn=$('input[type="button"]');

  var n=0;

  setBtnTitle(n);

  $btn.click(function(){
    var url=location.origin +  location.pathname + '#/' + (++n);
    history.pushState(null,null,url);
    setBtnTitle(n);

  });
  function setBtnTitle(n){
    $btn.val('被按了 '+n+' 次');

  }

  window.onpopstate=function(){

    var n=(location.href).match(/(\d*)$/)[0];
    setBtnTitle(n);
  };
});
