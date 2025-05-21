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

let title = "<h3><strong>Oracle Quest - Planetary Defenses</strong></h3>";
let message = "After initially reaching the planet without incident, a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.mEWovsWhwKc4EYn4") + " settlement transporting a group of " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.3hsqYaXgMPJkGgvA") + " in search of " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.e2bae1632870e2d2") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.TfBWJ7oJW2ASVapV") + " has become trapped upon the megastructure's surface following its sudden reactivation. Now they need a rescue expedition. What was the reason for their initial expedition? Who caused the shield to reactivate?"

// Print the message
printMessage(title + message);