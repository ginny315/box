define(['FFF','zepto','box'],function(FFF,$,){
   
var F = FFF.FFF;
    var Widget = F.Widget;
    function Box(){
    	Widget.apply(this,arguments);
    }

    //增加Box的类属性
    Box.ATTRS = {
    	boundingBox:{
    		value:$('<div class="box"></div>'),
    	},
    	width:{
        	value:100,
        	//changeFn:function(obj){
            	//console.log("我之前的宽度是:"+obj.preValue);
            	//console.log("我现在的宽度是:"+obj.value);
        	//}
    	},
    	height:{
    		value:80
    	},
    	margin:{
    		value:20
    	},
    	select:{
    		value:/*{
    			'content':'yes',
    			'display':'block',
    			'width':'10',
    			'height':'10',
    			'left':'10',
    			'background-color':'#fff'
    		},*/'yes',
    		changeFn:function(obj){//通过点击后属性的改变而改变
    			console.log("I am selected"+obj);
    		}
    	},
    	display:{
    		value:'inline-block'
    	},

    	red:{
    		value:'red'
    	},
    	yellow:{
    		value:'yellow'
    	}
    }

    //Box继承自Widget
    F.extend(Box,Widget,{
    	//初始化
    	initialize:function(){
    		//this.setWidth(50);
    	},
    	//渲染
    	renderUI:function(){
    		var that = this;
    		this.getBoundingBox().css({
    			'background':'#000',
    			'width':that.getWidth(),
    			'height':that.getHeight(),
    			'margin':that.getMargin(),
    			'display':that.getDisplay(),
    			'color':'#fff'
    		});

    		//this.getBoundingBox().html('box');   
    		this.getBoundingBox().html(that.getSelect());
    		this.getBoundingBox().after('<div style="display:inline-block;width:40px;height:20px;background-color:red;color:#fff;text-align:center">'+(that.getRed())+'</div>');	
    	},

    			//改写父类render方法
		render:function(obj){
			this.callParent(obj);
		},
		//绑定事件//改变后重新渲染事件？？？
		bindUI:function(){
			var that = this;
    		/*this.getBoundingBox().on('click',that.getChangeFn(this) );*/
    		this.getBoundingBox().on('click', function(obj) {
            	console.log("123");
            	that.setSelect('no');
            	console.log(that.getSelect());
            //this.render();            
            });
		},
		//同步事件
		syncUI:function(){

		},
		//销毁对象(未实现)
		destructor:function(obj){
			this.destory(obj);
			console.log("I am destory!");
		},
 	
    })


     return {
                Box: Box
            };


});