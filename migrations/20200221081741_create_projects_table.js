
exports.up = function(knex) {

    return knex.schema
        .createTable('Projects', function(table) {
            table.increments();

            table.string('name', 128).notNullable();

            table.string('description', 256);
            table.boolean('Completed').notNullable().defaultTo(false);

        })
        .createTable('Resources', function(table) {
            table.increments();

            table.string('name', 256);
            table.string('description', 256).notNullable();


        })
        .createTable('Project_Resources', function(table) {
            table.increments();

            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Projects")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            table.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Resources")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

        })
        .createTable('Project_Tasks', function(table)  {
            table.increments();

            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Projects")
                .onUpdate("CASCADE")
                .onDelete("RESTRICT");

            table.string('description', 256).notNullable();
            table.string('notes', 256);
            table.boolean('Completed').notNullable().defaultTo(false);

           

        })

        
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('Projects')
        .dropTableIfExists('Resources')
        .dropTableIfExists('Project_Resources')
        .dropTableIfExists('Project_Tasks')
  
};
