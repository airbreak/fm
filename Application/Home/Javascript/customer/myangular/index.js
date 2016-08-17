/**
 * Created by jimmy on 2016/8/17.
 */

var myMoudle=angular.module('MyFm',[]);

myMoudle.controller('leftPanelController',['$scope',function($scope){
    var ss='';
    var promis=$http({
        method:'get',
        url:window.fmUrlObject.baseUrlApi+'getMusicTypeInfo'
    }).success(function(data,status,headers,config){
        $scope.musicTypes=data;
    }).error(function(data,status,headers,config){
        data;
    });
}]);