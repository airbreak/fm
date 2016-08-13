/**
 * Created by hisihi on 2016/8/10.
 */
$(function(){


    var para={
        name:'hisihi',
        pwd:'123456',
        code:'W4r0'
    };

    $.post(window.fmUrlObject.baseUrlApi+'login',para,function(result){
        //alert(result);
    });

    $.get(window.fmUrlObject.baseUrlApi+'getBannerInfo',null,function(result){
//            alert(result);
    });

});