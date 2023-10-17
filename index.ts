const kayn = require('kayn');
//const riotAPI = require('riot-api');
const LeagueJS = require('leaguejs');

const leagueJs = new LeagueJS(process.env.LEAGUE_API_KEY)
leagueJs.Summoner
	.gettingByName('GreenHam09')
	.then(data => {
		'use strict';
		console.log(data);
	})
	.catch(err => {
		'use strict';
		console.log(err);
	});
