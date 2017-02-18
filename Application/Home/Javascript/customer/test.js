/**
 * Created by hisihi on 2017/2/17.
 */


//获取一个名为test的module
var t=angular.module('test');

//t
t.controller('item-controller',['$Scope','$http',function($http){

    var x =$http({
        method:'get',
        url:window.fmUrlObject.baseUrlApi+'getBannerInfo',
    }).success(function(result){
        if(result.status='success'){
            var //空数组
                item = [],
                len=result.data.length;
            for(var i=0;i<len;i++){
                item.push[i+1];
            }
        }
    });

}]);