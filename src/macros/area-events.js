// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Area Events</h3>";

    const eventTable = await fromUuid(rollTablesUUIDPrefix + "OP5y7bXVaCserKRH");
    let eventRoll = await eventTable.roll();
    let event = eventRoll.results[0].text;

    const leadingToTable = await fromUuid(rollTablesUUIDPrefix + "93WLYbv7Hg6OBazZ");
    let leadingToRoll = await leadingToTable.roll();
    let leadingTo = leadingToRoll.results[0].text;

    let message = event;
    message += " leading to " + leadingTo + ".<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}
