
angular.module('starter.services', [])
.factory('frcapiService', function ($http) {

    var config = {
        headers: {
            //'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
            'Accept': 'application/json;odata=verbose',
            'x-tba-app-id': 'frc3966:team-analysis:0.2'
        }
    };

    function getTeamsFunc(pageNum) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/teams/' + pageNum,
            headers: config.headers
        });
    }

    function getTeamFunc(teamKey) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/team/' + teamKey,
            headers: config.headers
        });
    }


    function getEventsFunc(year) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/events/' + year,
            headers: config.headers
        });
    }
    function getEventFunc(eventKey) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/event/' + eventKey,
            headers: config.headers
        });
    }

    function getEventTeamsFunc(eventKey) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/event/' + eventKey + '/teams',
            headers: config.headers
        });
    }
    function getEventMatchesFunc(eventKey) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/event/' + eventKey + '/matches',
            headers: config.headers
        });
    }

    function getTeamEventsFunc(teamKey, year) {
        return $http({
            method: 'GET',
            url: 'http://www.thebluealliance.com/api/v2/team/' + teamKey + '/' + year + '/events',
            headers: config.headers
        });
    }

    return {
        getTeams: getTeamsFunc,
        getTeam: getTeamFunc,
        getEvents: getEventsFunc,
        getEvent: getEventFunc,
        getEventTeams: getEventTeamsFunc,
        getEventMatches: getEventMatchesFunc,
        getTeamEvents: getTeamEventsFunc,

    }
}
)

