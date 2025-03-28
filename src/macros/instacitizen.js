// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

function randomItemInArray(array) {
    return array[(Math.floor(Math.random() * array.length))];
}

try {
    let numberOfInstacitizensDialog = await Dialog.prompt({
        title: "Number of Instacitizens",
        content: `<p>Enter Number of Instacitizens:</p><input type="number" id="input" name="input" min="0" max="99" value="5"/>`,
        rejectClose: true,
        callback: (html) => html.find('input').val()
    });

    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let numberOfInstacitizens = parseInt(numberOfInstacitizensDialog);

    let title = "<h3>Instacitizens</h3>";
    let message = "<b>Instacitizen Results - Interpretations</b><br>";
    message += "<b>- Number of People in Group</b><br>";
    message += "<b>- NPC's Prime Stat</b><br>";
    message += "<b>- First Impression</b><br><br>";

    let instacitizenTable = await fromUuid(rollTablesUUIDPrefix + "4HvjE0SZAN3oNN1H");
    let instacitizenRoll = "";
    let instacitizen = "";

    const firstImpressionsArray = ["HecUcEDCmYjZN6sQ", "BOU3XeYvnsS7qFAh", "taxLlgGg3U5fDtjN", "PVTaRhFFts73EzHR", "khkloFCzpcalwIZR"];
    let firstImpressionsTable = "";
    let firstImpressionsTableArray = "";
    let firstImpressions = "";
    let firstImpressionsRoll = "";

    let additionalInfoRoll = "";

    for (let i = 1; i <= numberOfInstacitizens; i++) {
        instacitizenRoll = await instacitizenTable.roll();
        instacitizen = instacitizenRoll.results[0].text;
        additionalInfoRoll = new Roll('1d10');
        await additionalInfoRoll.evaluate();
        additionalInfo = additionalInfoRoll.total;
        firstImpressionsTable = await fromUuid(rollTablesUUIDPrefix + randomItemInArray(firstImpressionsArray));
        firstImpressionsRoll = additionalInfoRoll.total;
        firstImpressionsTableArray = firstImpressionsTable.getResultsForRoll(firstImpressionsRoll);
        firstImpressions = firstImpressionsTableArray[0].getChatText()
        message += i + ". ";
        message += instacitizen + "<br>";
        message += "- People in Group: " + additionalInfo + "<br>";
        message += "- NPC's Prime Stat: " + additionalInfo + "<br>";
        message += "- First Impression: " + firstImpressions + "<br><br>";
    }

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}