// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Mr Johnson Job Generator: Things</h3>";

    const clientTable = await fromUuid(rollTablesUUIDPrefix + "2AvzNXI6XFVz7McX");
    let clientRoll = await clientTable.roll();
    let client = clientRoll.results[0].text;

    const wantTable = await fromUuid(rollTablesUUIDPrefix + "eEBXUZuuCNBx3gTl");
    let wantRoll = await wantTable.roll();
    let want = wantRoll.results[0].text;

    const actionTable = await fromUuid(rollTablesUUIDPrefix + "SMTkIqUZ3PjZd7oS");
    let actionRoll = await actionTable.roll();
    let action = actionRoll.results[0].text;

    const targetItemTable = await fromUuid(rollTablesUUIDPrefix + "VuDTU5kzYbKDeI08");
    let targetItemRoll = await targetItemTable.roll();
    let targetItem = targetItemRoll.results[0].text;

    let message = "Client: " + client + "<br>";
    message += "Want: " + want + "<br>";
    message += "Action: " + action + "<br>";
    message += "Target Item: " + targetItem + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}