exports.handler = (event, context) => {
  switch(event.request.intent) {
    case: 'CurrentAffixes':
      generateResponse('The current affixes are 'currentAffix());
  }
};

generateResponse = (outputText) => {
  return {
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: outputText
      }
    }
  }
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
    week8: 'Bolstering, Skittish, Fortified'
  };
  let week = "week" + this.calculateWeeks();
  return affixCollection[week]
};

calculateWeeks = () => {
    const oneDay = 24*60*60*1000;
    let start  = new Date(Date.UTC(2017, 2, 29, 7, 0, 0));
    let today = new Date();
    let daysBetween = Math.round(Math.abs((start.getTime() - today.getTime())/(oneDay)));
    let weeks =  Math.floor(daysBetween/7);
    return (weeks%8) + 1;
}
