// DIRECTIVES

youtubeSearchApp.directive("videoList", function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/videoList.html',
        replace: true,
        scope: {
            videoItem: "=",
            videoFrameUrl: "@",
            selectVideoFunction: "&"
        }

    }
});
