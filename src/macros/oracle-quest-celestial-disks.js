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

let title = "<h3><strong>Oracle Quest - Celestial Brains</strong></h3>";
let message = "A small coalition of " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.165pYBMpRkAewRXO") + " has requested an experienced explorer to travel to " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.d8nxfjEwpZ4DCScn", false) + " " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.lhIPvD5N7mSwFba8", false) + " to collect data on a disk. They warn that all previous attempts have been thwarted by previously unknown " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.l5K7B1gGYVnHyE8w") + ". Why is the fringe group stopping the collection of this information? How do you envision performing research over such a vast surface?"

// Print the message
printMessage(title + message);