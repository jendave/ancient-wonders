// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>What's On The River?</h3>";

    const whatsOnTheRiverTable = await fromUuid(rollTablesUUIDPrefix + "KRIRlLWK8zoS0tFu");
    let whatsOnTheRiverRoll = await whatsOnTheRiverTable.roll();
    let whatsOnTheRiver = whatsOnTheRiverRoll.results[0].text;

    let message = whatsOnTheRiver;

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}