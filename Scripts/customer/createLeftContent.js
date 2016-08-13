/// <reference path="../libs/jquery-1.7.1.min.js" />
function createLeftContent() {
    getAllImgsInfo();       //得到 滚动区域图片的内容 和 各种MHz对象

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

    //音乐类型内容                   
    var strContent_musicType = "<div class='musicType'>" +
        "<div class='musicTypeList'>" +
        "<span><a href='javascript:void'>摇滚</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>古典</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>爵士</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>民谣/乡村</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>流行</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>电子</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>原声配乐</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>轻音乐</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>说唱</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>雷鬼</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>拉丁</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>世界音乐</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>布鲁斯</a>&nbsp;&nbsp;|  </span>" +
        "<span><a href='javascript:void'>放克/灵歌/R&B</a><span>" +
        "</div>" +
        "</div>";

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


var imgArr = [];  //定义一个滚动Img数组 全局变量
var mhzArr = [];  //定义一个所有mhz数组 全局变量
var mhzArr1 = [];
var mhzArr2 = [];

//获得图片信息
function getAllImgsInfo() {
    var imgInfoObj0 = {
        "Id": "img0",
        "imgName": "20815.jpg",
        "contentTitle": "想把我唱给你听MHz",
        "contentMain": "没有什么，就是想起你的小心情，不值得提起也不值得歌颂。",
        "hotSong_1": "天黑黑",
        "hotSong_2": "你知道我在等你们分手吗",
        "hotSong_3": "说爱我",
        "songCounts": 279
    };
    var imgInfoObj1 = {
        "Id": "img1",
        "imgName": "23105.jpg",
        "contentTitle": "中国好声音MHz",
        "contentMain": "不值得提起也不值得歌颂。",
        "hotSong_1": "北京北京",
        "hotSong_2": "白天不懂夜的黑",
        "hotSong_3": "爱要坦荡荡",
        "songCounts": 211
    };
    var imgInfoObj2 = {
        "Id": "img2",
        "imgName": "16288.jpg",
        "contentTitle": "MayDay五月天MHz",
        "contentMain": "如果看到彩虹你也想去追，那说明我们是同一类人。",
        "hotSong_1": "后青春期的诗",
        "hotSong_2": "伤心的人别听慢歌",
        "hotSong_3": "你不是真正的快乐",
        "songCounts": 271
    };
    var imgInfoObj3 = {
        "Id": "img3",
        "imgName": "17981.jpg",
        "contentTitle": "香港金曲MHz",
        "contentMain": "beyond,谭校长,陈百强,李克勤...",
        "hotSong_1": "海阔天空",
        "hotSong_2": "讲不出再见",
        "hotSong_3": "一生何求",
        "songCounts": 379
    };
    var imgInfoObj4 = {
        "Id": "img4",
        "imgName": "20801.jpg",
        "contentTitle": "台湾MHz",
        "contentMain": "是想起你的小心情，心中的白鸽。",
        "hotSong_1": "小情歌",
        "hotSong_2": "心墙",
        "hotSong_3": "冬季到台北来看雨",
        "songCounts": 278
    };
    imgArr.push(imgInfoObj0);
    imgArr.push(imgInfoObj1);
    imgArr.push(imgInfoObj2);
    imgArr.push(imgInfoObj3);
    imgArr.push(imgInfoObj4);

    var mhzInfoObj0 = {
        "musicTypeId": "huayu",
        "imgName": "huayu.png",
        "musicTypeName": "华语Mhz",
        "contentMain": "这就是最好的华语歌曲！",
        "hotSong_1": "假如",
        "hotSong_2": "吻别",
        "hotSong_3": "再见",
        "songCounts": 8489
    };
    var mhzInfoObj1 = {
        "musicTypeId": "oumei",
        "imgName": "oumei.png",
        "musicTypeName": "欧美Mhz",
        "contentMain": "关于欧美流行音乐的一切，就在这里了。",
        "hotSong_1": "The show",
        "hotSong_2": "Free Loop",
        "hotSong_3": "Someone Like You",
        "songCounts": 9224
    };
    var mhzInfoObj2 = {
        "musicTypeId": "baling",
        "imgName": "baling.png",
        "musicTypeName": "八零MHz",
        "contentMain": "80重金属，就在这里。",
        "hotSong_1": "后青春期的诗",
        "hotSong_2": "伤心的人别听慢歌",
        "hotSong_3": "你不是真正的快乐",
        "songCounts": 6065
    };
    var mhzInfoObj3 = {
        "musicTypeId": "yueyu",
        "imgName": "yueyu.png",
        "musicTypeName": "粤语MHz",
        "contentMain": "beyond,谭校长,陈百强,李克勤...",
        "hotSong_1": "海阔天空",
        "hotSong_2": "讲不出再见",
        "hotSong_3": "一生何求",
        "songCounts": 8931
    };
    var mhzInfoObj4 = {
        "musicTypeId": "kafei",
        "imgName": "kafei.png",
        "musicTypeName": "咖啡MHz",
        "contentMain": "你会不会突然地出现，在街角的咖啡店。",
        "hotSong_1": "好久不见",
        "hotSong_2": "讲不出再见",
        "hotSong_3": "咖啡吧",
        "songCounts": 8931
    };

    var mhzInfoObj01 = {
        "musicTypeId": "huayu1",
        "imgName": "huayu.png",
        "musicTypeName": "华语Mhz",
        "contentMain": "这就是最好的华语歌曲！",
        "hotSong_1": "假如",
        "hotSong_2": "吻别",
        "hotSong_3": "再见",
        "songCounts": 8489
    };
    var mhzInfoObj11 = {
        "musicTypeId": "oumei1",
        "imgName": "oumei.png",
        "musicTypeName": "欧美Mhz",
        "contentMain": "关于欧美流行音乐的一切，就在这里了。",
        "hotSong_1": "The show",
        "hotSong_2": "Free Loop",
        "hotSong_3": "Someone Like You",
        "songCounts": 9224
    };

    var mhzInfoObj02 = {
        "musicTypeId": "huayu2",
        "imgName": "huayu.png",
        "musicTypeName": "华语Mhz",
        "contentMain": "这就是最好的华语歌曲！",
        "hotSong_1": "假如",
        "hotSong_2": "吻别",
        "hotSong_3": "再见",
        "songCounts": 8489
    };
    var mhzInfoObj12 = {
        "musicTypeId": "oumei2",
        "imgName": "oumei.png",
        "musicTypeName": "欧美Mhz",
        "contentMain": "关于欧美流行音乐的一切，就在这里了。",
        "hotSong_1": "The show",
        "hotSong_2": "Free Loop",
        "hotSong_3": "Someone Like You",
        "songCounts": 9224
    };

    mhzArr.push(mhzInfoObj0);
    mhzArr.push(mhzInfoObj1);
    mhzArr.push(mhzInfoObj2);
    mhzArr.push(mhzInfoObj3);
    mhzArr.push(mhzInfoObj4);
    mhzArr.push(mhzInfoObj0);
    // mhzArr.push(mhzInfoObj1);
    mhzArr.push(mhzInfoObj2);
    //  mhzArr.push(mhzInfoObj3);
    mhzArr.push(mhzInfoObj4);

    mhzArr1.push(mhzInfoObj01);
    mhzArr1.push(mhzInfoObj02);
    mhzArr2.push(mhzInfoObj11);
    mhzArr2.push(mhzInfoObj12);

}


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
    return str_page;
}

