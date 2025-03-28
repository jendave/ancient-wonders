// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let hackableAssetsDialog = await Dialog.prompt({
        title: "Hackable Assets",
        content: `<p>Enter Number of Nearby Systems:</p><input type="number" id="input" name="input" min="0" max="99" value="5"/>`,
        rejectClose: true,
        callback: (html) => html.find('input').val()
    });

    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let hackableAssetsNumber = parseInt(hackableAssetsDialog);

    let title = "<h3>Hackable Assets</h3>";
    let message = "<b>Hackable Assets - Interpretations</b><br>";
    message += "<b>- Security Level (1=No Security, 10=Killer ICE)</b><br>";
    message += "<b>- Target System's 'Intelligence' Level</b><br>";
    message += "<b>- How Many Other Linked Systems Are Connected to the First</b><br>";
    message += "<b>- How Many Rounds Before a Sysadmin Notices</b><br>";
    message += "<b>- Bugs In The System, Quirks, Features</b><br><br>";

    let hackableAssetsTable = await fromUuid(rollTablesUUIDPrefix + "pOubweTcsrplLPN3");
    let hackableAssetsRoll = "";
    let hackableAssets = "";

    let bugsInTheSystemTable = await fromUuid(rollTablesUUIDPrefix + "drJSk7wxiPWrYr1s");
    let bugsInTheSystemRoll = "";
    let bugsInTheSystem = "";

    let additionalInfoRoll = "";

    for (let i = 1; i <= hackableAssetsNumber; i++) {
        hackableAssetsRoll = await hackableAssetsTable.roll();
        hackableAssets = hackableAssetsRoll.results[0].text;

        additionalInfoRoll = new Roll('1d10');
        await additionalInfoRoll.evaluate();
        additionalInfo = additionalInfoRoll.total;

        bugsInTheSystemRoll = await bugsInTheSystemTable.roll();
        bugsInTheSystem = bugsInTheSystemRoll.results[0].text;

        message += i + ". ";
        message += hackableAssets + "<br>";
        message += "- Security Level: " + additionalInfo + "<br>";
        message += "- System's Intelligence: " + additionalInfo + "<br>";
        message += "- Linked Systems: " + additionalInfo + "<br>";
        message += "- Rounds for Sysadmin: " + additionalInfo + "<br>";
        message += "- Quirks/Features: " + bugsInTheSystem + "<br><br>";
    }

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}