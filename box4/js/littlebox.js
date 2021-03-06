define(['FFF','zepto','box'], function(FFF,$,Box) {
            var F = FFF.FFF,
            Box = Box.Box;
            Widget = F.Widget;
            
            function LittleBox() {
                //Box.apply(this, arguments);
                Widget.apply(this, arguments);
            }

            LittleBox.ATTRS = {
                boundingBox:{
                value:$('<div></div>'),
                },
                /*0represent'#293047',1represent'yellow',2represent'red'*/
                color:{
                    value:0,
                    changeFn:function(obj){
                        var that = this;
                        var MyBox = that.getBoundingBox();
                        if(obj.value == 1){
                            MyBox.find('.box').css({
                                    'background':'yellow'
                            });
                        }else if(obj.value == 2){
                            MyBox.find('.box').css({
                                    'background':'red'
                            });
                        }
                    }
                },
                /*0represent'-',1represent'√'*/
                selected:{
                    value:0,
                    changeFn:function(obj){//通过点击后属性的改变而改变                
                        var that = this;
                        var MyBox = that.getBoundingBox();
                        obj.value == 0?MyBox.find('.box').html('-'):MyBox.find('.box').html('√');
                    }
                },
            }

            //F.extend(LittleBox, Box,{
            F.extend(LittleBox, Widget,{
                //初始化
                initialize:function(){
                    //var $sum = $('.sum');
                    //$sum.html(+$sum.html()+1);
/*                    console.log(this);
                    var that = this;
                    //console.log(Box);
                    console.log(Box.ATTRS);
                    console.log(Box.ATTRS.boxCount.value);
                    var MyBoxCount = Box.ATTRS.boxCount.value;
                    var MyBoxCount = Box.getBoxCount();
                    var $sum = $('.sum');
                    //$sum.html(+$sum.html()+1);
                    console.log("MyBoxCount="+MyBoxCount);
                    var a = MyBoxCount+1;
                    Box.ATTRS.setBoxCount(a);
                    $sum.html(a);*/
                },
                //渲染
                renderUI:function(){
                    var that = this;
                    var MyBox = that.getBoundingBox();                    
                    
                    MyBox.html('<div class="box"></div>'+
                    '<div class="close">X</div>'+
                    '<div class="chooseyellow">yellow</div>'+
                    '<div class="choosered">red</div>');
                     MyBox.find('.box').html('-');                   
                },//renderUI
                    
                    //绑定事件
                    bindUI:function(){
                        var that = this;
                        var MyBox = that.getBoundingBox();
                        //var MyBoxCount = that.getBoxCount();
                        /*MyBox.find('.box').on('mouseover',function(){
                            MyBox.find('.close').css({
                                'opacity':'1'
                            });
                        });*/

                        MyBox.find('.box').on('click', function(obj) {
                            that.getSelected() == 0?that.setSelected(1):that.setSelected(0);
                        });

                        MyBox.find('.choosered').on('click',function(obj){
                            if(that.getColor() != 2){
                                that.setColor(2);
                            };
                        })

                        MyBox.find('.chooseyellow').on('click',function(obj){
                            if(that.getColor() != 1){
                                that.setColor(1);
                            };
                        }) 

                        MyBox.find('.close').on('click',function(){
                            MyBox.remove();
                            var $sum = $('.sum');
                            $sum.html(+$sum.html()-1);
                            //MyBoxCount --;
                            //$sum.html(MyBoxCount);
                        })                       
                    },
                    destructor:function(){ 
                        /*var that = this;
                        var MyBoxCount = that.getBoxCount();
                        var $sum = $('.sum');
                        $sum.html(+$sum.html()-1);*/
                        //console.log("MyBoxCount="+MyBoxCount);
                        //that.setBoxCount(--MyBoxCount);
                        //$sum.html(MyBoxCount);
                    }

                });

            return {
                LittleBox: LittleBox
            };
        });