//var myTimer = setInterval("imgChange(0)", 1000);  // 定时器
//var currentIndex=0; //当前的图片index
var lastNum = -1;
/*图片的切换*/
$(".imgPage").live("mouseenter", function () {
    var imgIndex = parseInt($(this).html() - 1);
    if (imgIndex != lastNum) {
        var that = this;
        imgChange(imgIndex, that);
        lastNum = imgIndex;
    }
    //    myTimer
    //    $(".imgDiv").hide();
    //    $(".imgDiv").css("background", "url(./images/slide/" + imgArr[imgIndex].imgName + ")");
    //    $(".imgDiv").fadeIn(1200);
    //    $(".imgPage").addClass("unSelectedPage").removeClass("selectedPage");
    //    $(this).addClass("selectedPage").removeClass("unSelectedPage");
    //    $("#mheDetail").html("");
    //    $("#mheDetail").append(getScrollContent(imgIndex));

});
$(".imgPage").live("mouseleave", function () {
    return;

});

//图片的切换
function imgChange(imgIndex, that) {
    $(".imgDiv").hide();
    $(".imgDiv").css("background", "url(./images/slide/" + imgArr[imgIndex].imgName + ")");
    $(".imgDiv").fadeIn(1200);
    $(".imgPage").addClass("unSelectedPage").removeClass("selectedPage");
    $(that).addClass("selectedPage").removeClass("unSelectedPage");
    $("#mheDetail").html("");
    $("#mheDetail").hide().append(getScrollContent(imgIndex)).fadeIn(1200);
//    $("#mheDetail").fadeIn(1200);
}

