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

let title = "<h3><strong>Oracle Quest - Core Manipulators</strong></h3>";
let message = "A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.165pYBMpRkAewRXO") + " faction relays that the sector is being terrorized by a species of invasive " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.gC1wOR7TWK5UnHnD") + " creatures and has determined that their nesting grounds are located on a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.rt66OEtExO4p2Coy") + " planet with an operational geothermal stabilizer. They are requesting aid in destroying the megastructure. How will you attempt to destroy such a wonder? What are the possible ramifications if you are successful?"

// Print the message
printMessage(title + message);