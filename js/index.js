/**
 * Created by Baby曈 on 2017/11/6.
 */
/**
 * Created by Baby曈 on 2017/11/1.
 */

$(function(){
    function resize(){
        var windowWidth = $(window).width();
        var smallScreen = windowWidth < 768;

        $("#main_ad > .carousel-inner > .item").each( function (i ,item){
            var $item = $(item);
            var imageSrc = smallScreen ? $item.data("img-xs") : $item.data("img-lg");
            $item.css("backgroundImage","url('"+imageSrc+"')");

            if(smallScreen){
                $item.html("<img src='"+imageSrc+"'/>");
            }else{
                $item.empty();
            }
            //这里只触发一次，所以要包装在热resize函数里
        });
        console.log(1)
    }
    $(window).on("resize",resize).trigger("resize");

    // 初始化tooltips插件
    $('[data-toggle="tooltip"]').tooltip();



    //获取全部元素的宽度和
    var ul = $(".nav-tabs");
    //设置初始宽度，因为原本的ul就有padding宽度 不够就会掉下来
    var wid = 40;
    //获取ul的全部li，并且遍历他们得到最终的总和宽度
    $(ul.children()).each(function(i,e){
        console.log( e.clientWidth);
        wid += e.clientWidth;
    });
    // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
    if( wid > $(window).width())  {
        $(ul).css("width",wid);
        $(ul) .parent().css("overflow-x","scroll");
    }



});
