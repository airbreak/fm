/**
 * Created by hisihi on 2016/8/10.
 */
$(document).ready(function () {

    //弹出登录框
    $ ('#login').click (function () {
        $('.login').show();
    });

    //关闭登录框
    $(".closeLogin").on("click", function () {
        $(".login").hide();
    });

    //弹出注册框
    $('#register').click(function () {
        $('.register').show();
    });

    //关闭注册框
    $('#register').click(function (){
        $('.register').hide();
    });

    /*someday I will be remember*/
    /*获取验证码图片*/
    //function getCheckCode() {
    //    var codeUrl = window.fmUrlObject.img+"/checkCode.png";
    //    $("#pass-code-img").attr("src", codeUrl);
    //}

    ////用户名
    //$("#user-name").on("click", function () {
    //    if ($(this).val() == "邮箱/用户名") {
    //        $(this).val("");
    //    }
    //});
    //$("#user-name").on("focusout", function () {
    //    if ($(this).val() == "") {
    //        $(this).val("邮箱/用户名");
    //    }
    //});
    ////密码
    //$("#password").on("click", function () {
    //    if ($(this).val() == "密码") {
    //        $(this).val("");
    //    }
    //});
    //$("#password").on("focusout", function () {
    //    if ($(this).val() == "") {
    //        $(this).val("密码");
    //    }
    //});
    ////验证码
    //$("#pass-code").on("click", function () {
    //    if ($(this).val() == "验证码") {
    //        $(this).val("");
    //    }
    //});
    //$("#pass-code").on("focusout", function () {
    //    if ($(this).val() == "") {
    //        $(this).val("验证码");
    //    }
    //});
});