// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Big Screens & Infotainment</h3>";

    const bigScreenTable = await fromUuid(rollTablesUUIDPrefix + "4wwXFtYEc5AaovG0");
    let bigScreenRoll = await bigScreenTable.roll();
    let bigScreen = bigScreenRoll.results[0].text;

    const brandNameTable = await fromUuid(rollTablesUUIDPrefix + "xc2S0ra9EYYzKtPG");
    let brandNameRoll = await brandNameTable.roll();
    let brandName = brandNameRoll.results[0].text;

    const rangeTable = await fromUuid(rollTablesUUIDPrefix + "yUmR7XxYvFmdOuvi");
    let rangeRoll = await rangeTable.roll();
    let range = rangeRoll.results[0].text;

    const productLineTable = await fromUuid(rollTablesUUIDPrefix + "TI2KoXHOR9V5qXbm");
    let productLineRoll = await productLineTable.roll();
    let productLine = productLineRoll.results[0].text;

    const marketingStyleTable = await fromUuid(rollTablesUUIDPrefix + "c0UCZd2bb6vEWF4y");
    let marketingStyleRoll = await marketingStyleTable.roll();
    let marketingStyle = marketingStyleRoll.results[0].text;

    let message = "What's On That Big Screen?:<br>" + bigScreen + "<br><br>";
    message += "That's Infotainment:<br> ";
    message += "Brand Name: " + brandName + "<br>";
    message += "Range: " + range + "<br>";
    message += "Product Line: " + productLine + "<br>";
    message += "Marketing Style: " + marketingStyle + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}