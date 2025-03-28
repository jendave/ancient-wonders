// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Things People Do</h3>";

    const freakFightersTable = await fromUuid(rollTablesUUIDPrefix + "6GIeqOnjnXOpO1pE");
    let freakFightersRoll = await freakFightersTable.roll();
    let freakFighters = freakFightersRoll.results[0].text;

    const gigEconomyTable = await fromUuid(rollTablesUUIDPrefix + "Z9AepG3NVXs8MN5r");
    let gigEconomyRoll = await gigEconomyTable.roll();
    let gigEconomy = gigEconomyRoll.results[0].text;

    const unlawfulTrespassTable = await fromUuid(rollTablesUUIDPrefix + "11gRI4JXqjhWnq1n");
    let unlawfulTrespassRoll = await unlawfulTrespassTable.roll();
    let unlawfulTrespass = unlawfulTrespassRoll.results[0].text;

    let message = "Freak Fighters: " + freakFighters + "<br><br>";
    message += "Gig Economy: " + gigEconomy + "<br><br>";
    message += "Unlawful Trespass: " + unlawfulTrespass + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}