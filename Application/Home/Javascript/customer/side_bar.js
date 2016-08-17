/**
 * Created by hisihi on 2016/8/15.
 */
/// <reference path="../libs/jquery-1.7.1.min.js" />
function createLeftContent() {
    getAllImgsInfo();

    //左边顶部内容
    var strContent_top = "<div id='leftContent_top'>" +
        "<div class='leftContent_logo'>全部兆赫</div>" +
        "<div class='leftContent_search'>" +
        "<span>" +
        "<input type='text'  class='searchCotent' value='搜索兆赫'/>" +
        "</span>" +
        "<span>" +
        "<input title='搜索' type='button'  class='searchBtn'/>" +
        "</span>" +
        "</div>" +
        "</div>";

    //左边图片滚动区域内容
    var strContent_scrollPic = "<div class='picScroll'>" +
        createScrollImg() +
        "</div>";

    //banner轮播图
    $(document).ready(function () {
        $(".banner-left").live("click", function () {
            var targetImg=$(this)
        });
    });

    //热门标签内容
    var strContent_hotBiaoqian = "<div class='hotBiaoqian'>" +
        createBiaoqian("热门兆赫", mhzArr) +
        "</div>";

    //上升最快
    var strContent_upFastBiaoqian = "<div class='upFastBiaoqian'>" +
        createBiaoqian("上升最快", mhzArr) +
        "</div>";

    //品牌标签
    var strContent_pinpaiBiaoqian = "<div class='pinpaiBiaoqian'>" +
        createBiaoqian("品牌兆赫", mhzArr) +
        "</div>";

    //总的内容
    var content = "<div class='leftContent'>" +
        strContent_top +
        strContent_scrollPic +
        strContent_musicType +
        strContent_hotBiaoqian +
        strContent_upFastBiaoqian +
        strContent_pinpaiBiaoqian +
        "</div>";
    $(".slide").append(content);
}


var imgArr = [];
var mhzArr = [];


//图片滚动
function createScrollImg() {
    var str_img = "";
    str_img += getScrollImg(imgArr[0].imgName);   //第一张图片
    var str_content = getScrollContent(0);
    var str_scrollImg = "<div id='picContainer'>" +
        "<ul>" +
        str_img +
        "</ul>" +
        "</div>" +
        "<div id='picList'>" +
        "<div id='picPageNum'>" +
        getPage(imgArr.length) +
        "</div>" +
        "<div id='mheDetail'>" +
        str_content +
        "</div>" +
        "</div>";
    return str_scrollImg;
}
/*图片内容*/
function getScrollImg(imageName) {
    var str_img = "<li>" +
        "<div class='imgDiv' style='background:url(./images/slide/" + imageName + ")'></div>" +
        "</li>";
    return str_img;
}

/*各种mhz内容 ,将Index传入*/
function getScrollContent(index) {
    var str_content = "<div class='contentTitle'>" +
        "<span>" + imgArr[index].contentTitle + "</span>" +
        "<span id='" + imgArr[index].Id + "' class='hearThis' style='height:21px; margin-left:5px;cursor:pointer;; width:21px;background:url(./images/slide/10.png) 0 0 no-repeat;'></span>" +
        "</div>" +
        "<div style=' font-size:12px;color:#636564;'>" + imgArr[index].contentMain + "</div>" +
        "<div style=' font-size:12px; color:#888888;'>" +
        "<label>热门歌曲：</label>" +
        "<a href='javascript:void'>" + imgArr[index].hotSong_1 + "/</a>" +
        "<a href='javascript:void'>" + imgArr[index].hotSong_2 + "/</a>" +
        "<a href='javascript:void'>" + imgArr[index].hotSong_3 + "</a>" +
        "</div>" +
        "<div>" + imgArr[index].songCounts + "首歌曲<a  href='javascript:void' >兆赫详情</a></div>";
    return str_content;
}

/*页码*/
function getPage(pageCount) {
    var str_page = "<ul>";
    var pageClass = "";
    for (var i = 0; i < pageCount; i++) {
        str_page += "<li>";
        if (i == 0) {
            pageClass = "selectedPage";
        }
        else {
            pageClass = "unSelectedPage";
        }
        str_page += "<div title='" + parseInt(i + 1) + "' class='imgPage " + pageClass + "'>" + parseInt(i + 1) + "</div>";
        str_page += "</li>";
    }
    str_page += "</ul>";
    str_page += "</ul>";
    return str_page;
}

var lastNum = -1;

/*轮播图*/
$(".banner-left").live("mouseover", function () {
    var imgIndex = parseInt($(this).html() - 1);
    if (imgIndex != lastNum) {
        var that = this;
        imgChange(imgIndex, that);
        lastNum = imgIndex;
    }
});
$(".banner-left").live("mouseleave", function () {
    return;
});

//设置轮播图


function createBiaoqian(biaoqianType, arrMHz) {
    var moreView = "";
    if (biaoqianType != "品牌兆赫") {
        moreView = "<a href='javascript:void' id='more_" + biaoqianType + "'>&nbsp;&nbsp;更多</a>";
    }
    var str_hotBiao = "<div class='hotTitle'>" +
        "<label>" + biaoqianType + "</label>" + moreView +
        "</div>" +
        "<div class='hotContainer'>" +
        "<ul>" + creatHotLi(arrMHz, biaoqianType) + "</ul>" +
        "</div>";
    return str_hotBiao;
}

/*
FM-hover
 */
$("li").live("mouseleave", function () {
    leveaMHz(this);
});

function leveaMHz(obj) {
    var imgObj = $(obj).find("img");
    var imgId = $(obj).attr("id");
    $(imgObj).css("background", "url(./images/slide/" + imgId + ".png)");
    $("style").remove();
}


function getObjFromArr(id, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].musicTypeId == id) {
            return arr[i];
        }
    }
}

$(".searchCotent").live("click", function () {
    if ($(this).val() == "搜索兆赫") {
        $(this).val("");
    }
});
$(".searchCotent").live("focusout", function () {
    if ($(this).val() == "") {
        $(this).val("搜索兆赫");
    }
});