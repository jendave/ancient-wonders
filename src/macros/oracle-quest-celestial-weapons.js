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

let title = "<h3><strong>Oracle Quest - Celestial Weapons</strong></h3>";
let message = "After discovering a celestial weapon, tensions between two disparate " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.8BmSiD90JCXqcvt6") + " and " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.8BmSiD90JCXqcvt6") + " dominions embroiled in a cold war have escalated. Each outwardly claims they have no interest in attempting to control or use the megastructure to " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.b347a87fb81a3abb") + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.0c5ce82c7adbb4e2") + ". It has recently been uncovered that a schism within one of the dominions has occurred, resulting in the establishment of a new " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.l5K7B1gGYVnHyE8w") + " that reaches out to you specifically for help. What caused the schism within the dominion? Why did the fringe group reach out to you specifically?"

// Print the message
printMessage(title + message);