/**
 * Created by hisihi on 2016/8/10.
 */
$(function() {

    var para = {
        name: 'hisihi',
        pwd: '123456',
        code: 'W4r0'
    };

    //获得登陆信息
    //信息填充之后按钮变色
    $.post(window.fmUrlObject.baseUrlApi + 'login', para, function (result) {
        $(".submit").on("click", function () {
            var userName = $("#user-name").val();
            var pwd = $("#password").val();
            if (userName != "邮箱/用户名" && userName != "hisihi") {
                if (pwd != "密码" && pwd != "123456") {
                    $(".login").hide();
                }
                else {
                    alert("密码错误！");
                }
            }
            else {
                alert("用户名错误！");
            }
        });
    });

});
