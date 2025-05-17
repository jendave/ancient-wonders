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

let title = "<h3><strong>Oracle Quest - Ecopoiesis Array</strong></h3>";

let message = "A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.165pYBMpRkAewRXO") + " faction is requesting delvers to aid their " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.mEWovsWhwKc4EYn4") + " settlement, which is located on a planet with an offline ecopoiesis array. They need to " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.b347a87fb81a3abb") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.0c5ce82c7adbb4e2") + ", and this will only be possible by reactivating the megastructure to manipulate the planet's atmosphere and biosphere. What goal is the faction looking to achieve? How can manipulating the planet's environment achieve this goal?"

// Print the message
printMessage(title + message);