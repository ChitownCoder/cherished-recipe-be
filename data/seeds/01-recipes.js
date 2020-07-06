exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipes')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{
					id: 1,
					title: 'Sloppy Joe',
					source: 'Aunt Bertha',
					ingredients: 'Little bit of this and that',
					instructions: 'Cook till Done ',
					category: '🥘',
					image:
						'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fsloppyjoe.jpg%3Fitok%3DiJPf_Hbq',
					user_id: 2,
				},
				{
					id: 2,
					title: 'Tater Tot Casserole',
					source: 'Kale',
					ingredients: `Who Know's`,
					instructions: 'cook in oven',
					category: '🥘',
					image:
						'https://www.bunsinmyoven.com/wp-content/uploads/2019/10/tater-tot-casserole.jpg',
					user_id: 3,
				},
				{
					id: 3,
					title: 'Tamale Pie',
					source: 'Uncle Kurt',
					ingredients: 'Stuff',
					instructions: 'Cook it up',
					category: '🧀',
					image:
						'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2020%2F02%2Fmain%2F2626001_qfste_tamale_pie_007_1.jpg%3Fitok%3DYlpwLe9_',
					user_id: 1,
				},
			]);
		});
};


//? GIVE EACH USER 3 RECIPES AND CHECK TABLES IN SQL ?//