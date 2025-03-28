// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Hackers & Slicers</h3>";

    const nameTable = await fromUuid(rollTablesUUIDPrefix + "vyiwcuBj4QKHvLsl");
    let nameRoll = await nameTable.roll();
    let name = nameRoll.results[0].text;

    const description1Table = await fromUuid(rollTablesUUIDPrefix + "W6bXVx0XGinnN072");
    let description1Roll = await description1Table.roll();
    let description1 = description1Roll.results[0].text;

    const description2Table = await fromUuid(rollTablesUUIDPrefix + "HnhtGGfGWV9UjGS5");
    let description2Roll = await description2Table.roll();
    let description2 = description2Roll.results[0].text;

    const appearanceTable = await fromUuid(rollTablesUUIDPrefix + "91h7zOuRZbBqNHsn");
    let appearanceRoll = await appearanceTable.roll();
    let appearance = appearanceRoll.results[0].text;

    const relationshipTable = await fromUuid(rollTablesUUIDPrefix + "ZkerZM2PLfgmNpGY");
    let relationshipRoll = await relationshipTable.roll();
    let relationship = relationshipRoll.results[0].text;

    let message = "Name: " + name + "<br>";
    message += "Description 1: " + description1 + "<br>";
    message += "Description 2: " + description2 + "<br>";
    message += "Appearance/Demeanour: " + appearance + "<br>";
    message += "Relationship: " + relationship + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}