angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

})

.controller('TeamsCtrl', function ($scope, $stateParams, frcapiService) {
    $scope.pageNumber = 0;
    $scope.allTeamsLoaded = false;
    $scope.teams = [];
    frcapiService.getTeams($scope.pageNumber).then(function (response) {
        $scope.teams = response.data;
    })

    $scope.loadMoreData = function () {
        $scope.pageNumber = $scope.pageNumber + 1;
        console.log("loading page number: " + $scope.pageNumber);
        frcapiService.getTeams($scope.pageNumber).then(function (response) {

            if (response.data && response.data.length) {
                $scope.teams = $scope.teams.concat(response.data);
                console.log("total num teams: " + $scope.teams.length);
            }
            else {

                $scope.allTeamsLoaded = true;
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
        })
    }

    $scope.moreDataCanBeLoaded = function () {
        return !$scope.allTeamsLoaded;
    }
})

.controller('TeamCtrl', function ($scope, $stateParams, frcapiService) {

    $scope.team = {};
    frcapiService.getTeam($stateParams.key).then(function (response) {
        $scope.team = response.data;
    })

})
    .controller('EventsCtrl', function ($scope, $stateParams, frcapiService) {
        $scope.year = 2016;
        $scope.events = [];
        frcapiService.getEvents($scope.year).then(function (response) {
            $scope.events = response.data;
        })

    })

.controller('EventCtrl', function ($scope, $stateParams, frcapiService) {

    $scope.event = {};
    frcapiService.getEvent($stateParams.key).then(function (response) {
        $scope.event = response.data;
    })
    frcapiService.getEventTeams($stateParams.key).then(function (response) {
        $scope.teams = response.data;
    })

    frcapiService.getEventMatches($stateParams.key).then(function (response) {
        $scope.matches = response.data;
    })
})
.controller('MatchCtrl', function ($scope, $stateParams) {
});
