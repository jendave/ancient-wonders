// Module macro code by David Hudson and licensed for use under the CC BY-NC-SA 4.0.

async function printMessage(message) {
    let chatData = { content: message };
    ChatMessage.applyRollMode(chatData, game.settings.get("core", "rollMode"));
    ChatMessage.create(chatData, {})
};

async function rollOracle(tableID, lowerCase = true) {
    let table = await fromUuid(tableID);
    let roll = await table.roll();
    let result = roll.results[0].text;

    if (result.startsWith("@Compendium")) {
        table = await fromUuid(result.slice(1).replace("[", ".").split("]")[0]);
        roll = await table.roll();
        result = roll.results[0].text;
    }

    if (result == "Roll twice") {
        let results = ["Roll twice", "Roll twice"];
        for (let index = 0; index < results.length; index++) {
            let element = results[index];
            do {
                const table = await fromUuid(tableID);
                let roll = await table.roll();
                element = roll.results[0].text.toLowerCase();
            } while (element == "roll twice");
            results[index] = element;
        };
        result = results[0] + " and " + results[1];
    }
    return lowerCase ? result.toLowerCase() : result;
};

let title = "<h3><strong>Oracle Quest - Ringworlds</strong></h3>";
let message = "An explorer from the " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.mEWovsWhwKc4EYn4") + " settlement (reroll the 'Deep Space' result) in which you now reside has arrived with news of a sighting of a >Stanford Torus drifting in deep space. According to the explorer's calculations, the megastructure's trajectory will soon cause it to collide with this community's home. Several propose to avoid the threat by making an exodus and establishing another settlement. However, the overseers who commission you claim that it is possible to travel to the ringworld, find the " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.e2bae1632870e2d2") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.TfBWJ7oJW2ASVapV") + ", and thereby divert or destroy it. Who will accompany you on this expedition? What do you expect to find in this wandering, lost world?"

// Print the message
printMessage(title + message);