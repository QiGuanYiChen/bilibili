let app = angular.module("app", ["ui.router", "angularCSS", "me-lazyload", "showModule", "showSwiper", "showChannel", "showLive", "showRank"]),
    $close = $(".searchBarWarp i:nth-child(3)"),
    $input = $(".searchInput"),
    $searchResult = $(".searchResult"),
    storage = window.localStorage;

// 路由
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    // 默认跳转
    $urlRouterProvider.otherwise('home');
    // when(a,b)  a. 锚点路径  b. object
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "./home/home.html",
            css: "./home/css/home.css",
        })
        .state("channel", {
            url: '/channel',
            templateUrl: "./channel/channel.html",
            css: "./channel/css/channel.css"
        })
        .state("ranking", {
            url: '/ranking',
            templateUrl: "./ranking/ranking.html",
            css: "./ranking/css/ranking.css",
            //默认跳转到全部排行界面
            controller: function ($state) {
                $state.go('ranking.all');//默认显示第一个tab
            }
        })
        .state("ranking.all", {
            url: '/ranking.all',
            views: {
                'rankview': {
                    templateUrl: "./ranking/all.html",
                    css: "./ranking/css/ranking.css"
                }
            },
        })
        .state("ranking.origin", {
            url: '/ranking.origin',
            views: {
                'rankview': {
                    templateUrl: "./ranking/origin.html",
                    css: "./ranking/css/ranking.css"
                }
            },
        })
        .state("ranking.bangumi", {
            url: '/ranking.bangumi',
            views: {
                'rankview': {
                    templateUrl: "./ranking/bangumi.html",
                    css: "./ranking/css/ranking.css"
                }
            },
        })
        .state("space", {
            url: '/space',
            templateUrl: "./space/space.html",
            css: "./space/css/space.css"
        })
        .state("live", {
            url: "/live",
            templateUrl: "./live/live.html",
            css: "./live/css/live.css",
            controller: "liveCtrl"
        })
}]);

app.controller("indexCtrl", ["$scope", "$http", "$q", function ($scope, $http, $q) {
    $scope.data = [];
    $scope.memory = storage;
    $http.get("./public/json/homeSearch.json").success(function (req) {
        $scope.data = req['list'];
    });


    $scope.addStorage = function (a) {
        storage.setItem(a['keyword'], JSON.stringify(a));
    };
    $scope.JSONParse = function (i) {
        return JSON.parse(i);
    };
}]);

$(function () {
    // 解决手机端点击 300毫秒 延迟
    FastClick.attach(document.body);
    // 输入搜索内容时
    $input.on("keydown", function () {
        if (this.value === "") {
            $close.css("display", "none");
            $searchResult.css("display", "none");
        } else {
            $close.css("display", "block");
            $searchResult.css("display", "block");
        }
    });
    // 点击清空时
    $close.on("click", function () {
        $(this).css("display", "none");
        $searchResult.css("display", "none");
        $input.val("");
    });
    // 删除历史记录
    $(".historyContent a i:nth-child(3)").on("click", function (event) {
        event.preventDefault();
        storage.removeItem($(this).prev().html());
        $(this).parent().remove();
    });
    // 历史记录隐藏效果
    $(".searchBarWarp>a").on("click", function () {
        $(".searchView").css({
            "transform": "scale(0)",
            "visibility": "hidden"
        });
    });
    // 历史记录弹出效果
    $(".headerTop>a:nth-child(3)").on("click", function () {
        $(".searchView").css({
            "transform": "scale(1)",
            "visibility": "visible"
        });
    });
    // 返回顶部
    $("#back_to_top").on("click", function () {
        $(document.body).animate({scrollTop: 0}, 500);
    });
    // 关闭下载链接
    $(".dl-close").on("click", function () {
        $('#b_app_link').css('display', 'none');
    });
    $(".nav a").on("click", function () {
        $(".ready").css("display", "flex");
    });
});