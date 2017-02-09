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

});