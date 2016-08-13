/**
 * Created by hisihi on 2016/8/12.
 */
$(document).ready(function () {

    window.songsArr = getSongsList();
    getSongsList();
    createPlayer(0);

    var leftShow = false;
    var firstLoad = true;
    var firstLoad_share = true;
    var origDocuemntHeight = $(document).height();
    $(".slide").css("height", origDocuemntHeight + "px");
    $(".slideBar").css("height", origDocuemntHeight + "px");

    $(".slideBar").click(function () {
        if (leftShow) {
            $(".slideBar").animate({ left: "0px" }, 400);
            $(".slide").animate({ left: "-674px" }, 400, function () {
                leftShow = false;
                $("#slideTarget").attr("title", "展开");
                $("#slideTarget").removeClass("slideClose").addClass("slideOpen");
            });
        }
        else {
            $(".slideBar").animate({ left: "658px" }, 400);
            $(".slide").animate({ left: "0px" }, 400, function () {
                if (firstLoad) {
                    createLeftContent();
                    firstLoad = false;
                }
                leftShow = true;
                $("#slideTarget").attr("title", "关闭");
                $("#slideTarget").removeClass("slideOpen").addClass("slideClose");
            });
        }
    });

    /*分享*/
    $("#share").hover(function () {
        if (firstLoad_share) {
            var share = "<div style='margin-left:10px'>" +
                "<a href='javascript:void' title='豆瓣'>" +
                "<img src='./images/shareIcons/shareTodouban.png' alt='img'>" +
                "</a>" +
                '</div>';
            $("#share").append(share);
            firstLoad_share = false;
        }
        $("#share").animate({ "left": "880px" }, "fast", function () { });
    }, function () {
        $("#share").animate({ "left": "1065px" }, "fast", function () { });
    });

    function getSongsList() {
        var songsArr = [];
        var songObj0 = {
            'id': "",
            "coverPic": "",
            "songName": "",
            "songType": "",
            "songDetail": "",
            "songLenght": ""
        };
        songsArr.push(songObj0);
        return songsArr;
    }

    function createPlayer(songIndex) {
        var str_player = "<div id='coverPic' style='background:url(./images/players/" + songsArr[songIndex].coverPic + ");'></div>" +
            "<div id='songContent'>" +
            "<div id='songName' class='playerDiv'>" + songsArr[songIndex].songName + "</div>" +
            "<div id='songType'  class='playerDiv'>" + songsArr[songIndex].songType + "</div>" +
            "<div id='songDetail'  class='playerDiv'>" + songsArr[songIndex].songDetail + "</div>" +
            "<div id='progressBar'  class='playerDiv' ></div>" +
            "<div id='horn' class='playerDiv'>" +
            "<span>-0:21&nbsp;</span>" +
            "<img title='调节音量' src='./images/players/horn.png' alt='horn'>" +
            "</div  >" +
            "<div id='songOperation'  class='playerDiv'>" +
            "<div id='likeIt' title='添加到喜欢'></div>" +
            "<div id='dropIt' title='移除'></div>" +
            "<div id='next' title='下一首'></div>" +
            "</div>" +
            "</div>";
        $(".myPlayer").append(str_player);
    }
});