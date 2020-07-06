
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'Kevin', email: 'k@kevin.com', password: '123456'},
        {id: 2, name: 'Kara', email: 'k@kara.com', password: '123456'},
        {id: 3, name: 'HotStuff', email: 'hotstuff@hotstuff.com' , password: '123456'}
      ]);
    });
};
