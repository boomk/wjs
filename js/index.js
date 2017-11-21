/**
 * Created by Baby�� on 2017/11/6.
 */
/**
 * Created by Baby�� on 2017/11/1.
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
            //����ֻ����һ�Σ�����Ҫ��װ����resize������
        });
        console.log(1)
    }
    $(window).on("resize",resize).trigger("resize");

    // ��ʼ��tooltips���
    $('[data-toggle="tooltip"]').tooltip();



    //��ȡȫ��Ԫ�صĿ�Ⱥ�
    var ul = $(".nav-tabs");
    //���ó�ʼ��ȣ���Ϊԭ����ul����padding��� �����ͻ������
    var wid = 40;
    //��ȡul��ȫ��li�����ұ������ǵõ����յ��ܺͿ��
    $(ul.children()).each(function(i,e){
        console.log( e.clientWidth);
        wid += e.clientWidth;
    });
    // �жϵ�ǰUL�Ŀ���Ƿ񳬳���Ļ�������������ʾ���������
    if( wid > $(window).width())  {
        $(ul).css("width",wid);
        $(ul) .parent().css("overflow-x","scroll");
    }



});
