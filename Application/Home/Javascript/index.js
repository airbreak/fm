/**
 * Created by hisihi on 2016/8/10.
 */
$(function(){


    var para={
        name:'hisihi',
        pwd:'123456',
        code:'W4r0'
    };

    //$.post(window.fmUrlObject.baseUrlApi+'login',para,function(result){
    //    //alert(result);
    //});

    //获得右侧滚动banner
    //Id  contentMain hot_song1 hot_song2  hot_song3   imgName songCounts
    //$.get(window.fmUrlObject.baseUrlApi+'getBannerInfo',null,function(result){
    //    if(result.status=='success') {
    //        var str_banner='';
    //        var len1= result.data.length;
    //        for (var i = 0; i<len1; i++) {
    //            str_banner+='<div class="banner">' +
    //                '<div class="banner-left"></div>'+
    //                '<div class="banner-right">'+
    //                '<ul class="banner-num">'+
    //                    '<li class="on">1</li>'+
    //                '</ul>'+
    //                '<div class="banner-info">'+
    //                '<h3 class="banner-li"><a href="#">Wonderful Tonight<span>MHz</span></a><span id="icon"></span></h3>'+
    //                '<p class="p1">户外的时候听什么</p>'+
    //                '<p class="p1">热门歌曲：一万次悲伤 / 夜空中最亮的星 / 最初的梦想（Cover 范玮琪）</p>'+
    //                '</div>'+
    //            '</div>'+
    //            '</div>'+
    //           '</div>';
    //        }
    //    }
    //    $('.banner-left').html(str_banner);
    //});



    //获得音乐类别
    $.get(window.fmUrlObject.baseUrlApi+'getMusicTypeInfo',null,function(result){
        if(result.status=='success') {
            var str_li = '';
            var len = result.data.length;
            for (var i = 0; i < len; i++) {
                str_li += '<li><a href="">'+result.data[i]+'</a></li>';
            }
        }
        $('.taglist-fm').html(str_li);
    });

    //获得热门兆赫
    $.get(window.fmUrlObject.baseUrlApi+'getHotMz',null,function(result){

    });


        var leftShow = false;
        var firstLoad = true;
        var firstLoad_share= true;
        var DH = $(document).height();
        $(".side").css("height", DH + "px");
        $(".side-bar").css("height", DH + "px");

        //左侧播放列表
        $("#side-bar-ctrl").click(function () {
            if (leftShow) {
                $(".side-bar").animate({ left: "-648px" }, 600);
                $(".side-fm").animate({ left: "-674px" }, 600, function () {
                    leftShow = false;
                    $("#slideTarget").attr("title", "展开");
                    $("#slideTarget").removeClass("slideClose").addClass("slideOpen");
                });
            }
            else {
                $(".side-bar").animate({ left: "0" }, 600);
                $(".side-fm").animate({ left: "0" }, 600, function () {
                    if (firstLoad) {
                        //createLeftContent();
                        firstLoad = false;
                    }
                    leftShow = true;
                    $("#side-bar-ctrl").attr("title", "关闭");
                    $("#side-bar-ctrl").removeClass(".sideOpen").addClass(".sideClose");
                });
            }
        });

        /*分享*/
        $("#share").hover(function () {
            if (firstLoad_share) {
                var str_shareTarget = '<div class="share-icon">'+
                        '<a href="javascript:void" title="分享到豆瓣">' +
                        '<img src="__IMG__/share_icons.png">'
                $("#share").append(str_shareTarget);
                firstLoad_share = false;
            }
            $("#share").animate({ "left": "880px" }, "fast", function () { });
        }, function () {
            $("#share").animate({ "left": "1065px" }, "fast", function () { });
        });
});

