let app = angular.module("app", ["ngRoute", "angularCSS"]);

// 路由
app.config(["$routeProvider", function ($routeProvider) {
    // when(a,b)  a. 锚点路径  b. object
    $routeProvider
        .when("/home", {
            templateUrl: "./home/home.html",
            css: "./home/css/home.css",
            controller: "homeCtrl"
        })
        .when("/channel", {
            templateUrl: "./channel/channel.html",
            css: "./channel/css/channel.css",
            controller: "channelCtrl"
        })
        // 默认跳转
        .otherwise("/home");
}]);

app.controller("indexCtrl", ["$scope", function ($scope) {
    if ($scope.text === "") {

    }
}]);

// 解决手机端点击 300毫秒 延迟
$(function () {
    FastClick.attach(document.body);
});