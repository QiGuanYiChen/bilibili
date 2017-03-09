app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://1.gaoyu.applinzi.com/background.php?type=homeBanner').success(function (req) {
        $scope.data = req.data;
        // $scope.data = req.recommend.list;
        console.log($scope.data)
    });
    $scope.home = "homeasdfasdfas";
}]);
