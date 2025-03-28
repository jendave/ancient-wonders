// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Guns For Hire</h3>";

    const nameTable = await fromUuid(rollTablesUUIDPrefix + "1fbVZi8u2cG6qHmg");
    let nameRoll = await nameTable.roll();
    let name = nameRoll.results[0].text;

    const descriptionTable = await fromUuid(rollTablesUUIDPrefix + "IRrr7pJOujIV2sXx");
    let descriptionRoll = await descriptionTable.roll();
    let description = descriptionRoll.results[0].text;

    const weaponTable = await fromUuid(rollTablesUUIDPrefix + "aZKBB9s8eyY9xhOV");
    let weaponRoll = await weaponTable.roll();
    let weapon = weaponRoll.results[0].text;

    const appearanceTable = await fromUuid(rollTablesUUIDPrefix + "P3YYg8aOMccbbxua");
    let appearanceRoll = await appearanceTable.roll();
    let appearance = appearanceRoll.results[0].text;

    const relationshipTable = await fromUuid(rollTablesUUIDPrefix + "NVZJfBpnpQxRdKHF");
    let relationshipRoll = await relationshipTable.roll();
    let relationship = relationshipRoll.results[0].text;

    let message = "Name: " + name + "<br>";
    message += "Description: " + description + "<br>";
    message += "Weapon: " + weapon + "<br>";
    message += "Appearance/Demeanour: " + appearance + "<br>";
    message += "Relationship: " + relationship + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}