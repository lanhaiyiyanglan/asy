var detail={
	init:function(){
		$.ajax({
            type:"GET",
            url:"data.json",
            dataType: "json",
            success: function(data){
            	$.each(data,function(key,item){
            		if(key=="cases"){
            			 var data=item;
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
	GetQueryString:function(name){
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
}
$(function(){
	detail.init();
})
