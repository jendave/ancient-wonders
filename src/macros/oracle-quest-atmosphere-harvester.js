// Module macro code by David Hudson and licensed for use under the CC BY-NC-SA 4.0.

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

let title = "<h3><strong>Oracle Quest - Atmosphere Harvester</strong></h3>";
let message = "A " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.165pYBMpRkAewRXO") + " is recruiting a delver to search for a team of " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.3hsqYaXgMPJkGgvA") + "s they had dispatched to a nearby atmosphere harvester. The faction relays that the team was being shuttled by a " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.k7Dk6GrZu3lIwLTP") + " starship and have gone silent since announcing their arrival at the megastructure. What was the faction trying to achieve by sending this team? Why has the team not responded to communications since arriving at the megastructure?"

// Print the message
printMessage(title + message);