/**
 * 排行板块加载
 */
angular.module('showRank',[])
    .directive('rankList',['$http',function ($http) {
        return{
            template:`
                        <li ng-repeat="i in data">
                            <a class="list-item in" href="//www.bilibili.com/mobile/video/av{{i.aid}}.html">
                                <div class="l">
                                    <div class="lazy-img">
                                        <div class="rank">
                                            <span class="rank-num">1</span>
                                        </div>
                                        <img lazy-src="{{i.pic}}" alt="">
                                    </div>
                                </div>
                                <div class="r">
                                    <div class="r-box">
                                        <div class="title">{{i.title}}</div>
                                        <div class="meta">
                                            <div class="up">UP主：<span>{{i.author}}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>`,
            replace:false,
            restrict:'E',
            scope:{
                tid:"@",
            },
            controller:function ($scope) {
                $http.get('http://1.gaoyu.applinzi.com/background.php?type=' + $scope.tid)
                    .success(function (req) {
                        console.log(req);
                        console.log($scope.tid);
                        $scope.data = req.rank.list;
                    });
            },
            link:function (scope,element,attr) {
                
            }
        }
    }])