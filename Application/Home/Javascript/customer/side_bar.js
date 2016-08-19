/**
 * Created by hisihi on 2016/8/15.
 */
$(function() {

    var para = {
        name: 'hisihi',
        pwd: '123456',
        code: 'W4r0'
    };

    //获取banner数字，改变导航样式
    function setBannerNav(result) {
        var banner_num = '';
        var len1 = result.data.length;
        for (var i = 0; i < len1; i++) {
            var num = i + 1;
            if (num == 1) {
                banner_num += '<li class="on">' + num + '</li>';
            } else {
                banner_num += '<li>' + num + '</li>';
            }
        }
        $('.banner-num').html(banner_num);
    }

    //获得右侧滚动banner
    $.get(window.fmUrlObject.baseUrlApi + 'getBannerInfo', null, function (result) {
        if (result.status == 'success') {
            getArr(result);
            setBannerNav(result);
            var index = 0;
            getChangeBanner(index);
        }
    });

    //banner自动切换
    //function autoPlay() {
    //    var n=n>=(bannerArr[index].length-1):?0,n+1;
    //    $(".banner-left img").eq(n).trigger('mouseenter');
    //}

    //获得音乐类别
    $.get(window.fmUrlObject.baseUrlApi + 'getMusicTypeInfo', null, function (result) {
        if (result.status == 'success') {
            var str_li = '';
            var len = result.data.length;
            for (var i = 0; i < len; i++) {
                str_li += '<li><a href="">' + result.data[i] + '</a></li>';
            }
        }
        $('.taglist-fm').html(str_li);
    });

    //获得热门兆赫
    $.get(window.fmUrlObject.baseUrlApi + 'getHotMz', null, function (result) {
        if(result.status=='success') {
            hotMHzLi(result);
            getAllMHz(result);
            showMHz();
        }
    });

    //获得上升兆赫
    $.get(window.fmUrlObject.baseUrlApi + 'getRaiseUpMz', null, function (result) {
        if(result.status=='success') {
            getAllMHz(result);
            upMHzLi(result);
            showMHz();
        }
    });

    //获得品牌兆赫
    $.get(window.fmUrlObject.baseUrlApi + 'getBrandMz', null, function (result) {
        if(result.status=='success') {
            getAllMHz(result);
            brandMHzLi(result);
            showMHz();
        }
    });

    //hover展示效果(jquery选择器）
    function showMHz() {
        $(document).on('mouseover','.song-list',function(e){
            var $target=$(e.currentTarget);
            $target.find('.cover-img').show();
            $target.find('.fm-hover').show();
        });
        $(document).on('mouseout','.song-list',function(e){
            var $target=$(e.currentTarget);
            $target.find('.cover-img').hide();
            $target.find('.fm-hover').hide();
        });
    }

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
            $(".side-bar").animate({left: "-648px"}, 600);
            $(".side-fm").animate({left: "-674px"}, 600, function () {
                leftShow = false;
                $("#slideTarget").attr("title", "展开");
                $("#slideTarget").removeClass("slideClose").addClass("slideOpen");
            });
        }
        else {
            $(".side-bar").animate({left: "0"}, 600);
            $(".side-fm").animate({left: "0"}, 600, function () {
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
    function getArr(result) {
        var len = result.data.length;
        for (var i = 0; i < len; i++) {
            bannerArr.push(result.data[i]);
        }
    }

    //获得热门兆赫信息。获得MHz数据
    function getAllMHz(result) {
        var len = result.data.length;
        for (var i = 0; i < len; i++) {
            mhzArr.push(result.data[i]);
        }
    }

    //设置循环数组，展示全部热门兆赫数据
    function hotMHzLi(result){
        var mhz_li = '';
        var len = result.data.length;
        for (var i = 0; i < len; i++) {
            var url=result.data[i].imgName;
            mhz_li += '<li class="song-list">'+
                '<div class="song-left">'+
                    '<div class="cover-img">'+
                    '</div>'+
                    '<img class="song-img" src="'+url+'">'+
                '</div>'+
                '<div class="song-right">'+
                    '<div class="song-section">' +
                        result.data[i].musicTypeName+
                    '</div>'+
                    '<div class="song-detail">'+
                        '<label>'+
                            result.data[i].songCounts+
                        '</label>'+
                        '<label>首歌曲</label>'+
                        '<a class="more-song">'+
                            '兆赫详情'+
                        '</a>'+
                    '</div>'+
                '</div>'+
                //fm hover
                '<div class="fm-hover">'+
                '<p>'+
                '<span>简介：</span>'+
                '<span>'+
                result.data[i].contentMain+
                '</span>'+
                '</p>'+
                '<p>'+
                '<span>热门歌曲：</span>'+
                '<span>'+
                result.data[i].hotSong_1 + '/' + result.data[i].hotSong_2 + '/' + result.data[i].hotSong_3+
                '</span>'+
                '</p>';
                '</div>';
            '</li>';
        }
        $('#hot-song').html(mhz_li);
    }

    //设置循环数组，展示全部上升兆赫数据
    function upMHzLi(result){
        var mhz_li = '';
        var len = result.data.length;
        for (var i = 0; i < len; i++) {
            var url=result.data[i].imgName;
            mhz_li += '<li class="song-list">'+
                '<div class="song-left">'+
                '<div class="cover-img">'+
                '</div>'+
                '<img class="song-img" src="'+url+'">'+
                '</div>'+
                '<div class="song-right">'+
                '<div class="song-section">' +
                result.data[i].musicTypeName+
                '</div>'+
                '<div class="song-detail">'+
                '<label>'+
                result.data[i].songCounts+
                '</label>'+
                '<label>首歌曲</label>'+
                '<a class="more-song">'+
                '兆赫详情'+
                '</a>'+
                '</div>'+
                '</div>'+
                    //fm hover
                '<div class="fm-hover">'+
                '<p>'+
                '<span>简介：</span>'+
                '<span>'+
                result.data[i].contentMain+
                '</span>'+
                '</p>'+
                '<p>'+
                '<span>热门歌曲：</span>'+
                '<span>'+
                result.data[i].hotSong_1 + '/' + result.data[i].hotSong_2 + '/' + result.data[i].hotSong_3+
                '</span>'+
                '</p>';
            '</div>';
            '</li>';
        }
        $('#up-song').html(mhz_li);
    }

    //设置循环数组，展示全部品牌兆赫数据
    function brandMHzLi(result){
        var mhz_li = '';
        var len = result.data.length;
        for (var i = 0; i < len; i++) {
            var url=result.data[i].imgName;
            mhz_li += '<li class="song-list">'+
                '<div class="song-left">'+
                '<div class="cover-img">'+
                '</div>'+
                '<img class="song-img" src="'+url+'">'+
                '</div>'+
                '<div class="song-right">'+
                '<div class="song-section">' +
                result.data[i].musicTypeName+
                '</div>'+
                '<div class="song-detail">'+
                '<label>'+
                result.data[i].songCounts+
                '</label>'+
                '<label>首歌曲</label>'+
                '<a class="more-song">'+
                '兆赫详情'+
                '</a>'+
                '</div>'+
                '</div>'+
                    //fm hover
                '<div class="fm-hover">'+
                '<p>'+
                '<span>简介：</span>'+
                '<span>'+
                result.data[i].contentMain+
                '</span>'+
                '</p>'+
                '<p>'+
                '<span>热门歌曲：</span>'+
                '<span>'+
                result.data[i].hotSong_1 + '/' + result.data[i].hotSong_2 + '/' + result.data[i].hotSong_3+
                '</span>'+
                '</p>';
            '</div>';
            '</li>';
        }
        $('#brand-song').html(mhz_li);
    }

    //图片的切换
    $(document).on('mouseover', ".banner-num li", function () {
        //改变导航颜色
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        //改变图片
        var index = $(this).index();
        getChangeBanner(index);
    });

    //获得banner图片文字信息
    function getChangeBanner(index) {
        $('#banner-img').attr('src', bannerArr[index].imgName);
        $('.banner-li a').text(bannerArr[index].contentTitle);
        $('#text1').text(bannerArr[index].contentMain);
        $('#text2').text(bannerArr[index].hotSong_1 + ',' + bannerArr[index].hotSong_2 + ',' + bannerArr[index].hotSong_3);
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