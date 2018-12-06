var index={
	init:function(){
		var product=[];
		$.ajax({
            type:"GET",
            url:"data.json",
            dataType: "json",
            success: function(data){
            	$.each(data,function(key,item){
            		 if(key=="cases"){
            			 var casesData=item.slice(0,6);
            			 $("#casesItem ul").empty();
            			  for(var i=0;i<casesData.length;i++){
            			 	var html="";
            			 	html+='<li>';
								html+='<a href="detail.html?id='+casesData[i].id+'">';
									html+='<img src='+casesData[i].imgSrc+'>';
									html+='<p>'+casesData[i].itemTxt+'</p>';
								html+='</a>';
							html+='</li>';
            			    $("#casesItem ul").append(html);
            			  }
            		}
            	});
            	for (var prop in data){
            		product.push(data[prop][0]);
            	}
            	var productData=product.slice(0,6);
            	$("#productItem ul").empty();
            	for(var i=0;i<productData.length;i++){
				 	var html="";
				 	html+='<li>';
						html+='<a href="detail.html?id='+productData[i].id+'">';
							html+='<img src='+productData[i].imgSrc+'>';
							html+='<p>'+productData[i].itemTxt+'</p>';
						html+='</a>';
					html+='</li>';
				    $("#productItem ul").append(html);
			    }
		     }
		});
	}
}
$(function(){
	index.init();
})
