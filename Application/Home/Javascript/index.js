/**
 * Created by hisihi on 2016/8/10.
 */
$(function() {

    var para = {
        name: 'hisihi',
        pwd: '123456',
        code: 'W4r0'
    };

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

    /**login按钮填充内容后按钮变色
     * 指定按钮为用户名/邮箱按钮**/
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

    //hover展示全部分享链接
    $("#share-link-img-db").hover(function(){
        $(this).removeClass("hide").addClass("side-close:hover");

    })

});
