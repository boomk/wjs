/**
 * Created by Baby曈 on 2017/11/1.
 */

$(function(){
    function resize() {
        var windowWidth = $(window).width();
        var smallScreen = windowWidth < 768;

        $("#main_ad > .carousel-inner > .item").each(function (i, item) {
            var $item = $(item);
            var imageSrc = smallScreen ? $item.data("img-xs") : $item.data("img-lg");
            $item.css("backgroundImage", "url('" + imageSrc + "')");

            if (smallScreen) {
                $item.html("<img src='" + imageSrc + "'/>");
            } else {
                $item.empty();
            }
            //这里只触发一次，所以要包装在热resize函数里
        });
        //console.log(1)



    }
    $(window).on("resize", resize).trigger("resize");

        // 初始化tooltips插件
        $('[data-toggle="tooltip"]').tooltip();


    //获取全部元素的宽度和
    var ul = $(".nav-tabs");
    //设置初始宽度，因为原本的ul就有padding宽度 不够就会掉下来
    var wid = 40;
    //获取ul的全部li，并且遍历他们得到最终的总和宽度
    $(ul.children()).each(function (i, e) {
        //console.log( e.clientWidth);
        wid += e.clientWidth;
    });
    // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
    if (wid > $(window).width()) {
        $(ul).css("width", wid);
        $(ul).parent().css("overflow-x", "scroll");
    }


    //获取a标签
    //给a添加点击事件
    //讲DOM对象转化为jquery对象
    //获取data属性值
    //把获得的属性设置到标题内容
    var newsTitle = $(".allnews");
    $("#recommend .nav-pills a").on("click",function(){
        var $this = $(this);
        var title = $this.data("title");
        newsTitle.text(title);
    });


    // 1. 获取手指在轮播图元素上的一个滑动方向（左右）

    //获取轮播图容器
    var carouselContainer = $(".carousel");

    //设置初始滑动差值
    var offset = 50;
    var startX,endX;

    //给容器注册事件，得到开始值和结束值
    carouselContainer.on("touchstart",function(e){
        //console.log(e.originalEvent.touches[0].clientX);
        startX = e.originalEvent.touches[0].clientX;
    });
    carouselContainer.on("touchmove",function(e){
        //console.log(e);
        endX = e.originalEvent.touches[0].clientX;

    });

    //注册触碰事件
    carouselContainer.on("touchend",function(e){

        // 得到开始和结束的距离绝对值 再和offset比较，大于这个值，则认为是有方向变化的。
        var distance = Math.abs(startX - endX);

        if(distance > offset){
            if(startX > endX ){
                $(this).carousel('next')
            }else{
                $(this).carousel('prev');
            }

        }
    });





         // console.log(startX > endX ? '←' : '→');
    // 2. 根据获得到的方向选择上一张或者下一张





});
