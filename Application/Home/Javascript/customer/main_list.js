/**
 * Created by hisihi on 2016/8/15.
 */
/// <reference path="../libs/jquery-1.7.1.min.js" />

//私人兆赫
var arrPrivateMhz={
    "ID":"airbreak",
    "pMHz":["五月天","粤语","九零","台湾"],
    "redHeartMHz":["五月天","粤语"]
};
//创建右侧的内容
function createRightContent(userId) {
    // $(".coverScroll").css("background", "url(./images/coverScroll.png) 0 0 ");
    $(".coverScroll").addClass("covers");
    $(document).delay(10000);
    createMHzList(userId);    //创建主界面的歌曲列表
    createFMCustomer();             //创建手机客户端


}
//创建主界面的歌曲列表
function createMHzList(userId) {
    //    alert(userId);
    var currentMhz = {
        "Id": "partyA",
        "contentTitle": "Partty All Night Mhz"
    };
    var str_listContent = "<div id='listContainer'>" +
        "<ul class='listUl' id='myPrivateUl'>" +
        "<li class='listLi normalListLi' id='li_" + userId + "-p'>" +
        "<div id='p_" + userId + "' class='myPrivate listName'>我的私人兆赫</div>" +
            //"<div class='listLihoverDiv' id='hoverDiv_"+userId+"-p'></div>" +
            //createMHzLiHover(userId) +
        "</li>" +

        "<li class='listLi normalListLi' id='li_" + userId + "-r'>" +
        "<div id='r_" + userId + "' class='myRedHeart listName'>我的红心兆赫</div>" +
            //"<div class='listLihoverDiv' id='hoverDiv_"+userId+"-r'></div>" +
            //createMHzLiHover(userId) +
        "</li>" +
        "</ul>" +
        "<ul class='listUl' id='currentMHz'>" +                //当前听的Mhz
        "<li class='listLi currentMHzLi' id='li_" + currentMhz.Id + "' style='float:left'>" +
        "<div id='" + currentMhz.Id + "' class='myPrivate listName'>" + currentMhz.contentTitle + "</div>" +
        "<div class='listLihoverDiv currentMHzLiDiv' id='hoverDiv_" + currentMhz.Id + "'></div>" +
        "</li>" +
        "<li id='liStart' style='float:left'></li>" +
        "</ul>" +
        "<ul class='listUl tuijianUl'>"+
        getTuijian("试试这些",0) +
        "<ul>" +
        "<ul class='listUl tuijianUl'>" +
        getTuijian("品牌兆赫", 1) +
        "</ul>" +
        "<div>";
    $(".list").append(str_listContent);
    createMHzLiHover();  //创建所有的hover菜单
}


//得到系统推荐的mhz和品牌Mhz
function getTuijian(title,type) {
    var tryMHz = getTuijianMhzArry();  //取得系统的MHz
    var str_tryMHz = "<li class='listLiCutLine'><div>" + title + "</div><div class='rightListCutLine'></div></li> ";
    var startIndex = 0;
    var endIndex = tryMHz.length;
    if (type == 0) {            //推荐的mhz
        endIndex = 5;
    }
    else {                           //品牌Mhz
        startIndex = 5;
        endIndex = 7;
    }
    for (var i = startIndex; i < endIndex; i++) {
        var temp = "";
        temp = "<li class='listLi normalListLi' id='li_" + tryMHz[i].Id + "'>" +
            "<div id='" + tryMHz[i].Id + "' class='listName'>" + tryMHz[i].contentTitle + "</div>" +
            "<div class='listLihoverDiv' id='hoverDiv_"+tryMHz[i].Id+"'></div>" +
                //createMHzLiHover(tryMHz[i])+
            "</li>";
        str_tryMHz += temp;
    }
    return str_tryMHz;
}

