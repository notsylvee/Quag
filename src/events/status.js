const { ActivityType } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message, client) {
        if (!message.channel.id === `1359404696149819412`) return;

        client.user.setPresence({
              status: "idle",
              activities: [
                {
                  type: ActivityType.Custom,
                  name: "customstatus",
                  state: "I'm Glenn Quagmire",
                },
              ],
            });
    }
}