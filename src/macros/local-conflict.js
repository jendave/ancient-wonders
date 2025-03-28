// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Local Conflict</h3>";

    const conflictGroupTable = await fromUuid(rollTablesUUIDPrefix + "g09CJXdadlx2ZEnf");
    let conflictGroupRoll = await conflictGroupTable.roll();
    let conflictGroup = conflictGroupRoll.results[0].text;

    const conflictSourceTable = await fromUuid(rollTablesUUIDPrefix + "pvT3vHQX1g2M8XM5");
    let conflictSourceRoll = await conflictSourceTable.roll();
    let conflictSource = conflictSourceRoll.results[0].text;

    const opposingGroupTable = await fromUuid(rollTablesUUIDPrefix + "67AIv10QUwMTatQh");
    let opposingGroupRoll = await opposingGroupTable.roll();
    let opposingGroup = opposingGroupRoll.results[0].text;

    let message = "Conflict Group: " + conflictGroup + "<br>";
    message += "Conflict Source: " + conflictSource + "<br>";
    message += "Opposing Group: " + opposingGroup + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}
