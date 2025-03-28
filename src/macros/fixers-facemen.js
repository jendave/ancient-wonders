// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Fixers & Facemen</h3>";

    const nameTable = await fromUuid(rollTablesUUIDPrefix + "Ne5NIoLic9aCSwHq");
    let nameRoll = await nameTable.roll();
    let name = nameRoll.results[0].text;

    const descriptionTable = await fromUuid(rollTablesUUIDPrefix + "qDnY3aLcnsDkp0Rv");
    let descriptionRoll = await descriptionTable.roll();
    let description = descriptionRoll.results[0].text;

    const jobTable = await fromUuid(rollTablesUUIDPrefix + "TBerUa1mROmeJfYS");
    let jobRoll = await jobTable.roll();
    let job = jobRoll.results[0].text;

    const appearanceTable = await fromUuid(rollTablesUUIDPrefix + "CrKB37FUtv4TkXMI");
    let appearanceRoll = await appearanceTable.roll();
    let appearance = appearanceRoll.results[0].text;

    const relationshipTable = await fromUuid(rollTablesUUIDPrefix + "h7zIYAUmO5LsZRKZ");
    let relationshipRoll = await relationshipTable.roll();
    let relationship = relationshipRoll.results[0].text;

    let message = "Name: " + name + "<br>";
    message += "Description: " + description + "<br>";
    message += "Job: " + job + "<br>";
    message += "Appearance/Demeanour: " + appearance + "<br>";
    message += "Relationship: " + relationship + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}