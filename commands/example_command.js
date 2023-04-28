const { SlashCommandBuilder } = require('@discordjs/builders');
const queries = require('../database/queries');
const control = require('../controls');
/*
 * When new values added:
 * - add chioce[i+1] to the end of options
 *
 */
module.exports = {
	data:new SlashCommandBuilder()
		.setName('name')
		.setDescription('something this does')
		.addIntegerOption(option => option.setName('value')
			.setDescription('a number value')
			.setRequired(true))
		.addStringOption(option => option.setName('string arg name')
			.setDescription('some sorta string?')
			.setRequired(true)
			.addChoices("option 1", "This can be a var too!"))
		.addUserOption(option => option
			.setName('discord user')
			.setDescription('some account')
			.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getMember('discord user');
		const amt = interaction.options.getInteger('value');
		const reason = interaction.options.getString('string arg name');

		await queries.give_respect(user, amt, reason, interaction);
	},
};