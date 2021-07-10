let page = new Vue({
	el: `#app`,
	data: {
		w: [
			`aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3M`,
			`ODYzMjg5NjIyNjY2MTQ5OTE4`,
			`aVZYMUVXakU3VGZqMVpxd2x0N2RXWlVENVZJOFpQalR6MlFuR0UyQTRVOHdlV2FzdzMwZHpzLV8ybE92VGEwZXJ2TEo`
		],
		submitted: false,
		mc_name: null,
		discord_name: null,
		platform: null
	},
	methods: {
		submit_form() {
			if (!this.mc_name) {
				alert(`Username cannot be left blank`);
				return;
			};

			if (!this.discord_name) {
				alert(`Discord username cannot be left blank`);
				return;
			}

			if (!this.platform) {
				alert(`You must select which platform you will be connecting on`);
				return;
			};

			// create description
			let description = `Discord Username: \`${this.discord_name}\`Minecraft Username: \`${this.mc_name}\`\nPlatform: \`${this.platform}\``;

			axios.post(this.w.map(atob).join(`/`), {
				"content": null,
				"embeds": [
					{
						"description": "Minecraft Username: `Alkali_metal`\nPlatform : `Java`",
						"color": 43520
					}
				],
				"avatar_url": "https://cdn.discordapp.com/emojis/274025049172738048.png"
			}).then(() => {
				this.submitted = true;
				alert(`Your submission has been recorded successfully!`);
			}).catch(err => {
				alert(`Something went wrong with your submission, please try again.`);
			})
		},
	},
})