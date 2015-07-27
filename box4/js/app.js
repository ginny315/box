require(['FFF', 'zepto','box'], function(FFF, $, Box) {    
    var F = FFF.FFF;
     
     //var box =  new Box.Box();
     //box.render({ container: $('#box')})

    var boxList = [];
    var cnt = 0;
    for(var i=0;i<5;i++){
	boxList[i] = new Box.Box();
	cnt++;
	
	
	boxList[i].render({
		container:$('.container'),
		type:'append'
	});
	console.log(boxList[i]);
	}

	console.log(cnt);
	$('.sum').html(cnt);
});