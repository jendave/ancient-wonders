// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Games Corporates Play</h3>";

    const manoeuvresTable = await fromUuid(rollTablesUUIDPrefix + "Ajc1ujGCTT2Fnyx5");
    let manoeuvresRoll = await manoeuvresTable.roll();
    let manoeuvres = manoeuvresRoll.results[0].text;

    const resourcesTable = await fromUuid(rollTablesUUIDPrefix + "hbthYW5J71rGmV0M");
    let resourcesRoll = await resourcesTable.roll();
    let resources = resourcesRoll.results[0].text;

    let message = "Boardroom Manoeuvres: " + manoeuvres + "<br>";
    message += "Company Resources: " + resources + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}
