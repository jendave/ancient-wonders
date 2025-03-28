// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>50 Mysterious First Contacts</h3>";

    const mysteriousContactsTable = await fromUuid(rollTablesUUIDPrefix + "iPt7lj912VWk1klW");
    let mysteriousContactsRoll = await mysteriousContactsTable.roll();
    let mysteriousContacts = mysteriousContactsRoll.results[0].text;

    let message = mysteriousContacts;

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}