//模仿一个数组
function getTuijianMhzArry(){
    var arrTuijian = [];
    var mhzInfoObj0 = {
        "Id": "mhz0",
        "contentTitle": "Freels Like Home Mhz"
    };
    var  mhzInfoObj1 = {
        "Id": "mhz1",
        "contentTitle": "中国好声音 MHZ"
    };
    var  mhzInfoObj2 = {
        "Id": "mhz2",
        "contentTitle": "魔力红 MHz"
    };
    var  mhzInfoObj3 = {
        "Id": "mhz3",
        "contentTitle": "欧美！欧美！MHz"
    };
    var mhzInfoObj4 = {
        "Id": "mhz4",
        "contentTitle": "五月天"
    };
    var mhzInfoObj5 = {
        "Id": "mhz5",
        "contentTitle": "秋天的童话"
    };
    var mhzInfoObj6 = {
        "Id": "mhz6",
        "contentTitle": "最后一片叶子"
    };
    arrTuijian.push(mhzInfoObj0);
    arrTuijian.push(mhzInfoObj1);
    arrTuijian.push(mhzInfoObj2);
    arrTuijian.push(mhzInfoObj3);
    arrTuijian.push(mhzInfoObj4);
    arrTuijian.push(mhzInfoObj5);
    arrTuijian.push(mhzInfoObj6);
    return arrTuijian;
}

//获得所有的mhzLi的position
function getAllMHzLiPosition() {
    var arrPositon = [];
    var allLi = $(".listLi");
    var tempObj = {};
    for (var i = 0; i < allLi.length; i++) {
        var obj = allLi[i];
        var tempObj = {};
        tempObj.Id = obj.id.split('_')[1];
        tempObj.locX = obj.offsetLeft;
        tempObj.locY = obj.offsetTop;
        arrPositon.push(tempObj);
    }
    return arrPositon;
}

//Mhz列表的Hover菜单
function createMHzLiHover() {
    var arrPositon = getAllMHzLiPosition();
    for (var i = 2; i < arrPositon.length; i++) {
        var id = arrPositon[i].Id;
        var restore = "";
        var delet = "";
        if (i == 2) {
            restore = "<li class='MHzLi'>" +
                "<div id='MHzRestore_" + id + "'>收藏</div>" +
                "</li>";
            delet = "<li class='MHzLi'>" +
                "<div id='MHzDetail_" + id + "'>删除</div>" +
                "</li>";
        }
        else if (i > 2 && i < 8) {
            delet = "<li class='MHzLi'>" +
                "<div id='MHzDetail_" + id + "'>删除</div>" +
                "</li>";
        }
        else {

        }
        var str_hoverMenu = "<ul id='MHzUl_" + id + "' class='hoverUl'>" +
            "<li class='MHzLi'>" +
            "<div id='MHzDetail_" + id + "'>兆赫详情</div>" +
            "</li>" +
            restore+
            "<li class='MHzLi'>" +
            "<div id='MHzShare_" + id + "'>分享</div>" +
            "</li>" +
            delet +
            "</ul>";
        $("#hoverDiv_" + id).append(str_hoverMenu);
    }
    initHoverMenu();
    return str_hoverMenu;

}

/*normalListLi的hover*/
$(".normalListLi").live("mouseenter", function () {
    $(".normalListLi").css("background-color", "#CFD9D6");
    $(this).css("background-color", "#BCD3CE");
});
/*currentMHzLi*/
$(".currentMHzLi").live("mouseenter", function () {
    $(".normalListLi").css("background-color", "#CFD9D6");
    //$(this).css("background-color", "#BCD3CE");
});

/*初始化Hover菜单*/
function initHoverMenu() {

    $(".listLihoverDiv").hover(function () {
        $(this).css("background", "url(./images/arrow.png)");
        var grandParentId = $(this).parent().parent().attr("id");  //用于判断是否为当前听的Mhz
        if (grandParentId == "currentMHz") {
            $("#liStart").hide();
        }
        var menuId = "MHzUl_" + $(this).attr("id").split('_')[1];
        $("#" + menuId).show();
        $(".MHzLi").hover(function () {
            $(this).css("background-color", "#EFF3F2");
        }, function () {
            $(this).css("background-color", "white");
        });
    }, function () {
        $(this).css("background", "");
        var menuId = "MHzUl_" + $(this).attr("id").split('_')[1];
        $("#" + menuId).hide();

        var grandParentId = $(this).parent().parent().attr("id");  //用于判断是否为当前听的Mhz
        if (grandParentId == "currentMHz") {
            $("#liStart").show();
        }
    });

}


