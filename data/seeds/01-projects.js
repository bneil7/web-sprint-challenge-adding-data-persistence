exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Make A Project Project",
          project_description: "Just make the project.",
          completed_project: true,
        },
        {
          id: 2,
          project_name: "Donde esta la biblioteca",
          project_description: "FIND THE LIBRARY",
          completed_project: true,
        },
      ]);
    });
};
