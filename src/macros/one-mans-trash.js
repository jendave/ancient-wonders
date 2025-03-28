// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>One Man's Trash...?</h3>";

    const oneMansTrashTable = await fromUuid(rollTablesUUIDPrefix + "pUjJJy6YTISP6uEC");
    let oneMansTrashRoll = await oneMansTrashTable.roll();
    let oneMansTrash = oneMansTrashRoll.results[0].text;

    let message = "One Man's Trash...: " + oneMansTrash + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}