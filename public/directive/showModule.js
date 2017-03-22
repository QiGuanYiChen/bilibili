/*
 * 板块加载,传入参数:
 *   imgLeft : 左侧图标名
 *   sectionname : 区域名字
 *   imgRight : 右侧图标名
 *   more : 查看更多更新
 *   section : 变量名
 *   typename : 路径名
 */

angular.module('showModule', [])
    .directive('homeContainer', ["$http", function ($http) {
        return {
            template: `<div class="home-container">
                            <a href="//m.bilibili.com/arrow.html" class="header">
                                <div class="left">
                                    <span class="bilibili-index-sprite bilibili-index-{{imgleft}}"></span>
                                    <span>{{sectionname}}</span>
                                </div>
                                <div class="right">
                                    <span class="bilibili-index-sprite bilibili-index-{{imgright}}"></span>
                                    <span>{{more}}</span>
                                </div>
                            </a>
                            <ul class="home-ul">
                                <li class="home-items" ng-repeat="i in data" ng-if="$index<4">
                                    <a href="//www.bilibili.com/mobile/video/av{{i.aid}}.html">
                                        <div class="lazy-img"><img lazy-src="{{i.pic}}" alt=""></div>
                                        <div class="title">{{i.title}}</div>
                                        <div class="meta">
                                            <div class="cell left">
                                                <span class="bilibili-index-sprite bilibili-index-play"></span>
                                                <span>{{i.play}}</span>
                                            </div>
                                            <div class="cell left">
                                                <span class="bilibili-index-sprite bilibili-index-danmu"></span>
                                                <span>{{i.video_review}}</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                         </div>`,
            restrict: 'E',
            replace: true,
            scope: {
                typename: '@',
                section: '@',
                imgleft: '@',
                imgright: '@',
                sectionname: '@',
                more: '@'
            },
            controller: function ($scope) {
                //默认数据
                $scope.data=[
                    {
                            title:"",
                            play:"",
                            video_review:"",
                            pic:""
                    },
                    {
                            title:"",
                            play:"",
                            video_review:"",
                            pic:""
                    },
                    {
                            title:"",
                            play:"",
                            video_review:"",
                            pic:""
                    },
                    {
                            title:"",
                            play:"",
                            video_review:"",
                            pic:""
                    }
                ];
                $http.get('http://1.gaoyu.applinzi.com/background.php?type=' + $scope.typename)
                    .success(function (req) {
                        if ($scope.section === "recommend") {
                            $scope.data = req[$scope.section]["list"];
                        } else {
                            $scope.data = req[$scope.section];
                        }
                    });
            },
            link: function (scope, element, attr) {
                let $ = angular.element;
                if (scope.section === "recommend") {
                    $(element).children().eq(0).children().eq(1).addClass("hot");
                }
            }
        }
    }]);




