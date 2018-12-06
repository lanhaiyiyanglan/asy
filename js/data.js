var dataShow={
	isShow:false,
    counter : 1, //默认已经显示出5条数据 count等于一是让从6条开始加载
    num : 5,  // 一次显示多少条
    pageStart : 0, // 开始页数
    pageEnd : 0, // 结束页数
    listdata: [], // 下拉更新数据存放数组
	init:function(){
		     dataShow.getList();
		      var tagId = "scrollMore";
              var pressX = 0,pressY = 0;
              var obj = document.getElementById(tagId);
              obj.addEventListener('touchmove', function(event) {}, false);
              obj.addEventListener('touchstart', function(event) {
                  if (event.targetTouches.length == 1) {
                      var touch = event.targetTouches[0];
                      pressX = touch.pageX;
                      pressY = touch.pageY;
                  }
              }, false);
              obj.addEventListener('touchend', function(event) {
                  if (event.targetTouches.length == 1) {
                      var touch = event.targetTouches[0];touchend.value = touch.pageX + ';' + touch.pageY;
                  }
                  if (document.body.scrollTop+screen.height+20>document.body.scrollHeight) {
                    dataShow.loadMore();
                  }
              }, false);
              var num='';
              if(dataShow.GetQueryString("id")=="roundLong"){
              	$(".showings > h3 span").text("圆领长袖");
              	num=1;
              }
              else if(dataShow.GetQueryString("id")=="lapelShort"){
              	$(".showings > h3 span").text("翻领短袖");
              	num=2;
              }else if(dataShow.GetQueryString("id")=="lapelLong"){
              	$(".showings > h3 span").text("翻领长袖");
              	num=3;
              }
              else if(dataShow.GetQueryString("id")=="VTshirt"){
              	$(".showings > h3 span").text("V领T恤");
              	num=4;
              }
              else if(dataShow.GetQueryString("id")=="childrenShirt"){
              	$(".showings > h3 span").text("儿童文化衫");
              	num=5;
              }
              else if(dataShow.GetQueryString("id")=="exerciseDry"){
              	$(".showings > h3 span").text("运动速干");
              	num=6;
              }
              else if(dataShow.GetQueryString("id")=="clothesCustom"){
              	$(".showings > h3 span").text("卫衣定制");
              	num=7;
              }
              else if(dataShow.GetQueryString("id")=="outdoorStormsuits"){
              	$(".showings > h3 span").text("户外冲锋衣");
              	num=8;
              }
              else if(dataShow.GetQueryString("id")=="advertisingCap"){
              	$(".showings > h3 span").text("广告帽");
              	num=9;
              }
              else if(dataShow.GetQueryString("id")=="avestApron"){
              	$(".showings > h3 span").text("马甲围裙");
              	num=10;
              }
              else if(dataShow.GetQueryString("id")=="schoolUniform"){
              	$(".showings > h3 span").text("工装厂服");
              	num=11;
              }
              else{
              	$(".showings > h3 span").text("圆领短袖");
              	num=0;
              }
              $(".subMenus ul li").eq(num).addClass("on").siblings().removeClass("on");
	},
	GetQueryString:function(name){
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	},
	getList:function(){
		var flags=dataShow.GetQueryString("id");
		if(dataShow.GetQueryString("id")==null){
			flags="roundShort";
		}
		$.ajax({
            type:"GET",
            url:"data.json",
            dataType: "json",
            success: function(data){
            	$.each(data,function(key,item){
            		if(key==flags){
            			 listdata=item;
            			 var data=item.slice(0,5);
            			 $(".itemsList ul").empty();
            			 for(var i=0;i<data.length;i++){
            			 	var html="";
            			 	html+='<li>';
								html+='<a href="detail.html?id='+data[i].id+'">';
									html+='<img src='+data[i].imgSrc+'>';
									html+='<p>'+data[i].itemTxt+'</p>';
								html+='</a>';
							html+='</li>';
            			    $(".itemsList ul").append(html);
            			 }
            		}
            	});
		     }
		});
    },
	 loadMore: function() {
	 	  dataShow.counter++;
          dataShow.pageEnd = dataShow.num * dataShow.counter;//翻页数*当前页值 5*2=10
          dataShow.pageStart = dataShow.pageEnd - dataShow.num;//翻页后的末尾页值-翻页值10-5=5
          var i = dataShow.pageStart;//6
          var end = dataShow.pageEnd;//12
          $('#loading img').css({"display":"block"});
          if(end<=listdata.length){
                for(; i<end; i++){
                   var html="";
    			 	html+='<li>';
						html+='<a href="detail.html?id='+listdata[i].id+'">';
							html+='<img src='+listdata[i].imgSrc+'>';
							html+='<p>'+listdata[i].itemTxt+'</p>';
						html+='</a>';
					html+='</li>';
    			    $(".itemsList ul").append(html);
                }
          }else{
            if($('#loading').children().length>=1){
              $('#loading img').css({"display":"none"});
            }
            $('#loading').text("别拖了，没有啦！");
          } 
    }
	
}
$(function(){
	dataShow.init();
});

