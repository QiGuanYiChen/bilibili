/*
 * 板块加载,传入参数:
 *   area : 区域名字
 *
 */

angular.module("showLive", [])
    .directive("showLive", ["$http", function ($http) {
        return {
            template: `<div class="room-list-container" ng-repeat="a in data">
                    <div class="title">
                        <div class="title-left">
                            <img ng-src="{{a.partition.sub_icon.src}}">
                            <span>{{a.partition.name}}</span>
                        </div>
                        <div class="title-right">
                            <a href="javascript:void(0);">
                                <span>进去看看</span>
                            </a>
                        </div>
                    </div>
                    <div class="block">
                        <a ng-href="{{b.playurl}}" ng-repeat="b in a.lives" ng-if="$index < 4">
                            <div class="loading">
                                <img lazy-src="{{b.cover.src}}">
                                <span>{{b.title}}</span>
                                <span>{{b.online}}</span>
                            </div>
                        </a>
                    </div>
                </div>`,
            restrict: 'E',
            replace: true,
            scope: {},
            controller: function ($scope) {
                // 缓存数据
                $scope.data = [
                    {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }, {
                        partition: {
                            sub_icon: {
                                src: "http://static.hdslb.com/live-static/images/mobile/ios/phone/9_s_3x.png?201703131400"
                            },
                            name: "绘画专区"
                        },
                        lives: [{
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }, {
                            playurl: "",
                            cover: {
                                src: ""
                            },
                            title: "",
                            online: ""
                        }]
                    }
                ];
                $http.get("http://1.gaoyu.applinzi.com/background.php?type=live").success(function (req) {
                    $scope.data = req.data["partitions"];
                });
            }
        }
    }]);