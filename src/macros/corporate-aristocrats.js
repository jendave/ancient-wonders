// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Corporate Aristocrats</h3>";

    const givenNameTable = await fromUuid(rollTablesUUIDPrefix + "qDgczL3VTg3uEHct");
    let givenNameRoll = await givenNameTable.roll();
    let givenName = givenNameRoll.results[0].text;

    const familyNameTable = await fromUuid(rollTablesUUIDPrefix + "DLoLTBuo9Oc5K7ub");
    let familyNameRoll = await familyNameTable.roll();
    let familyName = familyNameRoll.results[0].text;

    const personalDetails1Table = await fromUuid(rollTablesUUIDPrefix + "9IlOAwRzsqm33WaY");
    let personalDetails1Roll = await personalDetails1Table.roll();
    let personalDetails1 = personalDetails1Roll.results[0].text;

    const personalDetails2Table = await fromUuid(rollTablesUUIDPrefix + "0ezmaGieyMrvpHut");
    let personalDetails2Roll = await personalDetails2Table.roll();
    let personalDetails2 = personalDetails2Roll.results[0].text;

    const appearanceTable = await fromUuid(rollTablesUUIDPrefix + "4j56HwCjUO0ok6Cb");
    let appearanceRoll = await appearanceTable.roll();
    let appearance = appearanceRoll.results[0].text;

    const relationshipTable = await fromUuid(rollTablesUUIDPrefix + "2LOTvrs3s0YB8sNP");
    let relationshipRoll = await relationshipTable.roll();
    let relationship = relationshipRoll.results[0].text;

    let message = "Given Name: " + givenName + "<br>";
    message += "Family Name: " + familyName + "<br>";
    message += "Personal Details 1: " + personalDetails1 + "<br>";
    message += "Personal Details 2: " + personalDetails2 + "<br>";
    message += "Appearance/Demeanour: " + appearance + "<br>";
    message += "Relationship: " + relationship + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}