// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Technical Details</h3>";

    const conditionOfTechnologyTable = await fromUuid(rollTablesUUIDPrefix + "1YBhtB5Fx5kTvJGZ");
    let conditionOfTechnologyRoll = await conditionOfTechnologyTable.roll();
    let conditionOfTechnology = conditionOfTechnologyRoll.results[0].text;

    const typeOfDeviceTable = await fromUuid(rollTablesUUIDPrefix + "1Y7A6X6MKiY3d9RQ");
    let typeOfDeviceRoll = await typeOfDeviceTable.roll();
    let typeOfDevice = typeOfDeviceRoll.results[0].text;

    const dataMiningTable = await fromUuid(rollTablesUUIDPrefix + "0W0tmypyJCXMdZYc");
    let dataMiningRoll = await dataMiningTable.roll();
    let dataMining = dataMiningRoll.results[0].text;

    const wheresItBeenTable = await fromUuid(rollTablesUUIDPrefix + "tjnDQ9lHGbGB5mKs");
    let wheresItBeenRoll = await wheresItBeenTable.roll();
    let wheresItBeen = wheresItBeenRoll.results[0].text;

    let message = "Condition Of Technology: " + conditionOfTechnology + "<br><br>";
    message += "Type Of Device: " + typeOfDevice + "<br><br>";
    message += "Data Mining: " + dataMining + "<br><br>";
    message += "Where's It Been?: " + wheresItBeen + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}