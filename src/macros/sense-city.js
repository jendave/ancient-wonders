// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Sense & The City</h3>";

    const smellsTable = await fromUuid(rollTablesUUIDPrefix + "iWLStgXfVtgeHzIK");
    let smellsRoll = await smellsTable.roll();
    let smells = smellsRoll.results[0].text;

    const soundsTable = await fromUuid(rollTablesUUIDPrefix + "icpvSJXwHC4bofth");
    let soundsRoll = await soundsTable.roll();
    let sounds = soundsRoll.results[0].text;

    const sightsTable = await fromUuid(rollTablesUUIDPrefix + "bja46Iy7QIojAUuv");
    let sightsRoll = await sightsTable.roll();
    let sights = sightsRoll.results[0].text;

    let message = "Smells: " + smells + "<br>";
    message += "Sounds: " + sounds + "<br>";
    message += "Sights: " + sights + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}