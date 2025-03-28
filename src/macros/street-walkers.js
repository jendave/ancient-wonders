// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Street Walkers</h3>";

    const sexWorkersTable = await fromUuid(rollTablesUUIDPrefix + "bjY4AYUxwYsGuwFS");
    let sexWorkersRoll = await sexWorkersTable.roll();
    let sexWorkers = sexWorkersRoll.results[0].text;

    const identifiesAsTable = await fromUuid(rollTablesUUIDPrefix + "NshU4fj9cVCdpbEZ");
    let identifiesAsRoll = await identifiesAsTable.roll();
    let identifiesAs = identifiesAsRoll.results[0].text;

    let message = "Sex Workers: " + sexWorkers + "<br>";
    message += "Identifies As: " + identifiesAs + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}