exports.up = knex => knex.schema.createTable('bnbphotos', (tbl) => {
  tbl.increments('listingID').primary();
  tbl.string('listingDesc');
  tbl.boolean('isSaved');
  tbl.text('bio');
});

exports.down = knex => knex.schema.dropTableIfExists('bnbphotos');
