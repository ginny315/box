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
	box.render({
		container:$('.banner'),
		type:'append'
		});
	var boxList = [];
    var cnt = 0;
    $('.sum').html(cnt);

	$('.button_add').on('click',function(){
		cnt = $('.sum').html();
		boxList[cnt] = new LittleBox.LittleBox();

		boxList[cnt].render({
		container:$('.container'),
		type:'append'
		});
		//console.log(cnt);
		//$('.sum').html(cnt);
	});
	//$('.choosered').trigger('red');
	
	$('.button_minus').on('click',function(){
		//boxList[cnt].destory();
		cnt = $('.sum').html();
		console.log("cnt="+cnt);
		var tempI = [];


//很大的问题：当对象呗删除，数组中的位置还在,解决方式：splice
		for(var i in boxList){
			console.log("开始遍历"+i);			
			try{
				if(boxList[i].getSelected() == '√'){
					console.log(i+"已经被选中");
					tempI.push(i);
					console.log(tempI);
					boxList[i].destroy();
					console.log(i+"已经被销毁");				
				}
			}catch(e){
				alert('there is no box can delete!');
			}
		}

		for(var j = tempI.length-1;j>=0;j--){
			console.log(tempI[j]+"的位置被销毁");
			boxList.splice(tempI[j],1);
		}
		
	});
	$('.button_on_off').on('click',function(){
			for(var i in boxList){
				console.log(i+' '+boxList[i].getSelected());
			if(boxList[i].getSelected() == '√'){
				boxList[i].setSelected('-');
				console.log(boxList[i]);
				boxList[i].getBoundingBox().find('.box').html(boxList[i].selected);
				
			}
			else
				boxList[i].setSelected('√');
				boxList[i].getBoundingBox().find('.box').html(boxList[i].selected);
			}
		if($('.round').css('right') == "-20px"){
			$('.round').css({
				'right': '20px',
			});
//for
		}else{
			$('.round').css({
				'right': '-20px',
			});
		}
	});                	
})

