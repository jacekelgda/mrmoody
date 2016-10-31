const config = require('config');
const https = require('https');
const postMessageMethod = 'chat.postMessage';
const slackChannels = ['jacek-test-journal', '@jacek.lawniczak'];
const attachments = JSON.stringify(
  [
    {
      "fallback": "Something went wrong",
      "pretext": "How was your week ?",
      "callback_id": "mrmoody_v1",
      "attachment_type": "default",
      "color": "good",
      "actions": [
          {
              "name": "smile",
              "text": ":smile:",
              "type": "button",
              "value": "smile"
          },
          {
              "name": "neutral_face",
              "text": ":neutral_face:",
              "type": "button",
              "value": "neutral_face"
          },
          {
              "name": "disappointed",
              "text": ":disappointed:",
              "type": "button",
              "value": "disappointed"
          }
      ]
    }
  ]
);

for(var channelName in slackChannels){
    url = 'https://slack.com/api/' + postMessageMethod +
      '?token=' + config.get('api.oauth.api_token') +
      '&channel=' + slackChannels[channelName] +
      '&attachments=' + attachments;

    https.get(url, (res) => {
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    }).on('error', (e) => {
      console.error(e);
    });
}
