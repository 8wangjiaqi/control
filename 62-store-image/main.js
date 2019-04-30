$(function(){
  var $url=$('input[type="url"]'),
      $btnStore=$('input[type="button"]'),
      $img=$('img'),
      $tmpImg=$('<img>');
  
  $tmpImg.attr('crossOrigin','anonymous');//跨域

  
  var imgURL=localStorage.getItem('url');

  showImg(imgURL);

  $btnStore.click(function(){
    var url=$url.val();
    if(url==='') return;

    $tmpImg.attr('src',url);
    
    //localStorage.setItem('url',data);
    showImg(url);
  });

  $tmpImg.load(function(){
    var can =$('<canvas>').get(0);
    var ctx=can.getContext('2d');

    can.width=this.width;
    can.height=this.height;

    ctx.drawImage(this,0,0,can.width,can.height);

    var data=can.toDataURL(); //data就是base64编码
    localStorage.setItem('url',data);
    showImg(data);
    
  });

  function showImg(url){
    $img.attr('src',url);
    $img.css({'display':'block'});
  }

});
