window.onload=function(){
  //自己添加的数据
  var imgData = {"data":[{"src":"3.jpg"},{"src":"1.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]}
  //图片定位 
  imgLocation("container","box");
  //页面滚动到底部，重新加载
  window.onscroll = function(){
    if (checkFlag()) {
      var cparent = document.getElementById("container");
      for (var i = 0; i < imgData.data.length; i++) {
        var ccontent = document.createElement("div");
        ccontent.className="box";
        cparent.appendChild(ccontent);
        var boxImg = document.createElement("div");
        boxImg.className="box-img";
        ccontent.appendChild(boxImg);
        var img = document.createElement("img");
        img.src = "img/"+imgData.data[i].src;
        boxImg.appendChild(img);
        imgLocation("container","box");
      };
    };
  }
}

//监视是否到底页面底部
function checkFlag(){
  var cparent = document.getElementById("container");
  var ccontent = getChildElement(cparent,"box");
  var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
  var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
  var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
  if (lastContentHeight < scrollTop+pageHeight) {
    return true;
  }
}


//将第二排第一张照片放在第一排高度最小的照片的下面
function imgLocation(parent,content){
  //设置container宽度，使页面不随浏览器宽度变化而变形
  var cparent = document.getElementById(parent);
  var ccontent = getChildElement(cparent,content);
  var imgWidth = ccontent[0].offsetWidth;
  var num = Math.floor(document.documentElement.clientWidth / imgWidth);
  cparent.style.cssText = "width:"+imgWidth*num+"px;";
  //找出高度最小的一列，并放置下一张图片
  var BoxHeightArr = [];
  for (var i = 0; i < ccontent.length; i++) {
    if(i < num){
      BoxHeightArr[i] = ccontent[i].offsetHeight;
    }else{
      var minHeight = Math.min.apply(null,BoxHeightArr);//找出数组中最小的值
      var minIndex = getMinHeightLocation(BoxHeightArr,minHeight);

      ccontent[i].style.position = "absolute";
      ccontent[i].style.top = minHeight+"px";
      ccontent[i].style.left = minIndex*imgWidth+"px";
      BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
    }
  };
}

//获取同排高度最小的图片的位置index
function getMinHeightLocation(BoxHeightArr,minHeight){
  for (var i in BoxHeightArr) {
    if (BoxHeightArr[i] == minHeight) {
      return i;
    }
  }
}


//获取子元素数组
function getChildElement(parent,content){
  var contentArr = [];
  var allcontent = parent.getElementsByTagName("*");
  for (var i = 0; i < allcontent.length; i++) {
    if(allcontent[i].className==content){
      contentArr.push(allcontent[i])
    }
  }
  return contentArr;
}