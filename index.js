const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const SKILL_NAME = "Mythic Plus";
const GET_AFFIX_MESSAGE = "The current affixes are ";
const HELP_MESSAGE = "You can say what are the affixes this week, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const handlers = {
    'LaunchRequest'() {
        this.emit('CurrentAffixes');
    },
    'CurrentAffixes'() {
        const speechOutput = GET_AFFIX_MESSAGE + currentAffix();
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, currentAffix());
    },
    'AMAZON.HelpIntent'() {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent'() {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent'() {
        this.emit(':tell', STOP_MESSAGE);
    }
};

exports.handler = (event, context)  => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

currentAffix = () => {
  let affixCollection = {
    week1: 'Raging, Volcanic, Tyrannical',
    week2: 'Teeming, Explosive, Fortified',
    week3: 'Bolstering, Grievous, Tyrannical',
    week4: 'Sanguine, Volcanic, Fortified',
    week5: 'Bursting, Skittish, Tyrannical',
    week6: 'Teeming, Quaking, Fortified',
    week7: 'Raging, Necrotic, Tyrannical',
    week8: 'Bolstering, Skittish, Fortified',
    week9: 'Teeming, Necrotic, Tyrannical',
    week10: 'Sanguine, Grievous, Fortified',
    week11: 'Bolstering, Explosive, Tyrannical'
  };
  let week = "week" + calculateWeeks();
  return affixCollection[week];
};

calculateWeeks = () => {
    const oneDay = 24*60*60*1000;
    let start  = new Date(Date.UTC(2017, 2, 29, 7, 0, 0));
    let today = new Date();
    let daysBetween = Math.round(Math.abs((start.getTime() - today.getTime())/(oneDay)));
    let weeks =  Math.floor(daysBetween/7);
    return (weeks%11) + 1;
};
