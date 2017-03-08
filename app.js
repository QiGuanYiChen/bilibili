/**
 * Created by Auser on 2017/3/8.
 */

//需要引入路由以及css模块
var app = angular.module('app',['ngRoute','angularCSS']);

app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/home',{
        templateUrl:'home/home.html',
        controller:'homeCtrl'
    })
    .when('/channel',{
        templateUrl:'channel/channel.html',
        controller:'channelCtrl'
    })
    
}])