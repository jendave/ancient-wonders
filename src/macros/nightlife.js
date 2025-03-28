// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Nightlife</h3>";

    const barTable = await fromUuid(rollTablesUUIDPrefix + "9HiS7NikrmTH2Udz");
    let barRoll = await barTable.roll();
    let bar = barRoll.results[0].text;

    const statusTable = await fromUuid(rollTablesUUIDPrefix + "adQjdk4F0PTndjAt");
    let statusRoll = await statusTable.roll();
    let status = statusRoll.results[0].text;

    const securityTable = await fromUuid(rollTablesUUIDPrefix + "AT8WDSZ5xV8Kg685");
    let securityRoll = await securityTable.roll();
    let security = securityRoll.results[0].text;

    const vibeTable = await fromUuid(rollTablesUUIDPrefix + "tcjcqaSfu6p3NnTI");
    let vibeRoll = await vibeTable.roll();
    let vibe = vibeRoll.results[0].text;

    let message = "Bar or Club: " + bar + "<br>";
    message += "Status: " + status + "<br>";
    message += "Security: " + security + "<br>";
    message += "Vibe: " + vibe + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}
