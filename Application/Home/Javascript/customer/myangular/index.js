/**
 * Created by jimmy on 2016/8/17.
 */

var myMoudle=angular.module('MyFm',[]);

myMoudle.controller('sliderBarController',['$scope',function($scope){
    $scope.arrow='<';
    $scope.isHide = false;
    $scope.toggle = function toggle() {
        if($scope.isHide){
            $scope.arrow='<';
        }else{
            $scope.arrow='>';
        }
        $scope.isHide = !$scope.isHide;
    }
}]);



//banner
myMoudle.controller('bannerController',['$scope','$http',function($scope,$http){


    var promise=$http({
        method:'get',
        url:window.fmUrlObject.baseUrlApi+'getBannerInfo'
    }).success(function(result,status,headers,config){
        if(result.status=='success') {
            var len = result.data.length,navArr=[];
            for(var i=0;i<len;i++){
                navArr.push(i+1);
            }
            //导航
            $scope.navs=navArr;
            $scope.isSelect=0;
            $scope.selectMe=function($index){
                $scope.isSelect=$index;
                //$scope.imgUrl=result.data[$index].imgName;
                setBannerItemInfo(result.data[$index]);
            }
            setBannerItemInfo(result.data[0]);
        }
    }).error(function(data,status,headers,config){
        data;
    });

    function setBannerItemInfo(data){
        //图片
        $scope.imgUrl=data.imgName;

        //文本内容
        $scope.title=data.contentTitle;
        $scope.description=data.contentMain;
        $scope.hotsongs=[data.hotSong_1,data.hotSong_2,data.hotSong_3];
        $scope.totalNums=data.songCounts;
    }



}]);


//音乐类型
myMoudle.controller('musicTypeController',['$scope','$http',function($scope,$http) {


    var promis = $http({
        method: 'get',
        url: window.fmUrlObject.baseUrlApi + 'getMusicTypeInfo'
    }).success(function (result, status, headers, config) {
        if (result.status == 'success') {
            $scope.musicTypes = result.data;
        }
    }).error(function (data, status, headers, config) {
        data;
    });
}]);

//热门兆赫
myMoudle.controller('hotMzController',['$scope','$http',function($scope,$http) {
    var promis = $http({
        method: 'get',
        url: window.fmUrlObject.baseUrlApi + 'getHotMz'
    }).success(function (result, status, headers, config) {
        if (result.status == 'success') {
            $scope.mhzTitle = '热门兆赫';
            $scope.items = result.data;
        }
    }).error(function (data, status, headers, config) {
        data;
    });
}]);

//上升最快兆赫
myMoudle.controller('raiseUpMzController',['$scope','$http',function($scope,$http) {
    var promis = $http({
        method: 'get',
        url: window.fmUrlObject.baseUrlApi + 'getRaiseUpMz'
    }).success(function (result, status, headers, config) {
        if (result.status == 'success') {
            $scope.mhzTitle = '上升最快';
            $scope.items = result.data;
        }
    }).error(function (data, status, headers, config) {
        data;
    });
}]);

//品牌兆赫
myMoudle.controller('brandMzController',['$scope','$http',function($scope,$http) {
    var promis = $http({
        method: 'get',
        url: window.fmUrlObject.baseUrlApi + 'getBrandMz'
    }).success(function (result, status, headers, config) {
        if (result.status == 'success') {
            $scope.mhzTitle = '品牌兆赫';
            $scope.items = result.data;
        }
    }).error(function (data, status, headers, config) {
        data;
    });
}]);


//音乐兆赫 指令
myMoudle.directive('mhz',function(){
    return{
        restrict:'EA',
        replace:true,
        transclude : true,
        title : '=expanderTitle',
        template:'<div class="mhz-box-item">'+
                    '<h3 class="mhz-box-title">{{mhzTitle}}</h3>'+
                    '<ul class="mhz-ul">'+
                        '<li ng-repeat="item in items" ng-mouseover="selectMe($index)" ng-mouseout="selectMe(-1)" ng-class="{over:isSelect==$index}">'+
                            '<div class="img-cover"></div>'+
                            '<img src="{{item.imgName}}">'+
                            '<div class="mhz-item-info">'+
                                '<p>{{item.musicTypeName}}</p>'+
                                '<p><span>{{item.songCounts}}</span><span>首歌曲</span><a href="">兆赫详情</a></p>'+
                            '</div>'+
                            '<div class="hover-detail">'+
                                '<p><span>简介：</span><span>{{item.contentMain}}</span></p>'+
                                '<p><span>热门歌曲：</span><span>{{item.hotSong_1}} / {{item.hotSong_2}} / {{item.hotSong_3}}</span></p>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</div>',

        link: function (scope,element,attr) {
            scope.isSelect=-1;
            scope.selectMe=function($index){
                scope.isSelect=$index;
            }
            scope.selectMe=function($index){
                scope.isSelect=$index;
            }
        }
    }
});


myMoudle.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});

myMoudle.controller('SomeController',function($scope) {
    $scope.title = '点击展开';
    //$scope.text = '这里是内部的内容。';
});