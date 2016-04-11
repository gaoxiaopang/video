/**
 * Created by Administrator on 2015/9/21.
 */
var PAGE = (function () {
    var time2= 0,
        fn = {
            /*横屏监测*/
            listenOrientation: function () {
                var supportsOrientationChange = "onorientationchange" in window,
                    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
                $(window).bind(orientationEvent, function () {
                    var tips = $('#lateralTips');
                    if (window.orientation == 180 || window.orientation == 0) {
                        tips.fadeOut();
                    }
                    if (window.orientation == 90 || window.orientation == -90) {
                        $('html,body').scrollTop(0);
                        tips.fadeIn();
                    }
                }).trigger('orientationEvent');
            },
            setPop:function() {
                $('.menu').toggle(
                    function () {
                        $('.popMore').fadeIn();
                    },
                    function () {
                        $('.popMore').fadeOut();
                    })
            }





        },
        init = function () {

            fn.setPop();



        }
    return {
        fn: fn,
        init: init,
        time2:time2
    }
})()
$(function () {
    PAGE.init();

})