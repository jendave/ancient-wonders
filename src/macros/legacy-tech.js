// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Legacy Tech</h3>";

    const infrastructureTable = await fromUuid(rollTablesUUIDPrefix + "NA4ZrtCfMCwhS6BM");
    let infrastructureRoll = await infrastructureTable.roll();
    let infrastructure = infrastructureRoll.results[0].text;

    const dataTable = await fromUuid(rollTablesUUIDPrefix + "wvQIsXsFCDUZzy1N");
    let dataRoll = await dataTable.roll();
    let data = dataRoll.results[0].text;

    let message = "Legacy Infrastructure: " + infrastructure + "<br><br>";
    message += "Legacy Data: " + data;

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}