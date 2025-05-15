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

let title = "<h3><strong>Oracle Quest - Asteroid Processor</strong></h3>";
let message = "A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.mEWovsWhwKc4EYn4") + " settlement has been growing increasingly concerned by the presence of a nearby asteroid processor. Not only has it been stripping the system of resources they rely on, but it has also destroyed a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.k7Dk6GrZu3lIwLTP") + " starship deemed invaluable to their people, as well as " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.b347a87fb81a3abb") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.0c5ce82c7adbb4e2") + ". The people of the settlement wish to prevent any further calamities and are requesting aid in doing so. How do you intend to help the settlement? What obstacles do you envision facing?"

// Print the message
printMessage(title + message);