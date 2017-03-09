app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://qiguanyichen.github.io/bilibili/background.php?type=channel').success(function (req) {
        // $scope.data = req.data;
        $scope.data = req.recommend.list;
        console.log(req.recommend.list)
    });
}]);