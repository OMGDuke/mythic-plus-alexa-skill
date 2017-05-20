exports.handler = (event, context) => {
  switch(event.request.intent) {
    case: 'CurrentAffixes':
      generateResponse(currentAffix());
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
  let affixes = [
    'Raging, Volcanic, Tyrannical',
    'Teeming, Explosive, Fortified',
    'Bolstering, Grievous, Tyrannical',
    'Sanguine, Volcanic, Fortified',
    'Bursting, Skittish, Tyrannical',
    'Teeming, Quaking, Fortified',
    'Raging, Necrotic, Tyrannical',
    'Bolstering, Skittish, Fortified',
    'Unknown, Unknown, Unknown',
    'Unknown, Unknown, Unknown'
  ]
  return "Affixes called"

}
