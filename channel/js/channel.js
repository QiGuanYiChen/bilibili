/**
 * Created by Auser on 2017/3/8.
 */
app.controller('channelCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('http://qiguanyichen.github.io/bilibili/new.php')
        .success(function (req) {
            $scope.date = req.data.banner;
        })
}])