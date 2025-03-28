// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>What's In The Sky?</h3>";

    const vehicleTypeTable = await fromUuid(rollTablesUUIDPrefix + "NQh0zGi2BeKYwM5p");
    let vehicleTypeRoll = await vehicleTypeTable.roll();
    let vehicleType = vehicleTypeRoll.results[0].text;

    const isCurrentlyTable = await fromUuid(rollTablesUUIDPrefix + "SEpA8L5X4TBrklN7");
    let isCurrentlyRoll = await isCurrentlyTable.roll();
    let isCurrently = isCurrentlyRoll.results[0].text;

    let message = vehicleType;
    message += " is currently " + isCurrently + ".<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}
