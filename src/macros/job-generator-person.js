// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Mr Johnson Job Generator: People</h3>";

    const clientTable = await fromUuid(rollTablesUUIDPrefix + "KVM2GMLxeentUEig");
    let clientRoll = await clientTable.roll();
    let client = clientRoll.results[0].text;

    const wantTable = await fromUuid(rollTablesUUIDPrefix + "EAK1aAUVaQdfLZaT");
    let wantRoll = await wantTable.roll();
    let want = wantRoll.results[0].text;

    const actionTable = await fromUuid(rollTablesUUIDPrefix + "xJNkSu1KXPiQ2GoG");
    let actionRoll = await actionTable.roll();
    let action = actionRoll.results[0].text;

    const targetPersonTable = await fromUuid(rollTablesUUIDPrefix + "O7bwZWfLVwPkIeA3");
    let targetPersonRoll = await targetPersonTable.roll();
    let targetPerson = targetPersonRoll.results[0].text;

    let message = "Client: " + client + "<br>";
    message += "Want: " + want + "<br>";
    message += "Action: " + action + "<br>";
    message += "Target Person: " + targetPerson + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}