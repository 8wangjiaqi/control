/* exported $timerBtn,TimerBtn */

//组件封装
//var n =6;

//$(function(){    //==window.onload=function ...

//闭包，函数的立即执行表达式
//闭包，想让他什么时候用就什么时候用
var $timerBtn=(function(){
  //var n=6;
  var cfg={
    container:'.mian',
    title:'确定',
    time:9,
    enabled:false,
    clickHandler:null
  };
  var n=cfg.time;


  //var init=function(){
  var init=function(conf){

    $.extend(cfg,conf);
    var $container=$(cfg.container);
    
    //var $container=$('.main');
    //第一种方法
    /*template string */
    
    //var DOM='<input class="timer-button" type="button" value="同意（6s）" disabled>';
    
    var DOM='<input class="timer-button" type="button" value="' + cfg.title +' ('+n+'s)" disabled>';
    $container.html(DOM);

    //第二种方法
    //var $timerBtn =$('<input type="button" value="同意（6s）" disabled>');
    //$timerBtn.appendTo($container);
 
    //第三种方法
    //var $timerBtn =$('<input type="button" value="同意（6s）" disabled>');
    //$container.append($timerBtn);

    //var $btnAgree=$('input[type="button"]');//获取对象
    
    var $btnAgree=$container.find('.timer-button');  //容器中找input
  
    /*$btnAgree.css({
    'height':'60px',
    'width':'200px',

    'font-size':'1.2em'
    });*/

    var timer=window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled'); //删掉disabled属性
        //$btnAgree.val('同意');
        $btnAgree.val(cfg.title);
                                    
      }else{
        //$btnAgree.val('同意（'+n+'s）');
        $btnAgree.val(cfg.title+'('+n+'s)');
                      
      }
              
    },1000);
    
    $btnAgree.click(function(){
      //alert('SPA!10-timer-buttton task!');
      //$btnAgree.trigger('timer-btn-click');
      cfg.clickHandler();
    });
    return $btnAgree;
  };
  
  var remove=function(){
    var $btn=$('.main').find('.timer-button');

    $btn.remove();
  };

  return {init:init,remove:remove};
  
}());

//});


function TimerBtn(){
  var cfg={
    container:'.mian',
    title:'确定',
    time:9,
    enabled:false,
    clickHandler:null
  };

  var n=cfg.time;

  this.init=function(conf){
    $.extend(cfg,conf);
    var $container=$(cfg.container);
    var DOM='<input class="timer-button" type="button" value="' + cfg.title +' ('+n+'s)" disabled>';
    $container.html(DOM);
    var $btnAgree=$container.find('.timer-button');  //容器中找input
    var timer=window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled'); //删掉disabled属性
        $btnAgree.val(cfg.title);                                             
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);

    $btnAgree.click(function(){
      cfg.clickHandler();
    });
    return $btnAgree;
  };
  
  //return {init:init};
  //return TimerBtn;
}

