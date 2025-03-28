// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>The Street Finds Its Uses For Things</h3>";

    const streetFindsTable = await fromUuid(rollTablesUUIDPrefix + "DZRvR9tah4MdCthW");
    let streetFindsRoll = await streetFindsTable.roll();
    let streetFinds = streetFindsRoll.results[0].text;

    let message = "The Street Finds Its Uses For Things: " + streetFinds + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}