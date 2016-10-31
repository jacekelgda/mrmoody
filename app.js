var Slack = require('node-slackr');
var config = require('config');

slack = new Slack(config.get('incoming_webhook.url'));
message = {
    "text": "Happy Friday! How was your week?",
    "channel": "#jacek-ops-journal",
    "attachments": [
        {
            "fallback": "Something went wrong",
            "callback_id": "mrmoody_v1",
            "color": "#36a64f",
            "attachment_type": "default",
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
};
slack.notify(message);
