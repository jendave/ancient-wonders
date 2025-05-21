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

let title = "<h3><strong>Oracle Quest - Lunar Speculorefractor</strong></h3>";
let message = "A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.165pYBMpRkAewRXO") + " faction is requesting aid in uncovering a vault located beneath the surface of an ice world, suspecting that it contains " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.e2bae1632870e2d2") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.TfBWJ7oJW2ASVapV") + " that will help them resolve " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.b347a87fb81a3abb") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.0c5ce82c7adbb4e2") + " on their homeworld. While their equipment has been unable to penetrate the volume of ice on the planet's surface, they believe they will finally reach their goal by reactivating the offline orbiting lunar speculorefractor and heating the world. What do you need to accomplish to reactivate the megastructure? How do you intend to navigate to the vault once the ice has been melted?"

// Print the message
printMessage(title + message);