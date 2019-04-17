/* global echarts: true */
$(function(){
  var xData=[],
      yData=[];
  
  //create xDate and yDate
  //
  for(var p=0;p<=1;p+=0.1){
    xData.push(p);
    yData.push(h(p));
    console.log(`p=${p},h(p)=${h(p)}`);
  }



  function h(p) {
    if(p===0) return 0;

    return -1 * p * Math.log2(p)-(1-p) * Math.log2(1-p);
  }
  
  //H(p) = -p*log(p)-(1-p)log(1-p)

  var myChart = echarts.init($('.main')[0]);
  var option = {
    title: {
      text: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
      data:['二进熵']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'line',
      smooth: true,
      data: yData
    }]
  };
  myChart.setOption(option);
});
