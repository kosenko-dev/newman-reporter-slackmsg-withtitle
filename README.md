# newman-reporter-slackmsgwithtitle

Custom [Newman](https://github.com/postmanlabs/newman) reporter to send message to [Slack](https://slack.com/)

<img src="https://github.com/kosenko-dev/newman-reporter-slackmsgwithtitle/blob/master/testResults.png?raw=true" width="450"  height="400">

## Before you get started
- Install [Newman](https://github.com/postmanlabs/newman) ``` $ npm run i -g newman ```
- Create a [Slack incoming webhook url](https://api.slack.com/messaging/webhooks)

## Installation
 ```CLI
 npm i -g newman-reporter-slackmsgwithtitle
 ```

## Usage
 ```CLI
 newman run <collectionFile> -e <environmentFile> --suppress-exit-code -r slackmsgwithtitle --reporter-slackmsgwithtitle-webhookurl '<webhookurl>'
 ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
