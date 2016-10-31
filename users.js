var Slack = require('slack-node');
var config = require('config');

slack = new Slack(config.get('api.oauth.api_token'));
slack.api('users.list', {
}, function(err, response){

  for(var index in response.members){
    if(!response.members[index].is_bot && !response.members[index].deleted) {

      if(response.members[index].name == 'jacek.lawniczak') {
          console.log(index + ' ' + response.members[index].name);
      }
    }
  }
  // debug one
  //console.log(response.members[161]);
});
