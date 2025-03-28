// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Armed Response</h3>";

    const firstRespondersTable = await fromUuid(rollTablesUUIDPrefix + "ctcriSpGlyXrJvX9");
    let firstRespondersRoll = await firstRespondersTable.roll();
    let firstResponders = firstRespondersRoll.results[0].text;
    let firstRespondersTotal = firstRespondersRoll.roll.total
    let wearingRiotGear = false;

    if (firstRespondersTotal >= 3 && firstRespondersTotal <= 8 && firstRespondersTotal % 2 == 1) {
        wearingRiotGear = true;
    }

    const departmentTable = await fromUuid(rollTablesUUIDPrefix + "6MUwF4DBtsyKdkEN");
    let departmentRoll = await departmentTable.roll();
    let department = departmentRoll.results[0].text;

    const responseLevelTable = await fromUuid(rollTablesUUIDPrefix + "g8hRofgrpgRLOKrQ");
    let responseLevelRoll = await responseLevelTable.roll();
    let responseLevel = responseLevelRoll.results[0].text;

    const jobSheetTable = await fromUuid(rollTablesUUIDPrefix + "hXgc3qwgHNOGYAYF");
    let jobSheetRoll = await jobSheetTable.roll();
    let jobSheet = jobSheetRoll.results[0].text;

    let callForBackupETARoll = new Roll('1d6');
    await callForBackupETARoll.evaluate();
    let callForBackupETA = callForBackupETARoll.total;

    const callForBackupTable = await fromUuid(rollTablesUUIDPrefix + "ZarDaMOR5VLYO9nc");
    let callForBackupRoll = await callForBackupTable.roll();
    let callForBackup = callForBackupRoll.results[0].text;

    let message = "First Responders: " + firstResponders + (wearingRiotGear ? "<br>Wearing Riot Gear" : "") + "<br><br>";
    message += "The Department: " + department + "<br><br>";
    message += "Response Level: " + responseLevel + "<br><br>";
    message += "Job Sheet: " + jobSheet + "<br><br>";
    message += "Call For Backup: " + callForBackup + "<br><br>";
    message += "ETA: " + callForBackupETA + " Minute(s)";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}