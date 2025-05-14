// Macro by David Hudson under the MIT License.

async function printMessage(message) {
    let chatData = { content: message };
    ChatMessage.applyRollMode(chatData, game.settings.get("core", "rollMode"));
    ChatMessage.create(chatData, {})
};

async function rollOracle(tableID) {
    const table = await fromUuid(tableID);
    let roll = await table.roll();
    let result = roll.results[0].text.toLowerCase();

    if (result == "roll twice") {
        let results = ["roll twice", "roll twice"];
        // results.forEach(async (element, index) => {
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
    return result;
};

let title = "<h3><strong>Oracle Quest - Unidentified Megastructure</strong></h3>";
let message = "Rumors extolling the discovery of a new type of megastructure have begun to circulate. A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.xuVdvN3Ty9VMqk1P") + " guild, warning that its sector is believed to be infested with a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.gC1wOR7TWK5UnHnD") + " creature, commissioned delvers to locate the site, learn its purpose, and return with this knowledge. While many have accepted the task, only the first to return will be rewarded. Why does this guild have an interest in this information? How will you ensure you are the first delver to return?."

// Print the message
printMessage(title + message);