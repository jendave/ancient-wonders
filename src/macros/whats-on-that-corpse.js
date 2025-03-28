// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>What's On That Corpse?</h3>";

    const whatsOnThatCorpseTable = await fromUuid(rollTablesUUIDPrefix + "55gomDlMCDdGDJ5J");
    let whatsOnThatCorpseRoll = await whatsOnThatCorpseTable.roll();
    let whatsOnThatCorpse = whatsOnThatCorpseRoll.results[0].text;

    let message = "What's On That Corpse?: " + whatsOnThatCorpse + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}