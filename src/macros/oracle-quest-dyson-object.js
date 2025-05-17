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

let title = "<h3><strong>Oracle Quest - Dyson Object</strong></h3>";
let message = "The " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.mEWovsWhwKc4EYn4") + " settlement at which you are sojourning is close to running out of viable power sources. Recently, the people have discovered an ancient satellite drifting through deep space carrying a precursor power cell. They have surmised that the solar systems " + await rollOracle("Compendium.ancient-wonders.ancientwondersoracles.RollTable.YMoCmvxHxCsuyJGs") + " must be orbited by a Dyson swarm. They have requested your aid in helping them obtain these power sources to alleviate the current crisis. How many precursor power cells does the settlement need? How do you envision obtaining and transporting them back safely?"

// Print the message
printMessage(title + message);