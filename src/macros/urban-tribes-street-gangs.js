// Macro by David Hudson under the MIT License.

function printMessage(message) {
    let chatData = { content: message};
    ChatMessage.applyRollMode(chatData, game.settings.get("core","rollMode"));
    ChatMessage.create(chatData, {})
};

try {
    let rollTablesUUIDPrefix = "Compendium.augmented-reality-foundry.augmentedrealityrolltables.RollTable.";

    let title = "<h3>Urban Tribes: Street Gangs</h3>";

    const name1Table = await fromUuid(rollTablesUUIDPrefix + "wXKMKFaCiuP4NYWO");
    let name1Roll = await name1Table.roll();
    let name1 = name1Roll.results[0].text;

    const name2Table = await fromUuid(rollTablesUUIDPrefix + "XWpo8CpZudwCCrqH");
    let name2Roll = await name2Table.roll();
    let name2 = name2Roll.results[0].text;

    const description1Table = await fromUuid(rollTablesUUIDPrefix + "tN5ZvupJuaOAVkuf");
    let description1Roll = await description1Table.roll();
    let description1 = description1Roll.results[0].text;

    const description2Table = await fromUuid(rollTablesUUIDPrefix + "3EBQFyfepebEZBTp");
    let description2Roll = await description2Table.roll();
    let description2 = description2Roll.results[0].text;

    const description3Table = await fromUuid(rollTablesUUIDPrefix + "NzysTEgDDYpf0LTN");
    let description3Roll = await description3Table.roll();
    let description3 = description3Roll.results[0].text;

    const sphereOfInfluenceTable = await fromUuid(rollTablesUUIDPrefix + "AhaQArpQwQ8s7vYY");
    let sphereOfInfluenceRoll = await sphereOfInfluenceTable.roll();
    let sphereOfInfluence = sphereOfInfluenceRoll.results[0].text;

    const relationshipTable = await fromUuid(rollTablesUUIDPrefix + "tOcfatbCcF9L4J1P");
    let relationshipRoll = await relationshipTable.roll();
    let relationship = relationshipRoll.results[0].text;

    const whatAreTheyUpToTable = await fromUuid(rollTablesUUIDPrefix + "BKxJwxmW1R7DzYUJ");
    let whatAreTheyUpToRoll = await whatAreTheyUpToTable.roll();
    let whatAreTheyUpTo = whatAreTheyUpToRoll.results[0].text;

    const npcsTable = await fromUuid(rollTablesUUIDPrefix + "C9SrIr6bFoZbd6Cd");
    let npcsRoll = await npcsTable.roll();
    let npcs = npcsRoll.results[0].text;

    const otherNpcsTable = await fromUuid(rollTablesUUIDPrefix + "kFmWR6PRTeJeeqLB");
    let otherNpcsRoll = await otherNpcsTable.roll();
    let otherNpcs = otherNpcsRoll.results[0].text;

    const rumoursHooksTable = await fromUuid(rollTablesUUIDPrefix + "BKxJwxmW1R7DzYUJ");
    let rumoursHooksRoll = await rumoursHooksTable.roll();
    let rumoursHooks = rumoursHooksRoll.results[0].text;

    let message = "Name: " + name1 + " " + name2 + "<br>";
    message += "Description: " + description1 + ", " + description2 + ", " + description3 + "<br>";
    message += "Sphere Of Influence: " + sphereOfInfluence + "<br>";
    message += "Relationship: " + relationship + "<br>";
    message += "What Are They Up To?: " + whatAreTheyUpTo + "<br>";
    message += "NPCs: " + npcs + " and " + otherNpcs + "<br>";
    message += "Rumours/Hooks: " + rumoursHooks + "<br>";

    // Print the message
    printMessage(title + message);

}
catch (e) {
    console.log(e);
}