// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Alternative Businesses</h3>";

    const businessTypeTable = await fromUuid(rollTablesUUIDPrefix + "pZXv4Q5MYD9YtpBf");
    let businessTypeRoll = await businessTypeTable.roll();
    let businessType = businessTypeRoll.results[0].text;

    const qualityTable = await fromUuid(rollTablesUUIDPrefix + "CgnjGlZmI3THIZPi");
    let qualityRoll = await qualityTable.roll();
    let quality = qualityRoll.results[0].text;

    const unusualFeatureTable = await fromUuid(rollTablesUUIDPrefix + "vfPJRyqvXWCR7GJ6");
    let unusualFeatureRoll = await unusualFeatureTable.roll();
    let security = unusualFeatureRoll.results[0].text;

    const statusTable = await fromUuid(rollTablesUUIDPrefix + "kuMH7dq5soMlvuIa");
    let statusRoll = await statusTable.roll();
    let status = statusRoll.results[0].text;

    let message = "Business Type: " + businessType + "<br>";
    message += "Quality: " + quality + "<br>";
    message += "Security: " + security + "<br>";
    message += "Status: " + status + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}