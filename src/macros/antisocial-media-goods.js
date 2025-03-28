// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Antisocial Media and Goods</h3>";

    const sonicYouthTable = await fromUuid(rollTablesUUIDPrefix + "sBdOklHtWTBK2IEo");
    let sonicYouthRoll = await sonicYouthTable.roll();
    let sonicYouth = sonicYouthRoll.results[0].text;

    const onDemandTable = await fromUuid(rollTablesUUIDPrefix + "O8YPBt8PXfs9qVG2");
    let onDemandRoll = await onDemandTable.roll();
    let onDemand = onDemandRoll.results[0].text;

    const socialMediaTable = await fromUuid(rollTablesUUIDPrefix + "YqqvvmELYXzloDGG");
    let socialMediaRoll = await socialMediaTable.roll();
    let socialMedia = socialMediaRoll.results[0].text;

    const hotNewFadsTable = await fromUuid(rollTablesUUIDPrefix + "CrKB37FUtv4TkXMI");
    let hotNewFadsRoll = await hotNewFadsTable.roll();
    let hotNewFads = hotNewFadsRoll.results[0].text;

    const vendomatGoodsTable = await fromUuid(rollTablesUUIDPrefix + "4NjmuEulOR378I3f");
    let vendomatGoodsRoll = await vendomatGoodsTable.roll();
    let vendomatGoods = vendomatGoodsRoll.results[0].text;

    let message = "Sonic Youth: " + sonicYouth + "<br><br>";
    message += "On Demand: " + onDemand + "<br><br>";
    message += "Social Media: " + socialMedia + "<br><br>";
    message += "Hot New Fads: " + hotNewFads + "<br><br>";
    message += "Vendomat Goods: " + vendomatGoods + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}