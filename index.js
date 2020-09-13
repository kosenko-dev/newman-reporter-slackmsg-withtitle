const {
    slackUtils
} = require('./slackUtils');

function SlackNewmanReporter(emitter, reporterOptions) {
    if (missingReporterOptions(reporterOptions)) {
        return;
    }
    const webhookUrl = process.env.SLACK_WEBHOOK_URL || reporterOptions.webhookurl;
    const hyperlink = process.env.HYPERLINK || reporterOptions.hyperlink;
    const title = process.env.TITLE || reporterOptions.title;
    emitter.on('done', (error, summary) => {
        if (error) {
            console.error('error in done')
            return;
        }
        let run = summary.run;
        slackUtils.send(webhookUrl, slackUtils.slackMessage(title, run.stats, run.timings, run.failures, hyperlink));
    });
    
    function missingReporterOptions(reporterOptions) {
        let missing = false;
        if (!reporterOptions.webhookurl) {
            console.error('Missing Slack Webhook Url');
            missing = true;
        }
        return missing;
    }
}
module.exports = SlackNewmanReporter
