module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/cherished.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
    },
    
    //? Only needed when foreign_keys are needed ?//
		// pool: {
		// 	afterCreate: (conn, done) => {
		// 		conn.run('PRAGMA foreign_keys = OFF', done);
		// 	},
		// },
	},
	testing: {
		client: 'sqlite3',
		connection: {
			filename: './data/test.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
    },
    
    //? Only needed when foreign_keys are needed ?//
		// pool: {
		// 	afterCreate: (conn, done) => {
		// 		conn.run('PRAGMA foreign_keys = OFF', done);
		// 	},
		// },
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};
