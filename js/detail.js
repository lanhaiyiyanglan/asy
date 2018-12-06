var detail={
	init:function(){
		var nowSite='';
		var nowTxt='';
		var urlParam='';
		var flags=detail.GetQueryString("id");
		if(flags.indexOf("roundLong")>-1){
			nowSite="圆领长袖";
			urlParam="roundLong";
		}else if(flags.indexOf("lapelShort")>-1){
			nowSite="翻领短袖";
			urlParam="lapelShort";
		}else if(flags.indexOf("lapelLong")>-1){
			nowSite="翻领长袖";
			urlParam="lapelLong";
		}else if(flags.indexOf("VTshirt")>-1){
			nowSite="V领T恤";
			urlParam="VTshirt";
		}else if(flags.indexOf("childrenShirt")>-1){
			nowSite="儿童文化衫";
			urlParam="childrenShirt";
		}else if(flags.indexOf("exerciseDry")>-1){
			nowSite="运动速干";
			urlParam="exerciseDry";
		}else if(flags.indexOf("clothesCustom")>-1){
			nowSite="卫衣定制";
			urlParam="clothesCustom";
		}else if(flags.indexOf("outdoorStormsuits")>-1){
			nowSite="户外冲锋衣";
			urlParam="outdoorStormsuits";
		}else if(flags.indexOf("advertisingCap")>-1){
			nowSite="广告帽";
			urlParam="advertisingCap";
		}else if(flags.indexOf("avestApron")>-1){
			nowSite="马甲围裙";
			urlParam="avestApron";
		}else if(flags.indexOf("schoolUniform")>-1){
			nowSite="工装厂服";
			urlParam="schoolUniform";
		}else if(flags.indexOf("cases")>-1){
			nowSite="经典案例";
			urlParam="cases";
		}else{
			nowSite="圆领短袖";
			urlParam="roundShort";
		}
		$.ajax({
            type:"GET",
            url:"data.json",
            dataType: "json",
            success: function(data){
            	$.each(data,function(key,item){
            		for(var i=0;i<item.length;i++){
            			if(flags==item[i].id){
            				nowTxt=item[i].itemTxt;
            			}
            		}
            	});	
            	if(nowSite!=''&&nowTxt!=''){
            		if(urlParam!="cases"){
            			$(".titleLine").append('<div class="titleLine">当前位置：<a href="index.html">首页</a>><a href="showProduct.html?id='+urlParam+'">'+nowSite+'</a>><span>'+nowTxt+'</span></div>');
            		}else{
            			$(".titleLine").append('<div class="titleLine">当前位置：<a href="index.html">首页</a>><a href="cases.html">'+nowSite+'</a>><span>'+nowTxt+'</span></div>');
            		}
            	}
		    }
		});
		$.ajax({
            type:"GET",
            url:"detail.json",
            dataType: "json",
            success: function(data){
            	$.each(data,function(key,item){
            		if(key==flags){
            			 var jsonObj=item[0];
            			 $(".imgList > div").empty();
            			 for (var prop in jsonObj)
						 {
						 	 var html="";
						    if(prop=="img1"){
            			 		html+='<img src='+jsonObj["img1"]+'>';
            			 	}else if(prop=="title"){
            			 		html+='<h3>'+jsonObj["title"]+'</h3>';
            			 	}else{
            			 		html+='<img src='+jsonObj[prop]+'>';
            			 	}
            			    $(".imgList > div").append(html);
						 }
            		}
            	});
		     }
		});
	},
	GetQueryString:function(name){
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
}
$(function(){
	detail.init();
})
