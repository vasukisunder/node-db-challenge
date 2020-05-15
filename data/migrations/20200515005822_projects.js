
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(0);
  })
  .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
  })
  .createTable("tasks", tbl => {
      tbl.increments();
      tbl.integer("projectID").unsigned().notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate('CASCADE') 
      .onDelete('CASCADE');
      tbl.string("description").notNullable();
      tbl.string("notes");
  })
  .createTable("project_resources", tbl => {
      tbl.increments();
      tbl.integer("projectID").unsigned().notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate('CASCADE') 
      .onDelete('CASCADE');
      tbl.integer("resourceID").unsigned().notNullable()
      .references("id")
      .inTable("resources")
      .onUpdate('CASCADE') 
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("project_resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
