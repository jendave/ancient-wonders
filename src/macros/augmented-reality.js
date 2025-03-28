// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Augmented Reality</h3>";

    const augmentedRealityTable = await fromUuid(rollTablesUUIDPrefix + "LnPEyTcIEqMGaOYZ");
    let augmentedRealityRoll = await augmentedRealityTable.roll();
    let augmentedReality = augmentedRealityRoll.results[0].text;

    let message = augmentedReality;

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}