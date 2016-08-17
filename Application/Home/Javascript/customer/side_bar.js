/**
 * Created by hisihi on 2016/8/15.
 */
/// <reference path="../libs/jquery-1.7.1.min.js" />
function createLeftContent() {
    getAllImgsInfo();

    //��߶�������
    var strContent_top = "<div id='leftContent_top'>" +
        "<div class='leftContent_logo'>ȫ���׺�</div>" +
        "<div class='leftContent_search'>" +
        "<span>" +
        "<input type='text'  class='searchCotent' value='�����׺�'/>" +
        "</span>" +
        "<span>" +
        "<input title='����' type='button'  class='searchBtn'/>" +
        "</span>" +
        "</div>" +
        "</div>";

    //���ͼƬ������������
    var strContent_scrollPic = "<div class='picScroll'>" +
        createScrollImg() +
        "</div>";

    //banner�ֲ�ͼ
    $(document).ready(function () {
        $(".banner-left").live("click", function () {
            var targetImg=$(this)
        });
    });

    //���ű�ǩ����
    var strContent_hotBiaoqian = "<div class='hotBiaoqian'>" +
        createBiaoqian("�����׺�", mhzArr) +
        "</div>";

    //�������
    var strContent_upFastBiaoqian = "<div class='upFastBiaoqian'>" +
        createBiaoqian("�������", mhzArr) +
        "</div>";

    //Ʒ�Ʊ�ǩ
    var strContent_pinpaiBiaoqian = "<div class='pinpaiBiaoqian'>" +
        createBiaoqian("Ʒ���׺�", mhzArr) +
        "</div>";

    //�ܵ�����
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


//ͼƬ����
function createScrollImg() {
    var str_img = "";
    str_img += getScrollImg(imgArr[0].imgName);   //��һ��ͼƬ
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
/*ͼƬ����*/
function getScrollImg(imageName) {
    var str_img = "<li>" +
        "<div class='imgDiv' style='background:url(./images/slide/" + imageName + ")'></div>" +
        "</li>";
    return str_img;
}

/*����mhz���� ,��Index����*/
function getScrollContent(index) {
    var str_content = "<div class='contentTitle'>" +
        "<span>" + imgArr[index].contentTitle + "</span>" +
        "<span id='" + imgArr[index].Id + "' class='hearThis' style='height:21px; margin-left:5px;cursor:pointer;; width:21px;background:url(./images/slide/10.png) 0 0 no-repeat;'></span>" +
        "</div>" +
        "<div style=' font-size:12px;color:#636564;'>" + imgArr[index].contentMain + "</div>" +
        "<div style=' font-size:12px; color:#888888;'>" +
        "<label>���Ÿ�����</label>" +
        "<a href='javascript:void'>" + imgArr[index].hotSong_1 + "/</a>" +
        "<a href='javascript:void'>" + imgArr[index].hotSong_2 + "/</a>" +
        "<a href='javascript:void'>" + imgArr[index].hotSong_3 + "</a>" +
        "</div>" +
        "<div>" + imgArr[index].songCounts + "�׸���<a  href='javascript:void' >�׺�����</a></div>";
    return str_content;
}

/*ҳ��*/
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

/*�ֲ�ͼ*/
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

//�����ֲ�ͼ


function createBiaoqian(biaoqianType, arrMHz) {
    var moreView = "";
    if (biaoqianType != "Ʒ���׺�") {
        moreView = "<a href='javascript:void' id='more_" + biaoqianType + "'>&nbsp;&nbsp;����</a>";
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
    if ($(this).val() == "�����׺�") {
        $(this).val("");
    }
});
$(".searchCotent").live("focusout", function () {
    if ($(this).val() == "") {
        $(this).val("�����׺�");
    }
});