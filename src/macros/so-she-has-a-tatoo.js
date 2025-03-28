// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>So, She Has A Tattoo</h3>";

    const whatTable = await fromUuid(rollTablesUUIDPrefix + "Pbm1AxzWKu8wLmqY");
    let whatRoll = await whatTable.roll();
    let what = whatRoll.results[0].text;

    const styleTable = await fromUuid(rollTablesUUIDPrefix + "ZFOTAl9ga0lBzX6C");
    let styleRoll = await styleTable.roll();
    let style = styleRoll.results[0].text;

    const whereTable = await fromUuid(rollTablesUUIDPrefix + "dL6O2ixp5s4LsJMX");
    let whereRoll = await whereTable.roll();
    let where = whereRoll.results[0].text;

    let message = "What: " + what + "<br>";
    message += "Style: " + style + "<br>";
    message += "Where: " + where + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}