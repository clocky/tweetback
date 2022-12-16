let data = {
	username: "clocky", // No leading @ here
	homeLabel: "Mark McLaughlin",
	homeUrl: "https://www.markmclaughlin.info/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;