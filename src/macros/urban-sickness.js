// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Urban Sickness</h3>";

    const urbanSicknessTable = await fromUuid(rollTablesUUIDPrefix + "oD4Zf2F89eMbClUL");
    let urbanSicknessRoll = await urbanSicknessTable.roll();
    let urbanSickness = urbanSicknessRoll.results[0].text;

    let message = "Urban Sickness:<br>";
    message += "Symptoms - Cause - Malady<br><br>";
    message += urbanSickness + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}