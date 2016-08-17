/**
 * Created by jimmy on 2016/8/17.
 */

var myMoudle=angular.module('MyFm',[]);

myMoudle.controller('leftPanelController',['$scope','$http',function($scope,$http){

    //音乐类型
    var promis=$http({
        method:'get',
        url:window.fmUrlObject.baseUrlApi+'getMusicTypeInfo'
    }).success(function(result,status,headers,config){
        if(result.status=='success') {
            $scope.musicTypes = result.data;
        }
    }).error(function(data,status,headers,config){
        data;
    });


    //banner
    var promise=$http({
        method:'get',
        url:window.fmUrlObject.baseUrlApi+'getBannerInfo'
    }).success(function(result,status,headers,config){
        if(result.status=='success') {
            var len = result.data.length,navArr=[];
            for(var i=0;i<len;i++){
                navArr.push(i+1);
            }
            //导航控制
            $scope.navs=navArr;
            $scope.isSelect=0;
            $scope.selectMe=function($index){
                $scope.isSelect=$index;
                $scope.imgUrl=result.data[$index].imgName;
            }
            $scope.imgUrl=result.data[0].imgName;
        }
    }).error(function(data,status,headers,config){
        data;
    });




}]);