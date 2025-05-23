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

let title = "<h3><strong>Oracle Quest - Unidentified Megastructure</strong></h3>";
let message = "Rumors extolling the discovery of a new type of megastructure have begun to circulate. A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.xuVdvN3Ty9VMqk1P") + " guild, warning that its sector is believed to be infested with a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.gC1wOR7TWK5UnHnD") + " creature, commissioned delvers to locate the site, learn its purpose, and return with this knowledge. While many have accepted the task, only the first to return will be rewarded. Why does this guild have an interest in this information? How will you ensure you are the first delver to return?"

// Print the message
printMessage(title + message);