/*
 * 板块加载,传入参数:
 *   classname : 类名
 *   area : 区域名字
 */

angular.module('showChannel', [])
    .directive('channelLi', [function () {
        return {
            template: ` <li>
                            <a href="javascript:void(0);">
                                <div class="channel-icon {{classname}}"></div>
                                <p class="channel-name">{{area}}</p>
                            </a>
                        </li>`,
            restrict: 'E',
            replace: true,
            scope: {
                classname: "@",
                area: "@"
            }
        }
    }]);