exports.up = function (knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("id");

      tbl.string("project_name", 255).notNullable();
      tbl.text("project_description");
      tbl.boolean("completed_project").defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increments("id");

      tbl.string("resource_name", 255).notNullable().unique();
      tbl.text("resource_description");
    })

    .createTable("tasks", tbl => {
      tbl.increments("id");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl.string("task_name", 255).notNullable();

      tbl.text("task_description").notNullable();

      tbl.text("task_notes");

      tbl.boolean("completed_task").defaultTo(false);
    })

    .createTable("project_resources", tbl => {
      tbl.increments("id");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
