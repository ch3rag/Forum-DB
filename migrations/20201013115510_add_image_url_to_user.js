
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
	 table.text('image_url').notNullable(); 
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
	 table.dropColumn('image_url'); 
  });
};
