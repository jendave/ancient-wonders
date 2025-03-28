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
    let numberOfBuildingsDialog = await Dialog.prompt({
        title: "Number of Downtown Buildings",
        content: `<p>Enter Number of Downtown Buildings:</p><input type="number" id="input" name="input" min="0" max="99" value="4"/>`,
        rejectClose: true,
        callback: (html) => html.find('input').val()
    });

    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let numberOfBuildings = parseInt(numberOfBuildingsDialog);

    let title = "<h3>Downtown Buildings</h3>";
    let message = "<b>Building Type</b><br>";
    message += "<b>- Floors (Optional x2)</b><br>";
    message += "<b>- Notable Feature</b><br>";
    message += "<b>- Expanded Feature</b><br><br>";

    let buildingTypeTable = await fromUuid(rollTablesUUIDPrefix + "RAhL2yZlsv1q7AKS");
    let buildingTypeRoll = "";
    let buildingType = "";

    let expandedFeatureTable = await fromUuid(rollTablesUUIDPrefix + "iStOB87CjnxOE7aw");
    let expandedFeatureRoll = "";
    let expandedFeature = "";
    let floorsFeaturesRoll = "";
    let floors = 0;
    const notableFeaturesArray = ["5UVnxCiXJYMzyX01", "NzWJIe6KyLfRjTh4"];
    let notableFeatureRoll = "";
    let notableFeatureTable = "";
    let notableFeatureTableArray = "";
    let notableFeature = "";

    for (let i = 1; i <= numberOfBuildings; i++) {
        buildingTypeRoll = await buildingTypeTable.roll();
        buildingType = buildingTypeRoll.results[0].text;
        floorsFeaturesRoll = new Roll('1d10');
        await floorsFeaturesRoll.evaluate();
        floors = floorsFeaturesRoll.total;
        notableFeatureTable = await fromUuid(rollTablesUUIDPrefix + randomItemInArray(notableFeaturesArray));
        notableFeatureRoll = floorsFeaturesRoll.total;
        notableFeatureTableArray = notableFeatureTable.getResultsForRoll(notableFeatureRoll);
        notableFeature = notableFeatureTableArray[0].getChatText()
        expandedFeatureRoll = await expandedFeatureTable.roll();
        expandedFeature = expandedFeatureRoll.results[0].text;
        message += i + ". ";
        message += buildingType + "<br>";
        message += "-   " + floors + " floors(s)<br>";
        message += "-   " + notableFeature + "<br>";
        message += "-   " + expandedFeature + "<br><br>";
    }

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}