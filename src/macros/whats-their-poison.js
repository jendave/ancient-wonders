// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>What's Their Poison?</h3>";

    const peccadillosTable = await fromUuid(rollTablesUUIDPrefix + "DucGtnHL96UfS0FI");
    let peccadillosRoll = await peccadillosTable.roll();
    let peccadillos = peccadillosRoll.results[0].text;

    const levelOfNeedTable = await fromUuid(rollTablesUUIDPrefix + "6pCBgqgZHep8ihXE");
    let levelOfNeedRoll = await levelOfNeedTable.roll();
    let levelOfNeed = levelOfNeedRoll.results[0].text;

    let message = "Peccadillos: " + peccadillos + "<br>";
    message += "Level Of Need: " + levelOfNeed + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}