var kayn = require('kayn');
//const riotAPI = require('riot-api');
var LeagueJS = require('leaguejs');
var leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY);
leagueJs.Summoner
    .gettingByName('GreenHam09')
    .then(function (data) {
    'use strict';
    console.log(data);
})
    .catch(function (err) {
    'use strict';
    console.log(err);
});
