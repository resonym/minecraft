let page = new Vue({
	el: `#app`,
	data: {
		webhook_uri: `https://discord.com/api/webhooks/862484570824638474/OKfkX-OP4tzEWza1sVFYCe3avEjHKiof-NgiJMAWn-6RVexWOOje-4Nkk684tZCZTq_Q`,
		submitted: false,
		name: null,
		platform: null
	},
	methods: {
		submit_form() {
			if (!this.name) {
				alert(`Username cannot be left blank`);
				return;
			};

			if (!this.platform) {
				alert(`You must select which platform you will be connecting on`);
				return;
			};

			// create description
			let description = `Username: \`${this.name}\`\nPlatform: \`${this.platform}\``;

			axios.post(this.webhook_uri, {
				"embeds": [
					{
						"description": description
					}
				]
			}).then(() => {
				this.submitted = true;
				alert(`Your submission has been recorded successfully!`);
			}).catch(err => {
				alert(`Something went wrong with your submission, please try again.`);
			})
		},
	},
})