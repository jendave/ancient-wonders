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

let title = "<h3><strong>Oracle Quest - Celestial Harvesters</strong></h3>";
let message = "Following the discovery of a destroyed celestial harvester, a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.165pYBMpRkAewRXO") + " is looking for delvers to enter the megastructure in search of " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.e2bae1632870e2d2") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.TfBWJ7oJW2ASVapV") + ". They urge caution and haste in the endeavor. While while the megastructure's remains are drifting closer to the system's stellar object, the faction also has reason to suspect a powerful " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.u4TkYLno5R2z6vEZ") + " entity resides there. What is the faction sending you to find? What led them to believe there was an entity aboard the ruin?"

// Print the message
printMessage(title + message);