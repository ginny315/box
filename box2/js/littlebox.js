define(['FFF','zepto','box'], function(FFF,$,Box) {
            var F = FFF.FFF,
            //Widget = F.Widget;
            Box = Box.Box;
            
            function LittleBox() {
                Box.apply(this, arguments);
            }

            LittleBox.ATTRS = {
                boundingBox:{
                value:$('<div><div class="box"></div>'+
                    '<div class="close">X</div>'+
                    '<div class="chooseyellow">yellow</div>'+
                    '<div class="choosered">red</div></div>'),
                },
                color:{
                    value:'#293047',
                    changeColor:function(obj){
                    }
                },
                selected:{
                    value:'-',
                    changeSelect:function(obj){//通过点击后属性的改变而改变                
                        alert("changeSelect");
                    }
                },
            }

            F.extend(LittleBox, Box,{
                //初始化
                initialize:function(){
                //this.setWidth(50);
                //console.log($sum.html());
                var $sum = $('.sum');
                $sum.html(+$sum.html()+1);
                },
                //渲染
                renderUI:function(){
                    var that = this;
                    
                    this.getBoundingBox().css({
                    });
 
                    that.getBoundingBox().find('.box').html(that.getSelected());
                   
                    },//renderUI
                    
                    //绑定事件//改变后重新渲染事件？？？
                    bindUI:function(){
                        var that = this;
                        
                        /*this.getBoundingBox().find('.box').on('mouseover',function(){
                            that.getBoundingBox().find('.close').css({
                                'opacity':'1'
                            });
                        });*/

                        this.getBoundingBox().find('.box').on('click', function(obj) {
                           that.getSelected() == '-'? that.setSelected('√'):that.setSelected('-');
                           that.getBoundingBox().find('.box').html(that.getSelected()); 
                        });

                        this.getBoundingBox().find('.choosered').on('click',function(obj){
                            if(that.getColor() != 'red'){
                                that.setColor('red');
                                that.getBoundingBox().find('.box').css({
                                    'background':'red'
                                });
                            };
                        })

                        this.getBoundingBox().find('.chooseyellow').on('click',function(obj){
                            if(that.getColor() != 'yellow'){
                                that.setColor('yellow');
                                that.getBoundingBox().find('.box').css({
                                    'background':'yellow'
                                });
                            };
                        }) 

                        this.getBoundingBox().find('.close').on('click',function(){
                            that.getBoundingBox().remove();
                            var $sum = $('.sum');
                            $sum.html(+$sum.html()-1);
                        })                       
                    },
                    destructor:function(){ 
                        var $sum = $('.sum');
                        $sum.html(+$sum.html()-1);
                    }

                });

            return {
                LittleBox: LittleBox
            };
        });