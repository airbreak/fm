/// <reference path="../libs/jquery-1.7.1.min.js" />

$(document).ready(function () {
    //登陆
    $("#userLogin").click(function () {
        //产生一个遮板
        var docheight = $(document).height();  //得到浏览器的高
        var docwidth = $(document).width();  //得到浏览器的高
        var dd = $(window).height();
        var str_mengban = "<div id='gray' style='height:" + docheight + "px'></div>";

        //登陆框
        var _top = dd / 2 - 175;
        var _left = docwidth / 2 - 275;
        var str_loginDiv = "<div id='loginContainer' style='top:" + _top + "px;left:" + _left + "px'>" +
                                        "<div class='normalLogin'>" +
                                            "<div style=' height:20px;display:block;'></div>" +
                                            "<div style='margin-left:35px;font-size:16px;'>登录</div>" +
                                            "<div class='loginDiv'>" +
                                                "<input id='userName' type='text' value='邮箱/用户名'/>" +
                                            "</div>" +
                                            "<div class='loginDiv'>" +
                                                "<input id='userPwd' type='text' value='密码'/>" +
                                            "</div>" +
                                            "<div class='loginDiv'>" +
                                                "<input id='checkCode' type='text' value='验证码'/>" +
                                                "<img id='checkCodeImg'></img>" +
                                            "</div>" +
                                            "<div class='loginDiv'>" +
                                                    "<div style='float:left; margin-left:33px;'>" +
                                                        "<input id='ckLoginAuto' type='checkbox';'/>下次自动登录" +
                                                    "</div>" +
                                                    "<div style='float:right;margin-right:26px;'><a href='javascript:void' style='color:black;'>忘记密码?</a></div>" +
                                                "</div>" +
                                            "<div id='loginBtn'>登录</div>" +
                                            "</div>" +
                                            "<div class='otherLogin'>" +
                                                "<div style='margin-top:10px;height:10px;'><span class='closeLogin' title='关闭'>X<span></div>" +
                                                "<div style='margin-top:15px;margin-left:30px;color:#AAAAAA;'>用其他账号登录：</div>" +
                                                "<div style=' margin-left:30px; color:#9DD6C5;'><label style='cursor:pointer'>新浪微博</label>&nbsp;&nbsp;<label  style='cursor:pointer'>QQ</label>&nbsp;&nbsp;<label style='cursor:pointer'>MSN</label></div>" +
                                                "<div style='margin-top:190px;margin-left:30px;color:#AAAAAA;'>没有豆瓣FM账号?</div>" +
                                                "<div id='newRegister'>立即注册</div>" +
                                            "</div>" +
                                    "</div>";
        $("body").append(str_mengban + str_loginDiv);
        //获得验证码
        getCheckCode();
    });

    function getCheckCode() {
        var codeUrl = "./images/checkCode.png";
        $("#checkCodeImg").attr("src", codeUrl);
    }

    //关闭登录框 
    $(".closeLogin").live("click", function () {
        $("#loginContainer").remove();
        $("#gray").remove();
    });

    //login按钮
    $("#loginBtn").live("click", function () {
        var userName = $("#userName").val();
        var pwd = $("#userPwd").val();
        if (userName != "邮箱/用户名" && userName != "") {
            if (pwd != "密码" && pwd != "") {
                userId = userName;
                $("#loginContainer").remove();
                $("#gray").remove();
            }
            else {
                alert("密码错误！");
            }
        }
        else {
            alert("用户名错误！");
        }
    });

    $("#userName").live("click", function () {
        if ($(this).val() == "邮箱/用户名") {
            $(this).val("");
        }
    });
    $("#userName").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("邮箱/用户名");
        }
    });
    $("#userPwd").live("click", function () {
        if ($(this).val() == "密码") {
            $(this).val("");
        }
    });
    $("#userPwd").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("密码");
        }
    });

    $("#checkCode").live("click", function () {
        if ($(this).val() == "验证码") {
            $(this).val("");
        }
    });
    $("#checkCode").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("验证码");
        }
    });

});