define('Box',['FFF'], function(FFF) {
            var F = FFF.FFF,
                Widget = F.Widget;

            function Box() {
                Widget.apply(this, arguments);
            }

            F.extend(Box, Widget);

            return {
                Box: Box
            };
        });
require(['box'], function(Box) {
        var Box  =  Box.Box;
        var box = new Box();
        //box绑定自定义的fireHouse事件
        box.on('fireHouse', function(obj) {
            console.log('自定义事件绑定测试：'+obj.target)
        });
        //手动触发自定义的fireHouse事件
        //传递给事件处理程序的额外参数target。
        box.trigger('fireHouse',{
            target:'我是box'
        });
    });