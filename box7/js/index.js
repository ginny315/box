require.config({
    paths: {
        box: 'box',
        littlebox:'littlebox',
    }
});

require(['FFF','zepto','box','littlebox'],function(FFF,$,Box,LittleBox){
	var box = new Box.Box();
	var F = FFF.FFF;
	box.render({
		container:$('.banner'),
		type:'append'
	});
	var boxList = [];
    var cnt = 0;
    $('.sum').html(cnt);


	$('.button_add').on('click',function(){
		console.log('boxList.length333='+boxList.length);
		//cnt = $('.sum').html();
		cnt = box.getBoxCount();
		console.log('cnt333:'+cnt);
		boxList[cnt] = new LittleBox.LittleBox();
/*		console.log(boxList[cnt]);
		boxList[cnt].setCurrentIndex(cnt);
		console.log(boxList[cnt].getCurrentIndex());*/

		boxList[cnt].render({
		container:$('.container'),
		type:'append'
		});
		console.log(boxList);
		console.log('boxList.length444='+boxList.length);
		//console.log(boxList[cnt]);
		//$('.sum').html(boxList.length);

	});

//获取remove自身的index值，然后数组splice(index,1)
    F.on('changeIndex',function(obj){
    	//alert(obj.t);
    	//var temp_index = boxList[index].getCurrentIndex();
    	for(var i in boxList){
    		//console.log(boxList[i].getDie());
    		if(boxList[i].getDie() == 4){
    			console.log('i=',i);
    			boxList.splice(i,1);
    		}
    	}
    });
	
	$('.button_minus').on('click',function(){
		//cnt = $('.sum').html();
		var tempI = [];	
		//var t = 0;
		var current_length = 0;	

//很大的问题：当对象被删除，数组中的位置还在,解决方式：splice
		for(var i in boxList){
			console.log("开始遍历"+i);			
			try{
				if(boxList[i].getSelected() == 1){
					console.log(i+"已经被选中");
					//t++;
					tempI.push(i);
					console.log(tempI);
					boxList[i].destroy();
					console.log('boxList.length111='+boxList.length);
					console.log(i+"已经被销毁");				
				}
			}catch(e){
				alert('there is no box can delete!');
			}
		}

		for(var j = tempI.length-1;j>=0;j--){
			console.log(tempI[j]+"的位置被销毁");
			boxList.splice(tempI[j],1);
			console.log('boxList.length222='+boxList.length);
		}
		//current_length = box.getBoxCount()-t;
		//box.setBoxCount(current_length);
		console.log('boxList.length='+boxList.length);
		box.setBoxCount(boxList.length-1);
		$('.sum').html(box.getBoxCount());
	});

	$('.button_on_off').on('click',function(){
			for(var i in boxList){
			boxList[i].getSelected() == 1?boxList[i].setSelected(0):boxList[i].setSelected(1);
			}
		if($('.round').css('right') == "-8px"){
			$('.round').css({
				'right': '35px',
			});
		}else{
			$('.round').css({
				'right': '-8px',
			});
		}
	
	});   


	$('.close').on('click',function(){
		var that = this;
		//var tempI = [];
		var temp = that.getCurrentIndex();
		console.log(temp);
		boxList.splice(temp,1);
		
	});        	
})

