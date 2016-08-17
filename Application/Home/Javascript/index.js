/**
 * Created by hisihi on 2016/8/10.
 */
$(function(){

    var para={
        name:'hisihi',
        pwd:'123456',
        code:'W4r0'
    };

    //获取banner数字，改变导航样式
    function setBannerNav(result){
        var banner_num='';
        var len1=result.data.length;
        for (var i=0 ; i < len1; i++) {
            var num=i+1;
            if(num==1){
                banner_num += '<li class="on">' + num + '</li>';
            }else {
                banner_num += '<li>' + num + '</li>';
            }
        }
        $('.banner-num').html(banner_num);
    }

    //获得登陆信息
    $.post(window.fmUrlObject.baseUrlApi+'login',para,function(result){
        //alert(result);
    });

    //获得右侧滚动banner
    $.get(window.fmUrlObject.baseUrlApi+'getBannerInfo',null,function(result){
        if(result.status=='success') {
            getArr(result);
            setBannerNav(result);
            var index=0;
            getChangeBanner(index);
        }
    });

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
        if(result.status=='success') {
            if(result.status=='success') {
                getAllMHz(result);
                creatHotLi(result);
            }
        }

        //创建li内容
        function creatHotLi(result) {
            $('#banner-img').attr('src',bannerArr[index].imgName);
            $('.banner-li a').text(bannerArr[index].contentTitle);
            $('#text1').text(bannerArr[index].contentMain);
            $('#text2').text(bannerArr[index].hotSong_1+','+bannerArr[index].hotSong_2+','+bannerArr[index].hotSong_3);
            var str_li = "";
            var tempStr = "";
            var endIndex = arrMHz.length;
            if (tipType == "品牌兆赫") {
                endIndex = 4;
            }
            if (tipType == "上升最快") {
                endIndex = 7;
            }
            for (var i = 0; i < endIndex; i++) {
                tempStr = '<li id="+ arrMHz[i].musicTypeId +" class="li">' +
                '<div id="img_' + arrMHz[i].musicTypeId + '" class="hot_img" style="background:url(./images/slide/" + arrMHz[i].imgName)"' +
                '</div>' +
                '<div id="note_' + arrMHz[i].musicTypeId + '" class="hot_note">' +
                    '<div class="hot_noteTitle">'
                    + arrMHz[i].musicTypeName +
                    '</div>'+
                '<div class="hot_noteExplation">'+
                "<label>" + arrMHz[i].songCounts + "首歌曲</label>" +
                "<a id='a_" + arrMHz[i].musicTypeId + "' href='javascript:void' class='viewMoreSong'>兆赫详情</a>" +
                "</div>" +
                "</div>" +
                "</li>";
                str_li += tempStr;
            }
            return str_li;
        }

        //兆赫hover

        //MHz hover

        //产生菜单容器和内容

        //离开MHz

    });


    //打开FM和关闭FM
    var leftShow = false;
    var firstLoad = true;
    //var firstLoad_share= true;
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
                        firstLoad = false;
                    }
                    leftShow = true;
                    $("#side-bar-ctrl").attr("title", "关闭");
                    $("#side-bar-ctrl").removeClass(".sideOpen").addClass(".sideClose");
                });
            }
        });

    var bannerArr = [];  //定义一个滚动Img数组 全局变量
    var mhzArr = [];  //定义一个所有mhz数组 全局变量

    //数据放入变量中，方便使用
    function getArr (result) {
         var len = result.data.length;
         for (var i=0; i<len;i++) {
             bannerArr.push(result.data[i]);
         }
     }

    //热门兆赫,获得MHz数据
    function getAllMHz (result){
        var len = result.data.length;
        for (var i=0;1<len;i++) {
            mhzArr.push(result.data[i]);
        }
    }

    //图片的切换
    $(document).on('mouseover',".banner-num li",function () {
        //改变导航颜色
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        //改变图片
        var index=$(this).index();
        getChangeBanner(index);
    });

    //获得banner图片文字信息
    function getChangeBanner (index){
        $('#banner-img').attr('src',bannerArr[index].imgName);
        $('.banner-li a').text(bannerArr[index].contentTitle);
        $('#text1').text(bannerArr[index].contentMain);
        $('#text2').text(bannerArr[index].hotSong_1+','+bannerArr[index].hotSong_2+','+bannerArr[index].hotSong_3);
    }


    /*搜索Mhz*/
    $(".search-inner").live("click", function () {
        if ($(this).val() == "搜索兆赫") {
            $(this).val("");
        }
    });
    $(".search-inner").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("搜索兆赫");
        }
    });
});

