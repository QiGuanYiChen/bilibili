app.controller("liveCtrl", ["$scope", "$http", "$timeout", function ($scope, $http, $timeout) {
    $http.get("http://1.gaoyu.applinzi.com/background.php?type=live").success(function (req) {
        $scope.data = req.data["banner"];
        $timeout(function () {
            let swiper = new Swiper(".swiper-container", {
                // 自动切换
                autoplay: 3000,
                // loop循环
                loop: true,
                // 分页器
                pagination: '.swiper-pagination',
                //操作后保持继续循环
                autoplayDisableOnInteraction: false,
                loopAdditionalSlides: 1,
            });
        }, 500);
    });
}]);