//自动切换函数
function autoPlay() {
    //n=n>=(imgArr.length-1):?0,n+1;
    $(".imgPage").eq(n).trigger('mouseenter');
}

/*根据传入的标签 创建标签内容
 *biaoqianType：标签名称
 *arrMHz:标签数组对象
 */
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


//创建li内容
function creatHotLi(arrMHz, biaoqianType) {
    var str_li = "";
    var tempStr = "";
    //var endIndex = arrMHz.length;
    var endIndex = arrMHz.length;
    if (biaoqianType == "品牌兆赫") {
        endIndex = 4;        //品牌兆赫只有4个，模拟对象数组
    }
    if (biaoqianType == "上升最快") {
        endIndex = 7;        //品牌兆赫只有6个，模拟对象数组
    }
    for (var i = 0; i < endIndex; i++) {
        tempStr = "<li id='" + arrMHz[i].musicTypeId + "' class='hot_li'>" +
            "<div id='img_" + arrMHz[i].musicTypeId + "' class='hot_img' style='background:url(./images/slide/" + arrMHz[i].imgName + ")'></div>" +
            "<div id='note_" + arrMHz[i].musicTypeId + "' class='hot_note'>" +
            "<div class='hot_noteTitle'>" + arrMHz[i].musicTypeName + "MHz</div>" +
            "<div class='hot_noteExplation'>" +
            "<label>" + arrMHz[i].songCounts + "首歌曲</label>" +
            "<a id='a_" + arrMHz[i].musicTypeId + "' href='javascript:void' class='viewMoreSong'>兆赫详情</a>" +
            "</div>" +
            "</div>" +
            "</li>";
        str_li += tempStr;
    }
    return str_li;
}

/*各种兆赫的hover
 *品牌MHz下的hover有bug,可能和Id冲突有关
 */
$(".hot_li:not(.pinpaiBiaoqian .hot_li)").live("mouseenter", function () {
    getMHzHoverContent(0, this)
});
$(".hot_li").live("mouseleave", function () {
    leveaMHz(this);
});

/*mhz  hover产生的容器和内容
 *  type ：区分热门标签、上升最快、品牌标签（hover菜单没有简介）
 * 值为0，则为热门标签、上升最快;否则为品牌标签
 *  obj ： 不同的Hover 对象
 */
function getMHzHoverContent(type, obj) {
    //图片切换
    var liObj = $(obj);
    var imgObj = liObj.find(".hot_img");
    var id = liObj.attr("id");
    $(imgObj).css("background", "url(./images/slide/07.png)");

    //产生菜单容器和内容
    var targetObj = getObjFromArr(id, mhzArr);   //获得整个Hover目标的内容（id，标题,歌曲数量等）
    var _y = liObj.offset().top + 40;       //Hover目标的位置 ，以确定hover菜单的位置
    var _x = liObj.offset().left + 50;

    var content = "<div  class='hoverContent' style='left:" + _x + "px;top:" + _y + "px;'>" +
        "<div class='hoverContentJianjie'>" +
        "<label><b style=' color:black;'>简介</b>：</label>" +
        "<label>" + targetObj.contentMain + "</label>" +
        "</div>" +
        "<div style='margin:0 auto;width:245px;display:block; height:1px;background:url(./images/slide/hoverdotted.png) 0 0 repeat-x;'></div>" +
        "<div class='hoverContentHotSongs'>" +
        "<label><b  style=' color:black;'>热门歌曲</b>：</label>" +
        "<label>" + targetObj.hotSong_1 + "/" + targetObj.hotSong_2 + "/" + targetObj.hotSong_3 + "</label>" +
        "</div>" +
        "</div>";
    $(".hotContainer").append(content);

}
//mhz离开效果
function leveaMHz(obj) {
    var imgObj = $(obj).find(".hot_img");
    var imgId = $(obj).attr("id");
    $(imgObj).css("background", "url(./images/slide/" + imgId + ".png)");
    $(".hoverContent").remove();
}

/*通过id寻找mhz数组中的index
 *id:传入 的值
 *arr:查找的数组
 */
function getObjFromArr(id, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].musicTypeId == id) {
            return arr[i];
        }
    }
}

/*搜索Mhz*/
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