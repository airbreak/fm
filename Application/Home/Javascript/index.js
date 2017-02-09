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


    //传值，获取登录用户名和密码
    $(".submit").on("click", function () {
        var userName = $("#user-name").val();
        var pwd = $("#password").val();
        var code=$('#pass-code').val();
        if (userName == "" || pwd =="") {
            alert('请输入用户名或密码');
            return;
        }
        if(code==''){
            alert('请输入验证码');
            return;
        }

        var myParas={
            name: userName,
            pwd: pwd,
            code: code
        };

        //判断信息是否正确
        //正确-关闭登录框，登录变成用户名
        $.post(window.fmUrlObject.baseUrlApi + 'login', myParas, function (result) {
            if(result.status == 'success') {
                $('.login').hide();
                $('#heishehui').hide();
                $('#register').hide();
                $('#hisihi').show().text(myParas.name);
            }else {
                alert('登陆失败');
            }
        });
    });

    //login按钮填充内容后按钮变色
    //指定按钮为用户名/邮箱按钮
    $("#user-name").on("input",function () {
        var $target=$('#user-name'),
            txt1=$target.val().trim(),
            $btn=$('#btn-submit');
        if(txt1){
            $btn.addClass('active');
        }
        else{
            $btn.removeClass('active');
        }
    });

});
