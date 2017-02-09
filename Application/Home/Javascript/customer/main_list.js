/**
 * Created by hisihi on 2016/8/15.
 */

$(document).ready(function () {


    //得到最近收听类别
    $.get(window.fmUrlObject.baseUrlApi + 'getRecentlyMzInfo', null, function (result) {
        if (result.status == 'success') {
            showRecentList(result);
            scrollUnique();
        }
    });


    //得到推荐试试类别
    $.get(window.fmUrlObject.baseUrlApi + 'getTryThatMzInfo', null, function (result) {
        if (result.status == 'success') {
            showTryList(result);
        }
    });

    //得到播放器正在播放的歌曲
    $.get(window.fmUrlObject.baseUrlApi + 'getCurrentSongInfo' , null , function (result) {
        if (result.status =='success') {
            fmPlayer(result);
        }
    });


    //设置循环数组展示所有推荐list数据
    function showRecentList(result) {
        var str = '',
            strList = '',
            len;
        len = result.data.length;
        for(var i=0;i<len;i++){
            var item = result.data[i];
            strList += '<li><span>'+ item +'</span></li>';
        }
        str =  '<div class="chanel">'+
            '<h3>最近收听<span class="line"></span></h3>'+
            '<ul class="chanel-list">'+
            strList+
            '</ul>'+
            '</div>';
        $(".main-list").append(str);
    };


    //设置循环数组展示所有推荐list数据
    function showTryList(result) {
        var str = '',
            strList = '',
            len = result.data.length;
        for (var i = 0; i < len; i++) {
            var item = result.data[i];
            strList += '<li><span>'+ item +'</span></li>';
        }
        str = '<div class="chanel">'+
                '<h3>试试这些<span class="line"></span></h3>'+
                '<ul class="chanel-list">'+
                 strList+
                '</ul>'+
                '</div>';
        $(".main-list").append(str);
    };


    //主页mainList滚动
    function scrollUnique() {
        return $(this).each(function() {
            var eventType = 'mousewheel';
            $(this).on(eventType, function(event) {
                // 一些数据
                var scrollTop = this.scrollTop,
                    scrollHeight = this.scrollHeight,
                    height = this.clientHeight;

                var delta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : -(event.originalEvent.detail || 0);

                if ((delta > 0 && scrollTop <= delta) || (delta < 0 && scrollHeight - height - scrollTop <= -1 * delta)) {
                    // IE浏览器下滚动会跨越边界直接影响父级滚动，因此，临界时候手动边界滚动定位
                    this.scrollTop = delta > 0? 0: scrollHeight;
                    // 向上滚 || 向下滚
                    event.preventDefault();
                }
            });
        });
    };


    //填充播放器样式
    function  fmPlayer(result) {
        return
    };


});