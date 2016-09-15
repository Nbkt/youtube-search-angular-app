<<<<<<< HEAD
// CONTROLLERS
youtubeSearchApp.controller('youtubeController', ['$scope', '$sce', 'youtubeFactory', function($scope, $sce, youtubeFactory) {

    $scope.term = 'home resonance (Original Soundtrack)';
    $scope.selectedVideo = '';
    $scope.frameUrl = '';

    var API_KEY = "AIzaSyAXl5K3rurKdpW3-tsIOPOTDUqYqjvYv_c";

    var getVideo = function() {
        youtubeFactory.getVideosFromSearchByParams({
            q: $scope.term, // (optional) search string
            maxResults: "5", // (optional) valid values: 0-50 | default: 5
            regionCode: "US",
            key: API_KEY,
        }).then(function (_data) {
            $scope.youtubeSearchResult = _data;
            $scope.selectedVideo =  $scope.youtubeSearchResult.data.items[0];
            $scope.frameUrl = "https://www.youtube.com/embed/" + $scope.selectedVideo.id.videoId;
            $scope.frameUrl = $sce.trustAsResourceUrl($scope.frameUrl);
        }).catch(function (_data) {
            console.log('Error!');
        });
    };
    getVideo();

    $scope.$watch('term', function() {
        getVideo();
    })

    $scope.submit = function() {
        getVideo();
    }

    $scope.selectVideo = function(video,frameUrl) {
        $scope.selectedVideo = video;
        $scope.frameUrl = "https://www.youtube.com/embed/" + $scope.selectedVideo.id.videoId;
        $scope.frameUrl = $sce.trustAsResourceUrl($scope.frameUrl);
    }

}]);
=======
// CONTROLLERS
youtubeSearchApp.controller('youtubeController', ['$scope', '$sce', 'youtubeFactory', function($scope, $sce, youtubeFactory) {

    $scope.term = 'Electronic Gems';
    $scope.selectedVideo = '';
    $scope.frameUrl = '';

    var API_KEY = "AIzaSyAXl5K3rurKdpW3-tsIOPOTDUqYqjvYv_c";

    var getVideo = function() {
        youtubeFactory.getVideosFromSearchByParams({
            q: $scope.term, // (optional) search string
            maxResults: "5", // (optional) valid values: 0-50 | default: 5
            regionCode: "US",
            key: API_KEY,
        }).then(function (_data) {
            $scope.youtubeSearchResult = _data;
            $scope.selectedVideo =  $scope.youtubeSearchResult.data.items[0];
            $scope.frameUrl = "https://www.youtube.com/embed/" + $scope.selectedVideo.id.videoId;
            $scope.frameUrl = $sce.trustAsResourceUrl($scope.frameUrl);
        }).catch(function (_data) {
            console.log('Error!');
        });
    };
    getVideo();

    $scope.$watch('term', function() {
        getVideo();
    })

    $scope.submit = function() {
        getVideo();
    }

    $scope.selectVideo = function(video,frameUrl) {
        $scope.selectedVideo = video;
        $scope.frameUrl = "https://www.youtube.com/embed/" + $scope.selectedVideo.id.videoId;
        $scope.frameUrl = $sce.trustAsResourceUrl($scope.frameUrl);
    }

}]);
>>>>>>> a6db2b562fd0fe7830466614331e6a62acfe6bb2
