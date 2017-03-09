app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('https://qiguanyichen.github.io/bilibili/background.php?type=home').success(function (req) {
        $scope.data = req;
        // $scope.data = req.recommend.list;
        console.log($scope.data)
    });
}]);
