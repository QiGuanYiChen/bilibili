// 自定义轮播图组件
angular.module('showSwiper', [])
    .directive('showSwiper', ['$http', function ($http) {
        return {
            template: `<div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" ng-repeat="x in data">
                                <a href="{{x.url}}">
                                    <img ng-src="{{x.pic}}">
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                       </div>`,
            restrict: 'E',
            replace: true,
            scope: {
                target: "@"
            },
            controller: function ($scope, $timeout) {
                $http.get('http://1.gaoyu.applinzi.com/background.php?type=' + $scope.target)
                    .success(function (req) {
                        $scope.data = req.data;
                    });
                // 实例化 Swiper 加上timeout是为了解决异步加载的延时问题
                $timeout(function () {
                    let swiper = (function () {
                        return new Swiper(".swiper-container", {
                            // 自动切换
                            autoplay: 3000,
                            // loop循环
                            loop: true,
                            // 分页器
                            pagination: '.swiper-pagination',
                            //操作后保持继续循环
                            autoplayDisableOnInteraction: false,
                            loopAdditionalSlides: 1,
                            //修改swiper自己或子元素时，自动初始化swiper
                            observer: true,
                            //修改swiper的父元素时，自动初始化swiper
                            observeParents: true
                        });
                    })();
                    $(".swiper-slide a img").css("height", screen.width * 0.3125 + "px");
                }, 1000);
            },
        }
    }]);