// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
	connection: {
		host : 'localhost',
		database: 'forum-db',
		user: DATABASE_USERNAME
		password: DATABASE_PASSWORD
	  },
  },
  production: {
    client: 'pg',
	connection: process.env.DATABASE_URL,
  },
};
