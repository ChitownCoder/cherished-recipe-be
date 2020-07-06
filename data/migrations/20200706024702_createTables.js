
exports.up = function(knex) {
 return knex.schema.createTable('user', (tbl) => {
  //? PRIMARY KEY OR ID ?//
  tbl.increments()
  tbl.string('name', 255).notNullable()
  tbl.string('email', 255).notNullable().unique()
  tbl.string('password', 255).notNullable()
 })
 .createTable('recipes', (tbl) => {
  //? ALWAYS WANT TO START OFF WITH tbl.increments ?// 
  tbl.increments()
  tbl.string('title', 255).notNullable()
  tbl.string('source', 255)
  tbl.string('ingredients', 255).notNullable()
  tbl.string('instructions', 255).notNullable()
  tbl.string('category', 255).notNullable()
  tbl.string('image', 255)
  //? FOREIGN KEY ALWAYS GOES ON THE BOTTOM ?//
  tbl.integer('user_id').unsigned().notNullable().references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE')
 })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
  .dropTableIfExists('user')
};
