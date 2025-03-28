// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Strange Encounters</h3>";

    const blackOpsTable = await fromUuid(rollTablesUUIDPrefix + "VwWSQUZM6Em08qJi");
    let blackOpsRoll = await blackOpsTable.roll();
    let blackOps = blackOpsRoll.results[0].text;

    const bioHorrorsTable = await fromUuid(rollTablesUUIDPrefix + "7f0OaXZvX59bDVGR");
    let bioHorrorsRoll = await bioHorrorsTable.roll();
    let bioHorrors = bioHorrorsRoll.results[0].text;

    const atypicalWeatherTable = await fromUuid(rollTablesUUIDPrefix + "5o74TqIF9d7XFipz");
    let atypicalWeatherRoll = await atypicalWeatherTable.roll();
    let atypicalWeather = atypicalWeatherRoll.results[0].text;

    let message = "Black Ops: " + blackOps + "<br><br>";
    message += "Bio Horrors: " + bioHorrors + "<br><br>";
    message += "Atypical Weather: " + atypicalWeather + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}