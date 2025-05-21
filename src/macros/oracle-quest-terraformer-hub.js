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

let title = "<h3><strong>Oracle Quest - Terraformer Hub</strong></h3>";
let message = "A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.mEWovsWhwKc4EYn4") + " settlement on a world harboring an operational terraformer hub has been experiencing " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.g0ddwkBCCkseHNMz") + " following the people of the community having " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.b347a87fb81a3abb") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.0c5ce82c7adbb4e2") + ". The leaders of the settlement are looking for an experienced delver to access the megastructure and use its systems to alter their local landscape to alleviate the difficulties they are facing. What happened to cause this recent trouble? What else might need to be done to resolve this crisis?"

// Print the message
printMessage(title + message);