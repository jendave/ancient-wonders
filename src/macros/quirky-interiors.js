// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Quirky Interiors</h3>";

    const styleTable = await fromUuid(rollTablesUUIDPrefix + "xl4GhEfHYejxMJYy");
    let styleRoll = await styleTable.roll();
    let style = styleRoll.results[0].text;

    const stateTable = await fromUuid(rollTablesUUIDPrefix + "1D2T6eECmWjoxvHG");
    let stateRoll = await stateTable.roll();
    let state = stateRoll.results[0].text;

    const unusualFeatureTable = await fromUuid(rollTablesUUIDPrefix + "deB5R3etgC8F0RIH");
    let unusualFeatureRoll = await unusualFeatureTable.roll();
    let unusualFeature = unusualFeatureRoll.results[0].text;

    const secretTable = await fromUuid(rollTablesUUIDPrefix + "MYjpY03lBLcaLPaS");
    let secretRoll = await secretTable.roll();
    let secret = secretRoll.results[0].text;

    let message = "Style: " + style + "<br>";
    message += "State: " + state + "<br>";
    message += "Unusual Feature: " + unusualFeature + "<br>";
    message += "Secret: " + secret + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}