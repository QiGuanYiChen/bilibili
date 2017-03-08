let app = angular.module("app", ["ngRoute", "angularCSS"]);

app.config(["$routeProvider", function ($routeProvider) {
    // when(a,b)  a. 锚点路径  b. object
    $routeProvider
        .when("/home", {
            template: "<h1>这是home页面</h1>"
            // templateUrl:
            // css:
            // controller:
        })
        .when("/channel", {
            template: "<h1>channel</h1>"
            // html 路径
            // templateUrl:
            // css:
            // controller:
        })
        // 默认跳转
        .otherwise("/home");
}]);

// 解决手机端点击 300毫秒 延迟
$(function () {
    FastClick.attach(document.body);
});