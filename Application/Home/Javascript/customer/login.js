/**
 * Created by hisihi on 2016/8/10.
 */
$(document).ready(function () {

    $("#login").click(function () {
        var wh = $(document).height();
        var ww = $(document).width();
        var overlay = '<div id="over-lay" style="width:"' + ww + '"px">'+'</div>';

        var _top = wh / 2 - 350;
        var _left = ww / 2 - 555;

        var loginBox = '<div class="login-container" style="top:' + _top + 'px;left:' + _left + 'px">' ;
        $("body").append(overlay + loginBox);

        //获得验证码
        getCheckCode();
    });

    /*someday I will be remember*/
    function getCheckCode() {
        var codeUrl = window.fmUrlObject.img+"/checkCode.png";
        $("#pass-code-img").attr("src", codeUrl);
    }

    //关闭登录框
    $(".closeLogin").live("click", function () {
        $(".login-container").remove();
        $("#over-lay").remove();
    });

    //login按钮
    $("#login-btn").live("click", function () {
        var userName = $("#user-name").val();
        var pwd = $("#password").val();
        if (userName != "邮箱/用户名" && userName != "") {
            if (pwd != "密码" && pwd != "") {
                userId = userName;
                $(".login-container").remove();
                $("#over-lay").remove();
            }
            else {
                alert("密码错误！");
            }
        }
        else {
            alert("用户名错误！");
        }
    });

    //用户名
    $("#user-name").live("click", function () {
        if ($(this).val() == "邮箱/用户名") {
            $(this).val("");
        }
    });
    $("#user-name").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("邮箱/用户名");
        }
    });
    //密码
    $("#password").live("click", function () {
        if ($(this).val() == "密码") {
            $(this).val("");
        }
    });
    $("#password").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("密码");
        }
    });
    //验证码
    $("#pass-code").live("click", function () {
        if ($(this).val() == "验证码") {
            $(this).val("");
        }
    });
    $("#pass-code").live("focusout", function () {
        if ($(this).val() == "") {
            $(this).val("验证码");
        }
    });

});