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
    //$.post(window.fmUrlObject.baseUrlApi + 'login', para, function (result) {
    //    $(".submit").on("click", function () {
    //        var userName = $("#user-name").val();
    //        var pwd = $("#password").val();
    //        if (userName != "邮箱/用户名" && userName != "hisihi") {
    //            if (pwd != "密码" && pwd != "123456") {
    //                $(".login").hide();
    //            }
    //            else {
    //                alert("密码错误！");
    //            }
    //        }
    //        else {
    //            alert("用户名错误！");
    //        }
    //    });
    //});


    $(".submit").on("click", function () {
        var userName = $("#user-name").val();
        var pwd = $("#password").val();
        var code=$('#pass-code').val();
        if (userName == "" || pwd =="") {
            alert('请输入用户名或密码');
            return;  //后面的代码 不会执行，直接跳出这个函数了
        }
        if(code==''){
            alert('请输入验证码');
            return;  //后面的代码 不会执行，直接跳出这个函数了
        }

        //数据经过必填检测，调用后台进行登陆
        var myParas={
            name: userName,
            pwd: pwd,
            code: code
        };
        $.post(window.fmUrlObject.baseUrlApi + 'login', myParas, function (result) {

                alert(result);

        });

    });

    //login按钮填充内容后按钮变色
    $("#btn-submit") .on("focusout",function () {
        if ($('.text input').eq(0).val()) {
            $('#btn-submit').addClass('active');
        }
    });


});
