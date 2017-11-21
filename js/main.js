/**
 * Created by Baby�� on 2017/11/1.
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
            //����ֻ����һ�Σ�����Ҫ��װ����resize������
        });
        //console.log(1)



    }
    $(window).on("resize", resize).trigger("resize");

        // ��ʼ��tooltips���
        $('[data-toggle="tooltip"]').tooltip();


    //��ȡȫ��Ԫ�صĿ�Ⱥ�
    var ul = $(".nav-tabs");
    //���ó�ʼ��ȣ���Ϊԭ����ul����padding��� �����ͻ������
    var wid = 40;
    //��ȡul��ȫ��li�����ұ������ǵõ����յ��ܺͿ��
    $(ul.children()).each(function (i, e) {
        //console.log( e.clientWidth);
        wid += e.clientWidth;
    });
    // �жϵ�ǰUL�Ŀ���Ƿ񳬳���Ļ�������������ʾ���������
    if (wid > $(window).width()) {
        $(ul).css("width", wid);
        $(ul).parent().css("overflow-x", "scroll");
    }


    //��ȡa��ǩ
    //��a��ӵ���¼�
    //��DOM����ת��Ϊjquery����
    //��ȡdata����ֵ
    //�ѻ�õ��������õ���������
    var newsTitle = $(".allnews");
    $("#recommend .nav-pills a").on("click",function(){
        var $this = $(this);
        var title = $this.data("title");
        newsTitle.text(title);
    });


    // 1. ��ȡ��ָ���ֲ�ͼԪ���ϵ�һ�������������ң�

    //��ȡ�ֲ�ͼ����
    var carouselContainer = $(".carousel");

    //���ó�ʼ������ֵ
    var offset = 50;
    var startX,endX;

    //������ע���¼����õ���ʼֵ�ͽ���ֵ
    carouselContainer.on("touchstart",function(e){
        //console.log(e.originalEvent.touches[0].clientX);
        startX = e.originalEvent.touches[0].clientX;
    });
    carouselContainer.on("touchmove",function(e){
        //console.log(e);
        endX = e.originalEvent.touches[0].clientX;

    });

    //ע�ᴥ���¼�
    carouselContainer.on("touchend",function(e){

        // �õ���ʼ�ͽ����ľ������ֵ �ٺ�offset�Ƚϣ��������ֵ������Ϊ���з���仯�ġ�
        var distance = Math.abs(startX - endX);

        if(distance > offset){
            if(startX > endX ){
                $(this).carousel('next')
            }else{
                $(this).carousel('prev');
            }

        }
    });





         // console.log(startX > endX ? '��' : '��');
    // 2. ���ݻ�õ��ķ���ѡ����һ�Ż�����һ��





});
