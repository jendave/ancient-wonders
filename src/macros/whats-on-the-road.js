// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>What's On The Road?</h3>";

    const whatsOnTheRoadTable = await fromUuid(rollTablesUUIDPrefix + "uufZfnhmiCu1LnaU");
    let whatsOnTheRoadRoll = await whatsOnTheRoadTable.roll();
    let whatsOnTheRoad = whatsOnTheRoadRoll.results[0].text;

    const activityTable = await fromUuid(rollTablesUUIDPrefix + "hlSK4dbR1DN5SyIh");
    let activityRoll = await activityTable.roll();
    let activity = activityRoll.results[0].text;

    const notableFeatureTable = await fromUuid(rollTablesUUIDPrefix + "hDoOrQfebECLKDp0");
    let notableFeatureRoll = await notableFeatureTable.roll();
    let notableFeature = notableFeatureRoll.results[0].text;

    const conditionTable = await fromUuid(rollTablesUUIDPrefix + "neBHEYghazTEHDqg");
    let conditionRoll = await conditionTable.roll();
    let condition = conditionRoll.results[0].text;

    let message = "What's On The Road: " + whatsOnTheRoad + "<br>";
    message += "Activity: " + activity + "<br>";
    message += "Notable Feature: " + notableFeature + "<br>";
    message += "Condition: " + condition + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}