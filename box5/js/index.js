require.config({
    paths: {
        box: 'box',
        littlebox:'littlebox',
        FFF:'FFF',
        zepto:'zepto'
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
		cnt = box.getBoxCount()-1;
		boxList[cnt] = new LittleBox.LittleBox();

		boxList[cnt].render({
		container:$('.container'),
		type:'append'
		});
	});

//获取remove自身的index值，然后数组splice(index,1)
    F.on('changeIndex',function(obj){
    	for(var i in boxList){
    		if(boxList[i].getDie() == 4){
    			boxList.splice(i,1);
    		}
    	}
    });
	
	$('.button_minus').on('click',function(){
		var tempI = [];	
		var current_length = 0;	

//很大的问题：当对象被删除，数组中的位置还在,解决方式：splice
		for(var i in boxList){			
				if(boxList[i].getSelected() == 1){
					tempI.push(i);
					boxList[i].destroy();				
				}
		}

		for(var j = tempI.length-1;j>=0;j--){
			boxList.splice(tempI[j],1);
		}
		box.setBoxCount(boxList.length);
		$('.sum').html(box.getBoxCount());
	});

	$('.button_on_off').on('click',function(){
			for(var i in boxList){
			boxList[i].getSelected() == 1?boxList[i].setSelected(0):boxList[i].setSelected(1);
			}
		if($('.round').css('right') == "-20px"){
			$('.round').css({
				'right': '20px',
			});
		}else{
			$('.round').css({
				'right': '-20px',
			});
		}	
	});          	
})



