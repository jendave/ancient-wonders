// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Random Cabbies</h3>";

    const appearanceTable = await fromUuid(rollTablesUUIDPrefix + "furEiJ1WH8B00qW8");
    let appearanceRoll = await appearanceTable.roll();
    let appearance = appearanceRoll.results[0].text;

    const nationalityTable = await fromUuid(rollTablesUUIDPrefix + "jnUXB1vmA1bPSa7O");
    let nationalityRoll = await nationalityTable.roll();
    let nationality = nationalityRoll.results[0].text;

    const conversationTopicTable = await fromUuid(rollTablesUUIDPrefix + "r1SlGvUxWFSp6gx2");
    let conversationTopicRoll = await conversationTopicTable.roll();
    let conversationTopic = conversationTopicRoll.results[0].text;

    const demeanourTable = await fromUuid(rollTablesUUIDPrefix + "88FkIZSEL1jN3fub");
    let demeanourRoll = await demeanourTable.roll();
    let demeanour = demeanourRoll.results[0].text;

    const genderTable = await fromUuid(rollTablesUUIDPrefix + "V8ONNipLiOtZhDNZ");
    let genderRoll = await genderTable.roll();
    let gender = genderRoll.results[0].text;

    let message = "Appearance: " + appearance + "<br>";
    message += "Nationality: " + nationality + "<br>";
    message += "Conversation Topic: " + conversationTopic + "<br>";
    message += "Demeanour: " + demeanour + "<br>";
    message += "Gender: " + gender + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}
